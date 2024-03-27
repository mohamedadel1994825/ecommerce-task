import {
  NavigationContainer,
  DefaultTheme as NavigatorTheme,
} from "@react-navigation/native";
import * as React from "react";
import "react-native-gesture-handler";
import RootRouter from "./root.router";

export default function Router() {
  return (
    <NavigationContainer
      theme={{
        ...NavigatorTheme,
        colors: {
          ...NavigatorTheme.colors,
          primary: "blue",
        },
      }}
    >
      <RootRouter />
    </NavigationContainer>
  );
}
