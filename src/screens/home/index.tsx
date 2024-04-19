import { images } from "@assets";
import { CustomHeader } from "@components";
import { useOnfocusedHomeStatusBar } from "@hooks";
import { selectUser, useAppSelector, UserRootState } from "@store";
import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";

const HomeScreen: React.FC = () => {
  useOnfocusedHomeStatusBar();
  const userSelector: UserRootState = useAppSelector(selectUser);
  const { image, userName, userSurname } = userSelector?.user;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <CustomHeader
        leftImageSource={image}
        centerImageSource={images.shipexBlue}
        notificationIcon={"notifications-outline"}
        userName={userName + " " + userSurname}
      />
    </ScrollView>
  );
};

export { HomeScreen };
