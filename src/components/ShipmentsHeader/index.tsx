import { appColors } from "@common";
import { Row } from "@components";
import React from "react";
import { Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { styles } from "./styles";
interface ShipmentsHeaderProps {
  checkAll: boolean;
  setCheckAll: (value: boolean) => void;
}

const ShipmentsHeader: React.FC<ShipmentsHeaderProps> = ({
  checkAll,
  setCheckAll,
}) => {
  return (
    <Row style={styles.container}>
      <Text style={styles.title}>Shipments</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          containerStyle={styles.checkbox}
          titleProps={{ style: styles.checkboxTitle }}
          size={24}
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon="checkbox-blank-outline"
          title="Mark All"
          checked={checkAll}
          onPress={() => setCheckAll(!checkAll)}
          checkedColor={appColors.appColor}
        />
      </View>
    </Row>
  );
};

export { ShipmentsHeader };
