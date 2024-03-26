import {
  NavigationContainer,
  DefaultTheme as NavigatorTheme,
} from "@react-navigation/native";
import { fonts } from "@styles";
import * as React from "react";
import "react-native-gesture-handler";
import {
  configureFonts,
  DefaultTheme,
  ThemeProvider,
} from "react-native-paper";
import RootRouter from "./root.router";

const { useCallback } = React;

export default function Router() {
  return (
    <ThemeProvider
      theme={{
        ...DefaultTheme,
        fonts: configureFonts({
          ios: fonts,
          android: fonts,
          default: fonts,
        }),
        colors: {
          ...DefaultTheme.colors,
          primary: "blue",
        },
      }}
    >
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
    </ThemeProvider>
  );
}
