import { Colors } from "@styles";
import React, { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface BrandItemProps {
  item: {
    name: string;
  };
  isSelected: boolean;
  onPress: () => void;
}

const BrandItem: React.FC<BrandItemProps> = memo(
  ({ item, isSelected, onPress }) => {
    return (
      <TouchableOpacity
        style={[
          styles.brandItemContainer,
          { backgroundColor: isSelected ? Colors.primary : Colors.gray100 },
        ]}
        onPress={onPress}
      >
        <Text style={{ color: isSelected ? Colors.white : Colors.black }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }
);

export { BrandItem };
