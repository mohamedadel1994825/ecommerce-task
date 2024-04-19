import { appColors } from "@common";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { styles } from "./styles";

interface ModalHeaderProps {
  onPressBack: () => void;
  onCancelText: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
  onPressBack,
  onCancelText,
}) => {
  return (
    <TouchableOpacity onPress={onPressBack} style={styles.container}>
      <Icon name="arrow-left" size={20} color={appColors.appColor} />
      <Text style={styles.cancelText}>{onCancelText}</Text>
    </TouchableOpacity>
  );
};

export { ModalHeader };
