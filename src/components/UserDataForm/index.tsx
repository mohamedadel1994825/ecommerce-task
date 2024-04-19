import { Fonts, images } from "@assets";
import { appColors, calcFont, calcHeight, calcWidth } from "@common";
import { CustomModal, ModalHeader } from "@components";
import { useUserDataForm } from "@hooks";
import {
  AppRootState,
  selectApp,
  useAppDispatch,
  useAppSelector,
  User,
} from "@store";
import { AppDispatch } from "@types";
import { screenHeight } from "@utils";
import React, { forwardRef } from "react";
import { Controller } from "react-hook-form";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { HelperText, TextInput } from "react-native-paper";
import { styles } from "./styles";

export const UserDataForm = forwardRef((props, ref) => {
  const { onPressBack } = props;
  const { watch, handleSubmit, errors, isValid, control, setValue, getValues } =
    useUserDataForm();
  const dispatch: AppDispatch = useAppDispatch();
  const appSelector: AppRootState = useAppSelector(selectApp);
  const url = watch("url");
  const email = watch("email");
  const password = watch("password");
  console.log("url", url);

  const onSubmit = () => {
    dispatch(
      User.setUser({
        userId: `${email}`,
        userName: "Ibrahim",
        userSurname: "Shaker",
        email,
        contact: "",
        statusCode: "",
        gender: "",
        birthDate: "",
        image: images.user,
      })
    );
    console.log("submitted");
  };
  return (
    <CustomModal
      childrenStyle={{ paddingHorizontal: 10 }}
      modalHeight={screenHeight * 0.95}
      ref={ref}
      // overlayStyle={styles.modalOverlay} // Adjust the alpha value (last parameter) to control opacity
      withOverlay={false}
      handlePosition="inside"
      handleStyle={styles.handleStyle}
      HeaderComponent={
        <ModalHeader onPressBack={onPressBack} onCancelText={"Cancel"} />
      }
    >
      <View style={{ height: screenHeight * 0.85, flex: 1 }}>
        <Text
          style={{
            fontSize: calcFont(34),
            color: appColors.black,
            fontFamily: Fonts?.appColorBold,
          }}
        >
          Login
        </Text>
        <Text
          style={{
            fontSize: calcFont(17),
            color: appColors.graySubtitle,
            fontFamily: Fonts?.CenturyRegular,
            marginBottom: 30,
            marginTop: 15,
          }}
        >
          Please enter your First, Last name and your phone number in order to
          register
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                style={{
                  backgroundColor: appColors.appButtonDisabled,
                  fontSize: calcFont(17),
                }}
                outlineStyle={{ borderRadius: 10 }}
                mode="outlined"
                label="URL"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                textColor={errors.url ? appColors.red : appColors.appColor}
                placeholderTextColor={appColors.placeholderInput}
              />
              <HelperText type="error" visible={!!errors.url}>
                {errors.url?.message}
              </HelperText>
            </>
          )}
          name="url"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                style={{
                  backgroundColor: appColors.appButtonDisabled,
                  fontSize: calcFont(17),
                }}
                outlineStyle={{ borderRadius: 10 }}
                mode="outlined"
                label="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                textColor={errors.email ? appColors.red : appColors.appColor}
                placeholderTextColor={appColors.placeholderInput}
              />
              <HelperText type="error" visible={!!errors.email}>
                {errors.email?.message}
              </HelperText>
            </>
          )}
          name="email"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                style={{
                  backgroundColor: appColors.appButtonDisabled,
                  fontSize: calcFont(17),
                }}
                outlineStyle={{ borderRadius: 10 }}
                mode="outlined"
                label="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
                textColor={errors.password ? appColors.red : appColors.appColor}
                placeholderTextColor={appColors.placeholderInput}
              />
              <HelperText type="error" visible={!!errors.password}>
                {errors.password?.message}
              </HelperText>
            </>
          )}
          name="password"
          defaultValue=""
        />
        <Button
          title="Login"
          containerStyle={{
            position: "absolute",
            bottom: 0,
            alignSelf: "center",
          }}
          buttonStyle={{
            backgroundColor:
              !isValid || !url || !email || !password
                ? appColors.appButtonDisabled
                : appColors.appColor,
            width: calcWidth(361),
            height: calcHeight(50),
            // alignSelf: "center",
            borderRadius: calcHeight(10),
          }}
          titleStyle={{
            borderRadius: 10,
            fontSize: calcFont(17),
            fontFamily: Fonts?.appColorBold,
            color:
              !isValid || !url || !email || !password
                ? appColors.appGrey
                : appColors.white,
          }}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid || !url || !email || !password}
        >
          Login
        </Button>
      </View>
    </CustomModal>
  );
});
