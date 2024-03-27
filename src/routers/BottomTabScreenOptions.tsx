import { Colors } from "@styles";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Text } from "react-native";
import CommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";
export const BottomTabScreenOptions = () => {
  const { t } = useTranslation();
  return {
    home: {
      tabBarColor: Colors.primary,
      tabBarLabel: (
        <Text style={styles.tabBarLabel}>
          {t("navigation:home:homeHeaderTitle")}
        </Text>
      ),
      tabBarIcon: ({ color, focused }) => (
        <CommunityIcon
          name="home"
          size={24}
          color={focused ? Colors.primary : color}
        />
      ),
    },
    categories: {
      tabBarLabel: (
        <Text style={styles.tabBarLabel}>
          {t("navigation:categories:categoriesHeaderTitle")}
        </Text>
      ),
      tabBarIcon: ({ color, focused }) => (
        <CommunityIcon
          name="magnify"
          size={24}
          color={focused ? Colors.primary : color}
        />
      ),
    },
    deals: {
      tabBarLabel: <Text style={styles.tabBarLabel} />,
      // tabBarIcon: middleAddIcon,
    },
    cart: {
      tabBarLabel: (
        <Text style={styles.tabBarLabel}>
          {t("navigation:cart:cartHeaderTitle")}
        </Text>
      ),
      tabBarIcon: ({ color, focused }) => (
        <CommunityIcon
          name="cube"
          size={24}
          color={focused ? Colors.primary : color}
        />
      ),
    },
    account: {
      tabBarLabel: (
        <Text style={styles.tabBarLabel}>
          {t("navigation:account:accountHeaderTitle")}
        </Text>
      ),
      tabBarIcon: ({ color, focused }) => (
        <CommunityIcon
          name="menu"
          size={24}
          color={focused ? Colors.primary : color}
        />
      ),
    },
  };
};
