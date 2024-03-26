import { Colors } from "@styles";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import SplashScreen from "react-native-splash-screen";

export const useConfigs = () => {
    useEffect(() => {
        SplashScreen.hide();
        StatusBar.setBarStyle("dark-content");
        StatusBar.setBackgroundColor(Colors.white);
    }, []);
}