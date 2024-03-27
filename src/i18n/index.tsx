import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";
import RNRestart from "react-native-restart";
import ar from "./ar.json";
import en from "./en.json";

import AsyncStorage from "@react-native-async-storage/async-storage";

i18n.use(initReactI18next).init({
  resources: {
    ar,
    en,
  },
  lng: "en",
  fallbackLng: "en",
  react: {
    bindI18n: "languageChanged",
    useSuspense: false,
  },
  debug: true,
});

i18n.languages = ["ar", "en"];

i18n.on("languageChanged", async (lng) => {
  await AsyncStorage.setItem("@CACHED_LANG", lng);

  if (lng === "ar") {
    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
      RNRestart.Restart();
    }
  } else {
    if (I18nManager.isRTL) {
      I18nManager.forceRTL(false);
      RNRestart.Restart();
    }
  }
});

export default i18n;
