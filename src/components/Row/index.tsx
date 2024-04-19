import { appStyles } from "@common";
import React, { memo } from "react";
import { View, ViewStyle } from "react-native";

const Row = memo(
  ({ style, children }: { style?: ViewStyle; children: React.ReactNode }) => (
    <View style={[{ ...appStyles.row }, style]}>{children}</View>
  )
);

export { Row };
