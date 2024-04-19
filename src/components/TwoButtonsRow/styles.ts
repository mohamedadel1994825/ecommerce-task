import { appColors, calcHeight } from "@common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 12,
    },
    button: {
        width: 180,
        margin: 5,
        backgroundColor: appColors.filterBtnBackground,
        borderRadius: calcHeight(10),
        height: calcHeight(45)
    },
});