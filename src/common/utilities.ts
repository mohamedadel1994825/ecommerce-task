import { Platform } from "react-native";

export const getDeepLink = (path = "") => {
  const scheme = "gazal";
  const prefix =
    Platform.OS == "android" ? `${scheme}://gazal-host/` : `${scheme}://`;
  return prefix + path;
};
