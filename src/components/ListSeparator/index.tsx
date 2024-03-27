import React, { memo } from "react";
import { View, ViewStyle } from "react-native";

interface SeparatorProps {
  width: number;
  style?: ViewStyle;
}

const Separator: React.FC<SeparatorProps> = memo(({ width, style }) => (
  <View style={[{ width }, style]} />
));

export { Separator };
