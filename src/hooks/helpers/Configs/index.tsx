import { getCurrentTheme, getLocalization, setNewTheme } from "@common";
import { App, useAppDispatch } from "@store";
import { AppDispatch } from "@types";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { useDeviceOS } from "../Checks";

const setAppLang = (dispatch: AppDispatch, languageTag: string) => {
  dispatch(App.setLanguage(languageTag));
  // return store.dispatch(setLanguage(languageTag))

  // return store.dispatch({
  //   type: SET_APP_LANGUAGE,
  //   payload: AvailableLanguages[languageTag] || AvailableLanguages.en,
  // });
};

const checkIsDarkTheme = (themeName: string) => themeName === "dark";

const useLoadConfigs = () => {
  const dispatch = useAppDispatch();
  const { isIos } = useDeviceOS();
  const colorScheme = useColorScheme();
  const [loading, setLoading] = useState(true);

  const onMount = async () => {
    if (isIos) {
      await SplashScreen.hide();
      setTimeout(async () => {
        await setLoading(false);
      }, 1);
      // await checkNotificationPermission();
    } else {
      SplashScreen.hide();
      setLoading(false);
    }
  };
  const loadData = async () => {
    await onMount();
  };

  useEffect(() => {
    loadData();
  }, []);

  const getTheme = (dispatch: AppDispatch, colorScheme?: string) => {
    const currentTheme = getCurrentTheme();
    if (!currentTheme) {
      console.log("!currentTheme===", colorScheme);
      dispatch(App.setTheme(colorScheme));
      setNewTheme(colorScheme!);
    } else {
      dispatch(App.setTheme(currentTheme));
      setNewTheme(currentTheme);
    }
    // setLoading(false);
  };
  return {
    loading,
  };
};

const useLocalization = () => {
  const dispatch: AppDispatch = useAppDispatch();
  useEffect(() => {
    const lang = getLocalization();
    if (lang) {
      setAppLang(dispatch, lang);
    } 
    return () => {};
  }, []);
};

export { checkIsDarkTheme, useLoadConfigs, useLocalization };
