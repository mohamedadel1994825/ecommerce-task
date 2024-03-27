import { TabsRouter } from "@interfaces";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Colors } from "@styles";
import * as React from "react";
import { TabsMiddleAddIcon } from "../components";
import { BottomTabScreenOptions } from "./BottomTabScreenOptions";
import HomeRouter from "./home.router";

const BottomTabs = createMaterialBottomTabNavigator<TabsRouter>();

export default React.memo(() => {
  return (
    <>
      <TabsMiddleAddIcon />
      <BottomTabs.Navigator
        initialRouteName="Home"
        sceneAnimationEnabled
        activeColor={Colors.primary}
      >
        <BottomTabs.Screen
          name="HomeScreen"
          component={HomeRouter}
          options={BottomTabScreenOptions().home}
        />
        <BottomTabs.Screen
          name="Categories"
          component={HomeRouter}
          options={BottomTabScreenOptions().categories}
        />
        <BottomTabs.Screen
          name="Deals"
          component={HomeRouter}
          options={BottomTabScreenOptions().deals}
        />
        <BottomTabs.Screen
          name="Cart"
          component={HomeRouter}
          options={BottomTabScreenOptions().cart}
        />
        <BottomTabs.Screen
          name="Account"
          component={HomeRouter}
          options={BottomTabScreenOptions().account}
        />
      </BottomTabs.Navigator>
    </>
  );
});
