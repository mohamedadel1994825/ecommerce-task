import { Colors } from "@styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.surface,
        height: 90,
        width: 90,
        alignItems: "center",
        borderRadius: 100,
        alignSelf: "center",
        position: "absolute",
        zIndex: 100,
        bottom: 20,
    }
})