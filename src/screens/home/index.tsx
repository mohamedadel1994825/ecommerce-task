import { images } from "@assets";
import { appColors, calcHeight } from "@common";
import { CustomHeader } from "@components";
import { useOnfocusedHomeStatusBar } from "@hooks";
import { selectUser, useAppSelector, UserRootState } from "@store";
import React from "react";
import { ScrollView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { styles } from "./styles";

const HomeScreen: React.FC = () => {
  useOnfocusedHomeStatusBar();
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
      <View style={{ marginTop: calcHeight(20) }}>
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
    </ScrollView>
  );
};

export { HomeScreen };
