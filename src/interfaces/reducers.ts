import { languageDictionary } from './../constants/utils';
import { CartItem, Product } from './product';
export type StoreState = {
  name?: string;
  isLoading?: boolean;
  token?: string;
  mainColor?: string;
  storeUrl?: string;
  logoUrl?: string;
  languages?: Array<string>;
  storeCode?: string;
  username?: string;
  password?: string;
};

export type InitialApp = {
  isLoading: boolean;
};

export interface StoreConfigState {
  storeUrl?: string;
  username?: string;
  password?: string;
  storeCode?: string;
}

export interface StoreSettingsState {
  name?: string;
  isLoading?: boolean;
  token?: string;
  mainColor?: string;
  logoUrl?: string;
  languages?: (keyof typeof languageDictionary)[];
}

export interface UserSettingsState {
  is_logged: boolean;
  customer: Customer;
}

export interface Customer {
  customer_id: string;
  store_id: string;
  firstname: string;
  lastname: string;
  email: string;
  telephone: string;
  fax: string;
  password: string;
  salt: string;
  cart: string;
  wishlist: string;
  newsletter: string;
  address_id: string;
  customer_group_id: string;
  ip: string;
  status: string;
  approved: string;
  token: string;
  date_added: string;
  language_id?: any;
}

export interface WishListState {
  products?: Product[];
  isLoading: boolean;
}

export interface CartTotal {
  title: string;
  text: string;
}

export interface Payload {
  products: CartItem[];
  totals: CartTotal[];
}

export interface CartState extends Payload {
  isLoading: boolean;
  error: boolean;
}
