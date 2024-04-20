// Header.tsx

import { appColors } from "@common";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./styles";

interface HeaderProps {
  title: string;
  subTitle?: string;
  onDonePress?: () => void;
  onCancelPress?: () => void;
}

const FilterHeader: React.FC<HeaderProps> = ({
  title,
  subTitle,
  onDonePress,
  onCancelPress,
}) => {
  return (
    <View style={styles.header}>
      <Button
        title="Cancel"
        onPress={onCancelPress}
        type="clear"
        titleStyle={{ color: appColors.blueLight }}
      />
      <Text style={styles.title}>{title}</Text>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      <Button
        title="Done"
        onPress={onDonePress}
        type="clear"
        titleStyle={{ color: appColors.blueLight }}
      />
    </View>
  );
};

export { FilterHeader };
