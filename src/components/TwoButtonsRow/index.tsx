import { appColors } from "@common";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
interface TwoButtonsRowProps {
  onPressButton1: () => void;
  onPressButton2: () => void;
  disabledButton1?: boolean;
  disabledButton2?: boolean;
}

const TwoButtonsRow: React.FC<TwoButtonsRowProps> = ({
  onPressButton1,
  onPressButton2,
  disabledButton1 = false,
  disabledButton2 = false,
}) => {
  return (
    <View style={styles.container}>
      <Button
        TouchableComponent={TouchableOpacity}
        title="Filters"
        onPress={onPressButton1}
        buttonStyle={[styles.button]}
        icon={
          <Icon
            name="filter-outline"
            size={20}
            color={appColors.graySubtitle}
          />
        }
        titleStyle={{
          marginHorizontal: 10,
          color: appColors.graySubtitle,
        }}
      />
      <Button
        TouchableComponent={TouchableOpacity}
        title="Add Scan"
        onPress={onPressButton1}
        buttonStyle={[styles.button, { backgroundColor: appColors.appColor }]}
        icon={<Icon name="scan" size={20} color={appColors.white} />}
        titleStyle={{
          marginHorizontal: 10,
          color: appColors.white,
        }}
      />
    </View>
  );
};

export { TwoButtonsRow };
