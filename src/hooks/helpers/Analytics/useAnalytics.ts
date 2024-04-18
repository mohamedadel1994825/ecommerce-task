import analytics from "@react-native-firebase/analytics";

export const useAnalytics = () => {
  const fireAnalytics = async (
    eventName = "",
    id = "",
    item = "",
    description = "",
    size = ""
  ) => {
    await analytics().logEvent(eventName, {
      id,
      item,
      description,
      size,
    });
  };
  return { fireAnalytics };
};
