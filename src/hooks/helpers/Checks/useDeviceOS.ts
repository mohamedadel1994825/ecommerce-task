import { Platform } from "react-native";

export const useDeviceOS = () => {
  const isIos = Platform.OS === "ios";
  return { isIos };
};
