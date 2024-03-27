import { Colors } from "@styles";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity } from "react-native";
import CommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";

interface MiddleAddIconProps {}

const TabsMiddleAddIcon: React.FC<MiddleAddIconProps> = memo(() => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={styles.container}>
      <CommunityIcon
        name="plus"
        color={Colors.white}
        size={24}
        style={{ marginTop: 18 }}
      />
      <Text style={{ fontSize: 12, marginTop: 10, color: Colors.white }}>
        {t("navigation:deals:headerTitle")}
      </Text>
    </TouchableOpacity>
  );
});

export { TabsMiddleAddIcon };
