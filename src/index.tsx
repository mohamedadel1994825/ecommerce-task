import i18next from "@i18n";
import Router from "@routers";
import * as React from "react";
import { I18nextProvider } from "react-i18next";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useConfigs } from "./hooks";

const App = () => {
  useConfigs();
  return (
    <I18nextProvider i18n={i18next}>
      <PaperProvider>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </PaperProvider>
    </I18nextProvider>
  );
};

export default App;
