import { useIsFocused, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Appearance, StatusBar } from "react-native";
import { ThemeType } from "store/slices/app/types";
import { useDeviceOS, useIsDrawerOpen } from "../Checks";

const useTheme = (theme: ThemeType) => {
  const isDarkTheme = theme.name == "dark";
  return {
    isDarkTheme,
  };
};
export const useStatusBar = () => {
  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);
  }, []);
}
export const useOnfocusedStatusBar = (theme: any) => {
  const isFocused = useIsFocused()
  const route = useRoute()
  const { isDrawerOpen } = useIsDrawerOpen()
  const { isDarkTheme } = useTheme(theme)
  const { isIos } = useDeviceOS()
  // console.log('route.name', route.name)
  const setStatusBarHomeAfterTheme = () => {
    StatusBar.setBarStyle(
      isDarkTheme ? 'light-content' : 'dark-content',
      true
    );
    if (!isIos) {
      StatusBar.setBackgroundColor(
        isDarkTheme ? "#242225" : "#f6fff9",
        true
      );
    }
  }
  useEffect(() => {
    if (isFocused && !isDrawerOpen) {
      if (route.name == 'Home') {
        setStatusBarHomeAfterTheme()
      } else {
        StatusBar.setBarStyle("light-content", true);
        if (!isIos) {
          StatusBar.setTranslucent(true);
          StatusBar.setBackgroundColor(theme.appColor);
        }
      }
    }

  }, [isFocused, isDrawerOpen]);
  return {
    setStatusBarHomeAfterTheme
  }
}

const deviceTheme = Appearance.getColorScheme()

export { deviceTheme, useTheme };

