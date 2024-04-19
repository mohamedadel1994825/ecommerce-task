import { Fonts } from "@assets";
import { appColors, calcFont } from "@common";
import { CustomImage } from "@components";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons from react-native-vector-icons
import { styles } from "./styles";
interface CustomHeaderProps {
  leftImageSource: any; // Type for left image source
  centerImageSource: any; // Type for center image source
  notificationIcon: string; // Type for notification icon name
  onPressNotification?: () => void; // Optional function for notification icon press
  userName: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  leftImageSource,
  centerImageSource,
  notificationIcon,
  onPressNotification,
  userName,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CustomImage source={leftImageSource} style={styles.leftImage} />
        <CustomImage source={centerImageSource} style={styles.centerImage} />
        <TouchableOpacity
          style={{
            backgroundColor: appColors.grayDivider,
            padding: 5,
            borderRadius: 25,
          }}
          onPress={onPressNotification}
        >
          <Icon
            name={notificationIcon}
            size={24}
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            color: appColors.gray,
            fontSize: calcFont(17),
            fontFamily: Fonts?.CenturyRegular,
          }}
        >
          Hello,
        </Text>
        <Text
          style={{
            color: appColors.black,
            fontSize: calcFont(20),
            fontFamily: Fonts?.appColorBold,
          }}
        >
          {userName}
        </Text>
      </View>
    </View>
  );
};

export { CustomHeader };
