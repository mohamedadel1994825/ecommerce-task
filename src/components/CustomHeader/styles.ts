import { appStyles } from "@common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",

  },
  content: {
    ...appStyles.row,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  leftImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  centerImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  notificationIcon: {
    color: "blue", // Change color as needed
  },
});
