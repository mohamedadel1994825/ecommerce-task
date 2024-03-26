import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { RootRouter } from "@interfaces";

import TabsRouter from "./tabs.router";

const { Fragment } = React;
const RootStack = createNativeStackNavigator<RootRouter>();

export default () => {
  return (
    <Fragment>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <Fragment>
          <RootStack.Screen name="Tabs" component={TabsRouter} />
        </Fragment>
      </RootStack.Navigator>
    </Fragment>
  );
};
