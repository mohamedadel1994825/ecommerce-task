import { appColors } from "@common";
import { translate } from "@language";
import * as React from "react";
import { Text } from "react-native";
import CommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";
export const BottomTabScreenOptions = () => {
  return {
    home: {
      tabBarColor: appColors.appColor,
      tabBarLabel: (
        <Text style={styles.tabBarLabel}>
          {translate("navigation:home:homeHeaderTitle")}
        </Text>
      ),
      tabBarIcon: ({ color, focused }) => (
        <CommunityIcon
          name="home"
          size={24}
          color={focused ? appColors.appColor : color}
        />
      ),
    },
    categories: {
      tabBarLabel: (
        <Text style={styles.tabBarLabel}>
          {translate("navigation:categories:categoriesHeaderTitle")}
        </Text>
      ),
      tabBarIcon: ({ color, focused }) => (
        <CommunityIcon
          name="magnify"
          size={24}
          color={focused ? appColors.appColor : color}
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
          {translate("navigation:cart:cartHeaderTitle")}
        </Text>
      ),
      tabBarIcon: ({ color, focused }) => (
        <CommunityIcon
          name="cube"
          size={24}
          color={focused ? appColors.appColor : color}
        />
      ),
    },
    account: {
      tabBarLabel: (
        <Text style={styles.tabBarLabel}>
          {translate("navigation:account:accountHeaderTitle")}
        </Text>
      ),
      tabBarIcon: ({ color, focused }) => (
        <CommunityIcon
          name="menu"
          size={24}
          color={focused ? appColors.appColor : color}
        />
      ),
    },
  };
};
