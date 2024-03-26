import {HomeParamList} from '@interfaces';

export interface HomeScreenProps {
  navigation: HomeParamList;
}

export interface HomeScreenState {
  isLoading: boolean;
  data: HomeSection[];
  error: boolean;
}

export interface CategoryHomeItem {
  category_id: string;
  thumb?: string;
  name: string;
  short_description?: string;
  seller_id?: string;
}

export interface HomeSection {
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

interface Category {
  category_id: string;
  thumb: boolean | string;
  name: string;
  short_description: string;
  seller_id: string;
  href: string;
}

export interface Collection {
  imagelinkType: 'category' | 'product' | '';
  imagelinkId: string;
  slideimage: string;
}
