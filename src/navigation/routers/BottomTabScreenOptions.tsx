import { appColors } from "@common";
import * as React from "react";
import { Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

import CommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";
export const BottomTabScreenOptions = () => {
  return {
    home: {
      tabBarColor: appColors.appColor,
      tabBarLabel: <Text style={styles.tabBarLabel}>Shipments</Text>,
      tabBarIcon: ({ color, focused }) => (
        <FontAwesome
          name="cubes"
          size={24}
          color={focused ? appColors.appColor : color}
        />
      ),
    },
    categories: {
      tabBarLabel: <Text style={styles.tabBarLabel}>scan</Text>,
      tabBarIcon: ({ color, focused }) => (
        <Ionicons
          name="scan"
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
      tabBarLabel: <Text style={styles.tabBarLabel}>wallet</Text>,
      tabBarIcon: ({ color, focused }) => (
        <CommunityIcon
          name="wallet"
          size={24}
          color={focused ? appColors.appColor : color}
        />
      ),
    },
    account: {
      tabBarLabel: <Text style={styles.tabBarLabel}>profile</Text>,
      tabBarIcon: ({ color, focused }) => (
        <CommunityIcon
          name="account"
          size={24}
          color={focused ? appColors.appColor : color}
        />
      ),
    },
  };
};
