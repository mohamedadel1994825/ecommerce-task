import { Fonts } from "@assets";
import { appColors, appStyles } from "@common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        ...appStyles.centerItems,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        color: appColors.black,
        fontFamily: Fonts?.appColorBold, // Replace 'Your-Font-Bold' with your font family
    },
    checkboxContainer: {
        width: 95,
    },
    checkbox: {
        width: 90,
        backgroundColor: 'transparent',
        borderWidth: 0,
        alignItems: 'flex-end',
    },
    checkboxTitle: {
        fontSize: 17,
        color: appColors.appColor,
        fontFamily: Fonts?.CenturyRegular, // Replace 'Your-Font-Regular' with your font family
        marginLeft: 5,
    },
});