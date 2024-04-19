import { appColors } from "@common";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as React from "react";
import { BottomTabScreenOptions } from "./BottomTabScreenOptions";
import HomeRouter from "./home.router";

const BottomTabs = createMaterialBottomTabNavigator<any>();

export default React.memo(() => {
  return (
    <>
      <BottomTabs.Navigator
        keyboardHidesNavigationBar={true}
        
        initialRouteName="Home"
        sceneAnimationEnabled
        activeColor={appColors.appColor}
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
        {/* <BottomTabs.Screen
          name="Deals"
          component={HomeRouter}
          options={BottomTabScreenOptions().deals}
        /> */}
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
