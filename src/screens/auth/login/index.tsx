import { images } from "@assets";
import { CustomImage } from "@components";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import FastImage from "react-native-fast-image";
import { styles } from "./styles";
const LoginScreen: React.FC = () => {
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
          onPress={() => console.log("Login pressed")} // Replace with your login logic
        />
      </View>
    </View>
  );
};

export  {LoginScreen};
