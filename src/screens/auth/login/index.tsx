import { images } from "@assets";
import { CustomImage, UserDataForm } from "@components";
import { useOnfocusedLoginStatusBar } from "@hooks";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import FastImage from "react-native-fast-image";
import { useModalize } from "react-native-modalize";
import { styles } from "./styles";
const LoginScreen: React.FC = () => {
  const { ref: modalRef, open: openModal, close: closeModal } = useModalize();

  useOnfocusedLoginStatusBar();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <CustomImage
          source={images.shipexLogin} // Replace 'logo.png' with your image path
          style={styles.logo}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          containerStyle={styles.buttonCont}
          title="Login"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={openModal} // Replace with your login logic
        />
      </View>
      <UserDataForm
        onPressBack={closeModal}
        ref={modalRef}
        // updateUserData={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export { LoginScreen };
