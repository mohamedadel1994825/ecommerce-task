import { Fonts } from "@assets";
import { appColors, calcFont, calcHeight, calcWidth } from "@common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: appColors.transparent,
        marginBottom: 10,
        borderRadius: calcHeight(10),
        overflow: 'hidden',
    },
    checked: {
        borderColor: appColors.blueLight,
        borderRadius: calcHeight(15),
        borderWidth: 2,
        overflow: 'hidden'
    },
    firstCard: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: appColors.gray,
        borderStyle: 'dotted',
        borderColor: appColors.white
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    detailsContainer: {
        // alignItems: 'center'
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: calcWidth(125),
        justifyContent: 'space-between'
    },
    awbText: {
        color: appColors.black,
        fontSize: calcFont(15),
        // Add your styles for AWB text
    },
    boldText: {
        fontSize: calcFont(16),
        color: appColors.black,
        fontWeight: '600'
    },
    receivedText: {
        color: appColors.appColor,
        backgroundColor: appColors.blueSky,
        padding: 5,
        borderColor: appColors.white,
        borderRadius: 5,
        borderWidth: 1,
        textTransform: 'uppercase',
        fontSize: calcFont(12)
    },
    secondCard: {
        backgroundColor: appColors.gray,
        opacity: .9,
        padding: 10,
        // marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,

    },
    rowItem: {
        flexDirection: 'column',
    },
    blueText: {
        color: appColors.appColor,
        fontFamily: Fonts?.CenturyRegular
    },
    button: {
        flexDirection: 'row',
        backgroundColor: appColors.appColor,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    buttonText: {
        color: 'white',
        marginLeft: 5,
        fontSize: calcFont(16)
    },
    origin: {
        fontSize: calcFont(16),
        color: appColors.black
    },
    buttonsCont: {
        // width: calcWidth(220),
        justifyContent: 'flex-end'
    }
});