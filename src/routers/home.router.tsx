import { HomeRouter } from "@interfaces";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { HomeScreen } from "@screens";
import * as React from "react";
import { useTranslation } from "react-i18next";

const HomeStack = createStackNavigator<HomeRouter>();

export default () => {
  const { t } = useTranslation();
  const generateScreenOptions = React.useCallback(
    ({}): StackNavigationOptions => ({
      headerRightContainerStyle: {
        paddingHorizontal: 8,
      },
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontFamily: "Cairo-SemiBold",
      },
    }),
    []
  );

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={generateScreenOptions}
      />
    </HomeStack.Navigator>
  );
};
