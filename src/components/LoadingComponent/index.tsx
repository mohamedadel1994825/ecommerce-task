/* eslint-disable react-native/no-inline-styles */
import { appColors } from "@common";
import { useStatusBarLoadingScreen } from "@hooks";
import React, { memo } from "react";
import { View, ViewStyle } from "react-native";

const LoadingComponent = memo(({ style }: { style?: ViewStyle }) => {
  useStatusBarLoadingScreen();
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: appColors.appColor,
        },
        style,
      ]}
    ></View>
  );
});
export { LoadingComponent };
