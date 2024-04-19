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
const useOnfocusedLoginStatusBar = () => {
  useFocusEffect(() => {
    StatusBar.setHidden(false)
    StatusBar.setBarStyle("light-content", true);
    StatusBar.setBackgroundColor(appColors.appColor);
  })
    ;
}

const useOnfocusedHomeStatusBar = () => {
  useFocusEffect(() => {
    StatusBar.setHidden(false)
    StatusBar.setBarStyle("dark-content", true);
    StatusBar.setBackgroundColor(appColors.white)
  })
    ;
}

const deviceTheme = Appearance.getColorScheme()

export {
  deviceTheme, useOnfocusedHomeStatusBar, useOnfocusedLoginStatusBar,
  useStatusBar,
  useStatusBarLoadingScreen, useTheme
};

