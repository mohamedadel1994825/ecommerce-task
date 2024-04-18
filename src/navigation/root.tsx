import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { enableFreeze, enableScreens } from "react-native-screens";
import CustomSidebar from "../components/Views/Sidebar";

import BugsnagPluginReactNavigation from "@bugsnag/plugin-react-navigation";
import Bugsnag from "@bugsnag/react-native";
import { LoadingComponent, QRScanner } from "@components";
import { useLoadConfigs } from "@hooks";
import { translate } from "@language";
import {
  AddPaymentMethod,
  // AddCard,
  Bikes,
  History,
  Home,
  InvoicePdf,
  Invoices,
  LanguageSelection,
  LocationAccess,
  Login,
  Notifications,
  Onboarding,
  PayUnPaid,
  Payment,
  Promotion,
  ScanQrScreen,
  Scooters,
  TripHistoryDetails,
  TripsRating,
  UnlockScreen,
  Wallet,
} from "@screens";
import {
  AppRootState,
  UserRootState,
  selectApp,
  selectUser,
  useAppSelector,
} from "@store";
import { RootStackParamList } from "@types";
import { setNavigationRef } from "./navigation";
import { ScreenEnum } from "./screenEnums";
import { routes as sidebarRoutes } from "./sidebarRoutes";

Bugsnag.start({
  plugins: [new BugsnagPluginReactNavigation()],
  codeBundleId: "3.0.907",
});
enableScreens(true);
enableFreeze(false);
const { createNavigationContainer } = Bugsnag.getPlugin("reactNavigation");
const BugsnagNavigationContainer =
  createNavigationContainer(NavigationContainer);
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, gestureEnabled: false }}
    initialRouteName={ScreenEnum.Login} // Use ScreenEnum values here
  >
    <Stack.Screen name={ScreenEnum.Login} component={Login} />
    <Stack.Screen
      options={{}}
      name={ScreenEnum.LocationAccess}
      component={LocationAccess}
    />
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
    <Stack.Screen
      name={ScreenEnum.Home}
      component={Home}
      options={{
        headerTransparent: true,
        // freezeOnBlur: true,
      }}
    />
    <Stack.Screen name={ScreenEnum.ScanQr} component={ScanQrScreen} />
    <Stack.Screen
      options={{}}
      name={ScreenEnum.LocationAccess}
      component={LocationAccess}
    />
    <Stack.Screen name={ScreenEnum.Promotion} component={Promotion} />

    <Stack.Screen
      name={ScreenEnum.Unlock}
      component={UnlockScreen}
      options={{
        title: translate("unlock"),
      }}
    />
    <Stack.Screen
      name={ScreenEnum.TripHistoryDetails}
      component={TripHistoryDetails}
    />

    {/* changed this to nest the routes properly */}
    <Stack.Screen name={ScreenEnum.Notifications} component={Notifications} />
    {/* <Stack.Screen
      name="Packages"
      component={CreditPackages}
      options={{ gestureEnabled: false }}
    /> */}
    <Stack.Screen name={ScreenEnum.Invoices} component={Invoices} />
    <Stack.Screen name={ScreenEnum.InvoicePdf} component={InvoicePdf} />

    <Stack.Screen name={ScreenEnum.TripsRating} component={TripsRating} />

    <Stack.Screen name={ScreenEnum.QrScanner} component={QRScanner} />
    {/* <Stack.Screen
      name="AddCard"
      component={AddCard}
      options={{ gestureEnabled: false }}
    /> */}
    <Stack.Screen name={ScreenEnum.History} component={History} />

    {/* How to ride */}
    <Stack.Screen
      name={ScreenEnum.Bikes}
      component={Bikes}
      // options={{ gestureEnabled: false }}
    />
    <Stack.Screen
      name={ScreenEnum.Scooters}
      component={Scooters}
      // options={{ gestureEnabled: false }}
    />
    <Stack.Screen name={ScreenEnum.Payment} component={Payment} />

    <Stack.Screen name={ScreenEnum.PayUnPaid} component={PayUnPaid} />
    <Stack.Screen name={ScreenEnum.Wallet} component={Wallet} />

    <Stack.Screen
      name={ScreenEnum.AddPaymentMethod}
      component={AddPaymentMethod}
    />
  </Stack.Navigator>
);
const DrawerStack = () => (
  <Drawer.Navigator
    screenOptions={{
      swipeEnabled: false,
      headerShown: false,
      drawerStyle: {
        width: 320,
        borderBottomRightRadius: 50,
        overflow: "hidden",
      },
      drawerType: "front",
    }}
    // defaultStatus='open'
    drawerContent={(props) => <CustomSidebar {...props} />}
    initialRouteName={ScreenEnum.HomeStack}
  >
    <Drawer.Screen name={ScreenEnum.HomeStack} component={MainStack} />
    <Drawer.Screen name={ScreenEnum.Auth} component={AuthStack} />
    {sidebarRoutes.map((route) => (
      <Drawer.Screen
        key={route.id}
        name={route.name}
        component={route.component}
        options={
          {
            // gestureEnabled: false,
          }
        }
      />
    ))}
  </Drawer.Navigator>
);
const OnboardingStack = (
  loading: boolean,
  initialSteps: any[],
  props: any,
  userId: string
) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      animationEnabled: false,
    }}
  >
    {loading ? (
      <Stack.Screen name={ScreenEnum.Loading} component={LoadingComponent} />
    ) : (
      <>
        {initialSteps?.includes("1") && (
          <Stack.Screen
            name={ScreenEnum.LanguageSelection}
            component={LanguageSelection}
          />
        )}
        {initialSteps?.includes("2") && (
          <Stack.Screen
            name={ScreenEnum.Onboarding}
            component={Onboarding}
            initialParams={{ remove: 12 }}
          />
        )}

        {userId == "" ? (
          <Stack.Screen name={ScreenEnum.Auth} component={AuthStack} />
        ) : (
          <>
            <Stack.Screen name={ScreenEnum.Main} component={DrawerStack} />
          </>
        )}
      </>
    )}
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
  const { theme, initialSteps } = appSelector;
  // console.log('initialSteps', initialSteps)
  const { loading } = useLoadConfigs();
  useEffect(() => {
    setNavigationRef(navigationRef.current);
  }, []);

  // The following lines were added for nesting the sidebar routes
  return (
    <BugsnagNavigationContainer
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
      {OnboardingStack(loading, initialSteps, props, userId)}
    </BugsnagNavigationContainer>
  );
};

export default RootNavigator;
