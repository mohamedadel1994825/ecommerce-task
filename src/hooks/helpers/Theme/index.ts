import { appColors } from "@common";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect } from "react";
import { Appearance, StatusBar } from "react-native";
import { ThemeType } from "store/slices/app/types";

const useTheme = (theme: ThemeType) => {
  const isDarkTheme = theme.name == "dark";
  return {
    isDarkTheme,
  };
};


const useStatusBar = () => {
  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);
  }, []);
}

const useStatusBarLoadingScreen = () => {
  useEffect(() => {
    StatusBar.setHidden(true)
  }, []);
}
export const useOnfocusedStatusBar = () => {
  useFocusEffect(() => {
    StatusBar.setHidden(false)
    StatusBar.setBarStyle("light-content", true);
    StatusBar.setBackgroundColor(appColors.appColor);

  })
    ;
}

const deviceTheme = Appearance.getColorScheme()

export { deviceTheme, useStatusBar, useStatusBarLoadingScreen, useTheme };

