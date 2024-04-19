import { Fonts } from "@assets";
import { appColors, appStyles, calcFont, calcHeight, calcWidth } from "@common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        ...appStyles.row,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: appColors.white,
        marginTop: calcHeight(15),
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    cancelText: {
        marginStart: calcWidth(7),
        fontSize: calcFont(16),
        color: appColors.appColor,
        fontFamily: Fonts?.CenturyRegular,
        fontWeight: '600'
    },
});