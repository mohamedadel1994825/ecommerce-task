import i18n from '@i18n';
import AsyncStorage from '@react-native-community/async-storage';

export const setUpLang = async (lang?: string): Promise<void> => {
  if (lang && i18n.language !== lang) {
    await i18n.changeLanguage(lang);
  }
};
export const getLang = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('@CACHED_LANG');
  } catch (e) {
    return null;
  }
};

