/* eslint-disable react-native/no-inline-styles */
import { appColors } from "@common";
import React, { memo } from "react";
import { ActivityIndicator, View, ViewStyle } from "react-native";

const LoadingComponent = memo(({ style }: { style?: ViewStyle }) => (
  <View
    style={[
      {
        flex: 1,
        backgroundColor: appColors.white,
        alignItems: "center",
        justifyContent: "center",
      },
      style,
    ]}
  >
    <ActivityIndicator animating color={appColors.appColor} size="large" />
  </View>
));
export  {LoadingComponent};
