export interface ActionType<T> {
  type: 'IS_LOADING' | 'SUCCESS' | 'ERROR';
  payload?: T;
}

export interface StoreConfigResponse {
  cookie: string;
  token: string;
  success: string;
  settings: Settings;
}

export interface Settings {
  MainColor?: any;
  LogoURL: string;
  StoreSlogan?: any;
  FooterInfo: string;
  StoreName: string;
  InfoPageName: string;
  LanguageCode: string;
  languages: string[];
}
