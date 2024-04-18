import { appStorage } from '../store/store';

const KEYS = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  ACCESS_TOKEN_V4: "ACCESS_TOKEN_V4",
  PHONE_NUMBER: "PHONE_NUMBER",
  ONBOARDING: "ONBOARDING",
  LANGUAGE: "language",
  APP_THEME: "APP_THEME",
  IS_SHOW_LOCATION_SERVICE_ALERT: 'IS_SHOW_LOCATION_SERVICE_ALERT',
  IS_TRIP_ENDED: "IS_TRIP_ENDED",
  IS_LAST_TRIP: "IS_LAST_TRIP",
  TRIPREFID: "TRIPREFID"
};

// const setPhoneNumber = (phoneNumber) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       await AsyncStorage.setItem(KEYS.PHONE_NUMBER, phoneNumber);
//       resolve(true);
//     } catch (error) {
//       reject(error);
//     }
//   });

const setLocalization = (languageTag: string) => {
  appStorage.set(KEYS.LANGUAGE, languageTag);
};

const getLocalization = () => {
  console.log('appStorage.getString(KEYS.LANGUAGE);', appStorage.getString(KEYS.LANGUAGE))
  return appStorage.getString(KEYS.LANGUAGE);
}


const showOnboarding = () => {
  let showOnboarding = true;
  if (appStorage.getBoolean(KEYS.ONBOARDING)) {
    showOnboarding = false;
  }
  // if (await getLocalization()) {
  //   showOnboarding = false;
  // }
  return showOnboarding;
};

const changeOnboardingStatus = (status) => {
  appStorage.set(KEYS.ONBOARDING, status ?? true);
};

const getCurrentTheme = () => {
  return appStorage.getString(KEYS.APP_THEME);

}

const setNewTheme = (theme: string) => {
  appStorage.set(KEYS.APP_THEME, theme);
}

const setIsShowLocationServiceAlert = async (value: boolean) => {
  appStorage.set(KEYS.IS_SHOW_LOCATION_SERVICE_ALERT, value);
  console.log('IS_SHOW_LOCATION_SERVICE_ALERT', value)
  // try {
  //   await AsyncStorage.setItem(KEYS.IS_SHOW_LOCATION_SERVICE_ALERT, JSON.stringify(value));
  // } catch (error) {
  //   console.error('Error setting value:', error);
  // }
};
const getIsShowLocationServiceAlert = () => {
  console.log('get IS_SHOW_LOCATION_SERVICE_ALERT', appStorage.getBoolean(KEYS.IS_SHOW_LOCATION_SERVICE_ALERT))

  return appStorage.getBoolean(KEYS.IS_SHOW_LOCATION_SERVICE_ALERT);
  // try {
  //   const value = await AsyncStorage.getItem(KEYS.IS_SHOW_LOCATION_SERVICE_ALERT);
  //   return value ? JSON.parse(value) : null; // Return the parsed boolean value or null
  // } catch (error) {
  //   console.error('Error getting value:', error);
  // }
};

export {
  KEYS, changeOnboardingStatus,
  getCurrentTheme, getIsShowLocationServiceAlert, getLocalization, setIsShowLocationServiceAlert, setLocalization, setNewTheme, showOnboarding
};

