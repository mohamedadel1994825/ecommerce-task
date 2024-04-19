import { appColors, calcHeight, calcWidth } from "@common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: appColors.appColor,
        alignItems: 'center'
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 207,
        height: 36,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 30

        // paddingHorizontal: 20,
        // paddingBottom: 40,
    },
    button: {
        backgroundColor: appColors.white,
        width: calcWidth(345),
        height: calcHeight(56),
        borderRadius: calcHeight(10),
    },
    buttonCont: {

    },

    buttonTitle: {
        color: appColors.appColor,
        borderRadius: 10,

        // fontSize:
    }
});