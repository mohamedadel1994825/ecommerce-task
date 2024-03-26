import { CategoriesParamList } from '@interfaces';

export interface ExploreScreenProps {
  navigation: CategoriesParamList;
}

export interface CategoriesScreenState {
  isLoading: boolean;
  data: CategoriesScreenSection[];
  error: boolean;
}

export interface CategoriesScreenItem {
  category_id: string;
  thumb?: string;
  name: string;
  short_description?: string;
  seller_id?: string;
}

export interface CategoriesScreenSection {
  SectionCodeName: string;
  Collections?: Collection[];
  title?: string;
  categories?: Category[];
  products?: Product[];
  bannerimage?: string;
  imagelinkType?: string;
  imagelinkId?: string;
  firstbannerimage?: string;
  firstimagelinkType?: string;
  firstimagelinkId?: string;
  secondbannerimage?: string;
  secondimagelinkType?: string;
  secondimagelinkId?: string;
}

interface Product {
  product_id: string;
  thumb: string;
  name: string;
  price: string;
  special: boolean;
  currency: string;
  special_enddate?: any;
  model: string;
  model_url: string;
  rating: boolean;
  short_description: boolean | string;
  description: string;
  reviews: string;
  reviews_count: number;
  href: string;
  thumb_swap?: string;
  saving: number;
  quantity: string;
  stock_status: string;
  date_available: string;
}

// interface Category {
//   category_id: string;
//   thumb: boolean | string;
//   name: string;
//   short_description: string;
//   seller_id: string;
//   href: string;
// }

export interface Collection {
  imagelinkType: 'category' | 'product' | '';
  imagelinkId: string;
  slideimage: string;
}

export type Variant = string; // Variant type represents different storage options, e.g., '128GB', '256GB'

export type Model = {
  name: string; // Model name, e.g., 'iPhone X', 'Galaxy S10'
  variants: Variant[]; // List of available variants for the model
};

export type Brand = {
  name: string; // Brand name, e.g., 'Apple', 'Samsung'
  models: Model[]; // List of models offered by the brand
};

export type Category = {
  category: string; // Category name, e.g., 'Mobile Phones', 'Watches'
  brands: Brand[]; // List of brands in the category
};
