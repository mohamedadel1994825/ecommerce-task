import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface SeparatorProps {
  width: number;
  style?: ViewStyle;
}

const Separator: React.FC<SeparatorProps> = memo(({ width = 15 }) => (
  <View style={[styles.list, { width }]} />
));

export { Separator };
