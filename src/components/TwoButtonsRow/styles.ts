import { appColors, calcFont, calcHeight } from "@common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12,
    },
    button: {
        width: calcFont(175),
        backgroundColor: appColors.filterBtnBackground,
        borderRadius: calcHeight(10),
        height: calcHeight(45)
    },
});