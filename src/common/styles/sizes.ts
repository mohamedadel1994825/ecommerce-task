import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get(
  'window',
);
export const SWIPER_HEIGHT = SCREEN_HEIGHT / 3.5;

export const ROUNDED_BORDER = Math.round(SCREEN_WIDTH / 2 + SCREEN_HEIGHT / 2);

export const guidelineBaseWidth = 393;
export const guidelineBaseHeight = 844;
const defaultFactor = SCREEN_WIDTH > guidelineBaseWidth ? 0.5 : 1.25;
export const calcWidth = (size: number) =>
  (SCREEN_WIDTH / guidelineBaseWidth) * size; // only width
export const calcHeight = (size: number) =>
  (SCREEN_HEIGHT / guidelineBaseHeight) * size; // only height
export const calcFont = (size: number, factor = defaultFactor) =>
  size + (calcWidth(size) - size) * factor; // fontsize , margin , padding , iconsize , etc
  export const isNotshIphone=Platform.OS==='ios'&&DeviceInfo.hasNotch()