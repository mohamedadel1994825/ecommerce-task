export interface StoreContextInterface {
  token: string;
  color: string;
  image: string;
  name: string;
  storeConfig?: StoreConfig;
  changeValue?: (value: {
    token?: string;
    color?: string;
    image?: string;
    name?: string;
    storeConfig?: StoreConfig;
  }) => void;
}

export interface StoreConfig {
  code?: string;
  username?: string;
  password?: string;
  url?: string;
}
