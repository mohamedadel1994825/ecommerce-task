import i18n from '@i18n';
import { StoreSettingsState, UserSettingsState } from '@interfaces';
import AsyncStorage from '@react-native-community/async-storage';
// import {ExpandCartApi} from '@services';

export const getCachedStoreConfig =
  async (): Promise<StoreSettingsState | null> => {
    try {
      const savedToken = await AsyncStorage.getItem('storeConfig');
      return savedToken && JSON.parse(savedToken);
    } catch (e) {
      return null;
    }
  };

// export const getCurrentStore = async (): Promise<string | null> => {
//   try {
//     return await AsyncStorage.getItem('@CurrentStore');
//   } catch (e) {
//     return null;
//   }
// };

export const setToken = (token?: string): number => {
  return token
    ? ExpandCartApi.interceptors.request.use(config => {
      if (config.method === 'POST' || config.method === 'post') {
        config = {
          ...config,
          data: { ...config.data, token },
        };
      }
      return config;
    })
    : 0;
};

export const setUpLang = async (lang?: string): Promise<void> => {
  if (lang && i18n.language !== lang) {
    await i18n.changeLanguage(lang);
  }
};

export const getUser = async (): Promise<UserSettingsState | null> => {
  try {
    const savedUser = await AsyncStorage.getItem('@CUSTOMER_LOGIN');
    return savedUser && JSON.parse(savedUser);
  } catch (e) {
    return null;
  }
};

export const getLang = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('@CACHED_LANG');
  } catch (e) {
    return null;
  }
};

export const setStoreSettings = async (
  storeSettings: StoreSettingsState,
): Promise<void> => {
  return await AsyncStorage.setItem(
    'storeConfig',
    JSON.stringify(storeSettings),
  );
};
