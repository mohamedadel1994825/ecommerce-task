import {
  Help,
  History,
  Invoices,
  Settings,
  TermsOfServices,
  Wallet,
} from "@screens";
import React from "react";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// getting screens to pass all routes to navigator.

// import Settings from "src/screens/setting/index.tsx";
// import TermsOfServices from "src/screens/termsOfServices";
// import Help from "src/screens/help";
// import { Invoices, Wallet } from "../screens";
// import { Promotion } from "../screens/Promotion";

export const iconSize = 25;
const iconColor = "#D0D0D0";

export const routes = [
  {
    id: 1,
    name: "Settings",
    component: Settings,
    title: "Settings",
    textTour: "Settings Tour Text",
    icon: (
      <MaterialCommunityIcons
        name="history"
        size={iconSize}
        color={iconColor}
      />
    ),
  },
  // {
  //   id: "referral",
  //   name: "Referral",
  //   component: Referral,
  //   title: "Share with a Friend",
  //   icon: <AntDesignIcons name="sharealt" size={iconSize} color={iconColor} />,
  // },
  // {
  //   id: "howToRide",
  //   name: "Instructions",
  //   component: HowToRide,
  //   title: "How To Ride",
  //   icon: (
  //     <AntDesignIcons
  //       name="questioncircleo"
  //       size={iconSize}
  //       color={iconColor}
  //     />
  //   ),
  // },
  // {
  //   id: "promos",
  //   name: "Promotions",
  //   component: Promotion,
  //   title: "Promotion Codes",
  //   icon: <AntDesignIcons name="gift" size={iconSize} color={iconColor} />,
  // },
  {
    id: 2,
    name: "History",
    component: History,
    title: "Ride History",
    textTour: "Ride History Tour Text",
    icon: (
      <MaterialCommunityIcons
        name="history"
        size={iconSize}
        color={iconColor}
      />
    ),
  },
  {
    id: 3,
    name: "Wallet",
    component: Wallet,
    title: "Wallet",
    textTour: "Wallet Tour Text",
    icon: (
      <MaterialIcons
        name="account-balance-wallet"
        size={iconSize}
        color={iconColor}
      />
    ),
  },
  // {
  //   id: 4,
  //   name: "CreditPackage",
  //   component: CreditPackage,
  //   title: "packages",
  //   textTour: "CreditPackage Tour Text",
  //   icon: <EntypoIcons name="credit" size={iconSize} color={iconColor} />,
  // },
  {
    id: 5,
    name: "Invoices",
    component: Invoices,
    title: "Invoices",
    textTour: "Invoices Tour Text",
    icon: <Ionicons name="file-tray-full" size={iconSize} color={iconColor} />,
  },
  {
    id: 6,
    name: "Help",
    component: Help,
    title: "Help",
    textTour: "Help Tour Text",
    icon: (
      <MaterialIcons name="help-outline" size={iconSize} color={iconColor} />
    ),
  },
  // {
  //   id: 7,
  //   name: "Promotion",
  //   component: Promotion,
  //   title: "Promotions",
  //   textTour: "Promotion Tour Text",
  //   icon: (
  //     <MaterialIcons name="help-outline" size={iconSize} color={iconColor} />
  //   ),
  // },
  {
    id: 8,
    name: "TermsOfServices",
    component: TermsOfServices,
    title: "TermsOfServices",
    textTour: "TermsOfServices Tour Text",
    icon: <AntDesignIcons name="filetext1" size={iconSize} color={iconColor} />,
  },
  {
    id: 9,
    name: "Logout",
    title: "logout",
    textTour: "logout Tour Text",
    component: TermsOfServices,
    icon: (
      <FontAwesome5Icons
        name="sign-out-alt"
        size={iconSize}
        color={iconColor}
      />
    ),
  },

  {
    id: 10,
    name: "LanguageTag",
    textTour: "Language Tour Text",
    component: TermsOfServices,
    title: "",
    icon: <></>,
  },
];
