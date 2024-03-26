import {
  NavigationContainer,
  DefaultTheme as NavigatorTheme,
} from '@react-navigation/native';
import {fonts} from '@styles';
import * as React from 'react';
import 'react-native-gesture-handler';
import {configureFonts, DefaultTheme, ThemeProvider} from 'react-native-paper';
import RootRouter from './root.router';

const {useCallback} = React;

export default function Router() {
  // const ref = React.useRef();

  //
  // const {getInitialState} = useLinking(ref, {
  //   prefixes: ['http://www.cavaraty.com', 'cavaraty_app://mobile_app'],
  //   config: {
  //     PRODUCT_SCREEN: {
  //       path: 'product/:id',
  //       parse: {
  //         id: (id) => id,
  //       },
  //     },
  //     CATEGORY_SCREEN: {
  //       path: 'category/:id',
  //       parse: {
  //         id: (id) => id,
  //       },
  //     },
  //   },
  // });
  //
  // const [isReady, setIsReady] = useState<boolean>(false);
  // const [initialState, setInitialState] = useState<NavigationState>();
  // const bootStrap = useCallback(async () => {
  //   try {
  //     const state = await Promise.race<any>([
  //       getInitialState(),
  //       new Promise((resolve) => setTimeout(resolve, 150)),
  //     ]);
  //     if (state !== undefined) {
  //       setInitialState(state);
  //     }
  //     setIsReady(true);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, [getInitialState]);
  //
  // React.useEffect(() => {
  //   bootStrap();
  // }, [bootStrap]);
  //
  // if (!isReady) {
  //   return null;
  // }

  return (
    <ThemeProvider
      theme={{
        ...DefaultTheme,
        fonts: configureFonts({
          ios: fonts,
          android: fonts,
          default: fonts,
        }),
        colors: {
          ...DefaultTheme.colors,
          primary: 'blue',
        },
      }}>
      <NavigationContainer
        theme={{
          ...NavigatorTheme,
          colors: {
            ...NavigatorTheme.colors,
            primary: 'blue',
          },
        }}
        // initialState={initialState}
        // ref={ref}
      >
        <RootRouter />
      </NavigationContainer>
    </ThemeProvider>
  );
}
