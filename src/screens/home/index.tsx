import { Fonts, images } from "@assets";
import { appColors, appStyles, calcFont, calcHeight, calcWidth } from "@common";
import { CustomHeader, Row, TwoButtonsRow } from "@components";
import { useOnfocusedHomeStatusBar } from "@hooks";
import { selectUser, useAppSelector, UserRootState } from "@store";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { Searchbar } from "react-native-paper";
import { styles } from "./styles";

const HomeScreen: React.FC = () => {
  useOnfocusedHomeStatusBar();
  const [checkAll, setCheckAll] = useState(false);
  const userSelector: UserRootState = useAppSelector(selectUser);
  const { image, userName, userSurname } = userSelector?.user;
  const [searchQuery, setSearchQuery] = React.useState("");
  const searchbarInputStyle = {
    borderColor: searchQuery ? "green" : "red", // Change border color based on text input state
    color: searchQuery ? appColors.appColor : appColors.black, // Change text input color based on text input state
  };
  const searchbarStyle = {
    borderWidth: searchQuery ? 1 : 0,
    borderColor: searchQuery ? appColors.appColor : appColors.black,
    color: searchQuery ? appColors.appColor : appColors.black,
    backgroundColor: appColors.searchbarBackground,
    borderRadius: calcHeight(10),
    height: calcHeight(50),
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <CustomHeader
        leftImageSource={image}
        centerImageSource={images.shipexBlue}
        notificationIcon={"notifications-outline"}
        userName={userName + " " + userSurname}
      />
      <View style={{ marginTop: calcHeight(12) }}>
        <Searchbar
          inputMode="search"
          inputStyle={searchbarInputStyle}
          style={searchbarStyle}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          iconColor={searchQuery ? appColors.appColor : appColors.black}
        />
      </View>
      <TwoButtonsRow />
      <Row
        style={{
          ...appStyles.centerItems,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: calcFont(20),
            color: appColors.black,
            fontFamily: Fonts?.appColorBold,
          }}
        >
          Shipments
        </Text>
        <View style={{ width: calcWidth(95) }}>
          <CheckBox
            containerStyle={{
              width: calcWidth(90),
              backgroundColor: appColors.transparent,
              borderWidth: 0,
              alignItems: "flex-end",
            }}
            titleProps={{
              style: {
                fontSize: calcFont(17),
                color: appColors.appColor,
                fontFamily: Fonts?.CenturyRegular,
                marginLeft: 5,
              },
            }}
            title="Mark All"
            checked={checkAll}
            onPress={() => setCheckAll(!checkAll)}
          />
        </View>
      </Row>
    </ScrollView>
  );
};

export { HomeScreen };
