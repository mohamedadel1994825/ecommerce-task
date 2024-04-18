import { I18nManager, StyleSheet } from "react-native";
import { appColors } from '../colors';


const baseTextStyles = {
  color: appColors.appColor,
  fontWeight: "bold",
};

const appStyles = StyleSheet.create({
  btn: {
    backgroundColor: appColors.appColor,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 5,
    elevation: 5,
  },
  btnTxt: {
    color: appColors.white,
  },
  txt: {
    ...baseTextStyles,
  },
  txtLight: {
    color: appColors.lightGreen,
    fontWeight: "bold",
  },
  icon: {
    padding: 10,
    margin: 15,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  txtFailContainer: {
    borderRadius: 15,
    borderColor: "grey",
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "#F5FFFA",
  },
  txtFail: {
    ...baseTextStyles,
    marginBottom: 10,
    padding: 10,
    alignSelf: "center",
    color: "red",
  },
  flex1: {
    flex: 1,
  },
  centerItems: {
    justifyContent: "center",
    alignItems: "center",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  row: {
    flexDirection: 'row'
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  toast: {
    width: "60%",
    backgroundColor: "#00A82D",
    alignSelf: "center",
    borderRadius: 50,
    justifyContent: "center",
    paddingVertical: 10,
    zIndex: 1000,
  },
  toastTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF",
    // marginLeft: 10,
    // maxWidth: "90%",
    textAlign: "center",
  },
  toastTitleView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  toastMessage: {
    fontSize: 16,
    color: "#FFF",
    marginLeft: 10,
    marginTop: 7,
  },
  tripCardToast: {
    width: I18nManager.isRTL ? "71%" : "65%",
    backgroundColor: appColors.gray,
    alignSelf: "center",
    borderRadius: 50,
    justifyContent: "center",
    paddingVertical: 9,
    zIndex: 1000,
    alignItems: "center",
    minHeight: 50,
  },
  tripCardToastTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF",
    // marginLeft: 10,
    maxWidth: I18nManager.isRTL ? "100%" : "95%",
    textAlign: "center",
  },
  shadowCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
const markerBattery = {
  default: "#C0C0C0",

  greenDark: "#215732",
  green: "#97D700",
  yellow: "#D7AE00",
  red: "#FF0000",
}
export { appStyles, markerBattery };
