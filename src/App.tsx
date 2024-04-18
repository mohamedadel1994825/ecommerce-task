import { RootNavigator } from "@navigation";
import React from "react";
import { LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

// connect to the Reactotron desktop app
// import { useStorage } from '@hooks'
import { useDeviceOS, useLocalization, useStatusBar } from "@hooks";
import { reduxStore, useAppDispatch } from "@store";
import { AppDispatch } from "@types";
import { PersistGate } from "redux-persist/integration/react";
import { queryClient } from "./reactquery";

if (!__DEV__) {
  // eslint-disable-next-line no-console
  console.log = () => {};
} else {
  import("./reactotron");
}
LogBox.ignoreLogs(["timer"]);
const { isIos } = useDeviceOS();
const { persistor, store } = reduxStore;
// eslint-disable-next-line react-hooks/rules-of-hooks

LogBox.ignoreAllLogs(true);

const App = () => {
  const dispatch: AppDispatch = useAppDispatch();
  useLocalization();
  useStatusBar();
  // const handleEndTrip = async () => {
  //   await dispatch(setIsTripEnded(false, false))
  // }
  // const setRemoteMessageId = async (remoteMessageId: string) => {
  //   await dispatch(setIsRemoteMessageId(remoteMessageId))
  // }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <RootSiblingParent>
          <SafeAreaProvider>
            <PaperProvider>
              {/* <StatusBar translucent /> */}
              <PersistGate loading={null} persistor={persistor}>
                <RootNavigator />
              </PersistGate>
            </PaperProvider>
          </SafeAreaProvider>
        </RootSiblingParent>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default AppWrapper;
