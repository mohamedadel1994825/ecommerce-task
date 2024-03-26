import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import en from './en.json';
import ar from './ar.json';
import tr from './tr.json';
import de from './de.json';

import {endpoints} from '@constants';
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';

i18n.use(initReactI18next).init({
  resources: {
    ar,
    en,
    tr,
    de,
  },
  lng: 'en',
  fallbackLng: 'en',
  react: {
    bindI18n: 'languageChanged',
    useSuspense: false,
  },
  debug: true,
});

i18n.languages = ['ar', 'en', 'tr', 'de'];

i18n.on('languageChanged', async (lng) => {
  await AsyncStorage.setItem('@CACHED_LANG', lng);

  if (lng === 'ar') {
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
  // RNRestart.Restart();

});

export default i18n;
