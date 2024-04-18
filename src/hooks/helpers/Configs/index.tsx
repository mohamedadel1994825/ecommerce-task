import {
  appColors,
  appStyles,
  getCurrentTheme,
  getLocalization,
  setNewTheme,
  showOnboarding,
} from "@common";
import { translate } from "@language";
import NetInfo from "@react-native-community/netinfo";
import { useIsFocused } from "@react-navigation/native";
import { setDeviceInfo } from "@services";
import { App, reduxStore, useAppDispatch } from "@store";
import { AppDispatch } from "@types";
import React, { useEffect, useMemo, useState } from "react";
import { Text, View, useColorScheme } from "react-native";
import {
  Freshchat,
  FreshchatConfig,
  FreshchatNotificationConfig,
} from "react-native-freshchat-sdk";
import SplashScreen from "react-native-splash-screen";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useDeviceOS } from "../Checks";
import { _oneSignalInit } from "../Home";

const setAppLang = (dispatch: AppDispatch, languageTag: string) => {
  dispatch(App.setLanguage(languageTag));
  // return store.dispatch(setLanguage(languageTag))

  // return store.dispatch({
  //   type: SET_APP_LANGUAGE,
  //   payload: AvailableLanguages[languageTag] || AvailableLanguages.en,
  // });
};

const showToastMsg = (
  text1,
  position,
  topOffset,
  bottomOffset,
  visibilityTime
) => {
  Toast.show({
    // type: 'success',
    position: position || "bottom",
    text1,
    // text2: `${translate('report_success_message_1')} ${translate('report_success_message_2')}`,
    visibilityTime: visibilityTime || 1000,
    topOffset: topOffset ?? topOffset,
    // topOffset: 150,
    bottomOffset: bottomOffset ?? bottomOffset,
  });
  // setTimeout(() => {
  //   // navigate('Home');
  // }, 300);
};
const toastConfig = {
  success: ({ text1, text2 }) => (
    <View style={{ ...appStyles.toast }}>
      <Text style={{ ...appStyles.toastTitle }}>{text1}</Text>
      {/* <View style={styles.toastTitleView}>
        <Feather name={'check'} size={20} color={'#FFF'} />
        <Text style={styles.toastTitle}>{text1}</Text>
      </View>
      <Text style={styles.toastMessage}>{text2}</Text> */}
    </View>
  ),
  error: () => {},
  info: () => {},
  any_custom_type: () => {},
};


const checkIsDarkTheme = (themeName: string) => themeName === "dark";

const useLoadConfigs = () => {
  const dispatch = useAppDispatch();
  const { isIos } = useDeviceOS();
  const colorScheme = useColorScheme();
  const [loading, setLoading] = useState(true);
  const setInitialStepsAndTheme = (initialSteps: any[]) => {
    dispatch(App.setInitialSteps(initialSteps));
    getTheme(dispatch, colorScheme!);
    dispatch(App.setIsSplashScreen(false));
  };
  const onMount = async () => {
    if (isIos) {
      const isShowOnboarding = showOnboarding();
      const initialSteps = [];
      const localization = getLocalization();
      await SplashScreen.hide();
      if (!localization) initialSteps.push("1");
      console.log("initialSteps", initialSteps);
      console.log("isShowOnboarding", isShowOnboarding);
      if (isShowOnboarding && localization) initialSteps.push("2");
      setInitialStepsAndTheme(initialSteps);
      setTimeout(async () => {
        await setLoading(false);
      }, 1);
      // await checkNotificationPermission();
    } else {
      SplashScreen.hide();
      const isShowOnboarding = showOnboarding();
      const initialSteps = [];
      const localization = getLocalization();
      setTimeout(async () => {
        await setLoading(false);
      }, 1);
      if (!localization) initialSteps.push("1");
      if (isShowOnboarding && localization) initialSteps.push("2");
      setInitialStepsAndTheme(initialSteps);
      // await checkNotificationPermission();
    }
  };
  const loadData = async () => {
    await onMount();
  };
  // const hideSplash = async () => {
  //   await SplashScreen.hide();
  //   await dispatch(App.setIsSplashScreen(false));
  //   await getTheme();
  // };
  useEffect(() => {
    loadData();
    // hideSplash()
    // loadData().then(hideSplash)
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


const useFreshchatInit = () => {
  const freshchatNotificationConfig = new FreshchatNotificationConfig();
  freshchatNotificationConfig.priority =
    FreshchatNotificationConfig.NotificationPriority.PRIORITY_HIGH;
  freshchatNotificationConfig.notificationSoundEnabled = false;
  Freshchat.setNotificationConfig(freshchatNotificationConfig);

  const freshchatConfig = useMemo(
    () => new FreshchatConfig(appId, apiKey),
    [appId, apiKey]
  );
  useEffect(() => {
    Freshchat.init(freshchatConfig);
    return () => {};
  }, [freshchatConfig]);
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

const useSetDeviceInfo = (userId: string) => {
  // console.log('setDeviceInfo======')
  useMemo(() => setDeviceInfo(userId), []);
};
const useOneSignalInit = () => {
  useMemo(() => _oneSignalInit(), []);
};
const fetchNetwork = async () => {
  const state = await NetInfo.fetch();
  return state.isConnected;
};
const useNetWork = () => {
  const [isNetworkConnected, setIsNetworkConnected] = useState(false);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      const unsubscribe = NetInfo.addEventListener((state) => {
        setIsNetworkConnected(state.isConnected);
      });
      return () => {
        unsubscribe();
      };
    }
  }, [isFocused]);
  return { isNetworkConnected };
};
export {
  checkIsDarkTheme,
  fetchNetwork,
  showToastMsg,
  toastConfig,
  useFreshchatInit,
  useLoadConfigs,
  useLocalization,
  useNetWork,
  useOneSignalInit,
  useSetDeviceInfo,
};
