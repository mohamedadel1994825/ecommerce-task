import { Fonts } from "@assets";
import { appColors, calcFont, calcHeight, modalTheme } from "@common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: modalTheme.colors.background,
  },
  header: {
    borderBottomWidth: 0,
    paddingBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  input: {
    marginBottom: 16,
  },
  helperText: {
    marginTop: -8,
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 32,
    alignSelf: "center",
    width: "100%",
  },
  button: {
    borderRadius: calcHeight(15),

  },
  modalLoading: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  inputStyle: {
    fontSize: 14,
    textAlign: "left",
  },
  textInput: {
    // backgroundColor: "#FFF",
    marginHorizontal: 10,
    borderBottomColor: "blue",
    marginVertical: 10,
  },
  handleStyle: {
    backgroundColor: appColors.grayDark
  },
  buttonTitle: {
    color: appColors.appColor,
    borderRadius: 10,
    fontSize: calcFont(17),
    fontFamily: Fonts?.appColorBold
  },
});
