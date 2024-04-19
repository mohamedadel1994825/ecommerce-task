import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { enableFreeze, enableScreens } from "react-native-screens";

import { useLoadConfigs } from "@hooks";

import { LoadingComponent } from "@components";
import { LoginStackProps } from "@interfaces";
import { LoginScreen } from "@screens";
import {
  AppRootState,
  UserRootState,
  selectApp,
  selectUser,
  useAppSelector,
} from "@store";
import { RootStackParamList } from "@types";
import { setNavigationRef } from "./navigation";
import TabsRouter from "./routers/tabs.router";
import { ScreenEnum } from "./screenEnums";
enableScreens(true);
enableFreeze(false);

const Stack = createNativeStackNavigator();
const AuthStack = ({ isLoading }: LoginStackProps) => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, gestureEnabled: false }}
    initialRouteName={ScreenEnum.Loading} // Use ScreenEnum values here
  >
    <>
      {isLoading ? (
        <Stack.Screen name={ScreenEnum.Loading} component={LoadingComponent} />
      ) : (
        <Stack.Screen name={ScreenEnum.Login} component={LoginScreen} />
      )}
    </>
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator
    
    initialRouteName={ScreenEnum.Home} // Use ScreenEnum values here
    screenOptions={() => ({
      gestureEnabled: false,
      // cardOverlayEnabled: true,
      headerShown: false,
      // detachPreviousScreen: true,
    })}
  >
    <Stack.Screen name="Tabs" component={TabsRouter} />
  </Stack.Navigator>
);

const RootNavigator = (props: any) => {
  const navigationRef =
    React.useRef<NavigationContainerRef<RootStackParamList>>(null);
  const appSelector: AppRootState = useAppSelector(selectApp);
  const userSelector: UserRootState = useAppSelector(selectUser);
  const {
    user: { userId },
  } = userSelector;
  const { theme } = appSelector;
  // console.log('initialSteps', initialSteps)
  const { isLoading } = useLoadConfigs();
  useEffect(() => {
    setNavigationRef(navigationRef.current);
  }, []);

  // The following lines were added for nesting the sidebar routes
  return (
    <NavigationContainer
      theme={{
        dark: theme?.name === "dark",
        colors: {
          appColor: theme?.appColor,
          background: theme?.background,
          text: theme?.text,
          card: theme?.card,
          border: theme?.border,
          notification: theme?.notification,
        },
      }}
      ref={setNavigationRef}
    >
      <>{!userId ? <AuthStack {...{ isLoading }} /> : <MainStack />}</>
    </NavigationContainer>
  );
};

export default RootNavigator;
