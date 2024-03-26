import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import type { IImageInfo } from 'react-native-image-zoom-viewer/src/image-viewer.type';
import { Category } from './category';

export type RootRouter = {
  LandingScreen: {};
  Tabs: {
    screen: T;
  };
  SelectBranch: {};
  PRODUCT_SCREEN: {
    id: string;
  };
  CATEGORY_SCREEN: {
    id: string;
  };
  BRAND_SCREEN: {
    id: string;
    categories: Category[];
  };
  SEARCH_SCREEN: {};
  Login: {};

  ForgotPassword: { email: string };

  Register: {};
  IMAGES_GALLERY: {
    images: IImageInfo[];
    index: number;
  };
};

export type TabsRouter = {
  Home: {};
  Categories: {};
  Deals: {};
  Brands: {};
  Cart: {};
  Account: {};
  Explore: {};
};

export type T = 'Home' | 'Categories' | 'Deals' | 'Cart' | 'Account';

export type HomeRouter = {
  Home: {};
};

export type HomeParamList = CompositeNavigationProp<
  StackNavigationProp<HomeRouter, 'Home'>,
  CompositeNavigationProp<
    MaterialBottomTabNavigationProp<TabsRouter, 'Home'>,
    StackNavigationProp<RootRouter, 'Tabs'>
  >
>;

export type CategoriesRouter = {
  Categories: {};
};

export type CategoriesParamList = CompositeNavigationProp<
  StackNavigationProp<CategoriesRouter, 'Categories'>,
  CompositeNavigationProp<
    MaterialBottomTabNavigationProp<TabsRouter, 'Categories'>,
    StackNavigationProp<RootRouter, 'Tabs'>
  >
>;

export type DealsRouter = {
  Deals: {};
};

export type DealsParamList = CompositeNavigationProp<
  StackNavigationProp<DealsRouter, 'Deals'>,
  CompositeNavigationProp<
    MaterialBottomTabNavigationProp<TabsRouter, 'Deals'>,
    StackNavigationProp<RootRouter, 'Tabs'>
  >
>;

export type BrandsRouter = {
  Brands: {};
};

export type BrandsParamList = CompositeNavigationProp<
  StackNavigationProp<BrandsRouter, 'Brands'>,
  CompositeNavigationProp<
    MaterialBottomTabNavigationProp<TabsRouter, 'Brands'>,
    StackNavigationProp<RootRouter, 'Tabs'>
  >
>;

export type CartRouter = {
  Cart: {
    editing: boolean;
    onPress: () => void;
  };
};

export type CartParamList = CompositeNavigationProp<
  StackNavigationProp<CartRouter, 'Cart'>,
  CompositeNavigationProp<
    MaterialBottomTabNavigationProp<TabsRouter, 'Cart'>,
    StackNavigationProp<RootRouter, 'Tabs'>
  >
>;

export type AccountRouter = {
  Account: {};
  ContactUs: {};
  EditAccount: {};
  WishList: {};
  OrderList: {};
  OrderScreen: {
    id: string;
  };
  ChangeCurrency: {};
};

export type AccountParamList = CompositeNavigationProp<
  StackNavigationProp<AccountRouter, 'Account'>,
  CompositeNavigationProp<
    MaterialBottomTabNavigationProp<TabsRouter, 'Account'>,
    StackNavigationProp<RootRouter, 'Tabs'>
  >
>;
