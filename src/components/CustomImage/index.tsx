
import React from "react";
import { Image, ImageSourcePropType, ImageStyle, ViewStyle } from "react-native";
import FastImage, { ResizeMode } from "react-native-fast-image";

interface CustomImageProps {
  tintColor?: string;
  resizeMode?: ResizeMode;
  uri?: boolean;
  style?: ImageStyle | ViewStyle | any;
  source: ImageSourcePropType | any;
  [key: string]: any; // To allow other props
}

const CustomImage: React.FC<CustomImageProps> = ({
  tintColor,
  resizeMode,
  uri,
  style,
  source,
  ...props
}) => (
  <>
    {tintColor ?
      <Image
        {...props}
        resizeMode={resizeMode ?? FastImage.resizeMode.contain}
        source={uri ? { uri: source as string } : source}
        style={style}
        tintColor={tintColor}
      /> :
      <FastImage
        {...props}
        resizeMode={resizeMode ?? FastImage.resizeMode.contain}
        source={uri ? { uri: source as string } : source}
        style={style}
      />}
  </>
);

export { CustomImage };
