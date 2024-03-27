import React, { memo } from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface SeparatorProps {}

const Separator: React.FC<SeparatorProps> = memo(() => (
  <View style={styles.list} />
));

export { Separator };
