import i18next from '@i18n';
import Router from '@routers';
import {Colors} from '@styles';
import * as React from 'react';
import {I18nextProvider} from 'react-i18next';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor(Colors.white);
  }, []);
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
