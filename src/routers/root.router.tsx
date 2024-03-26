import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import {RootRouter} from '@interfaces';

import TabsRouter from './tabs.router';

const {Fragment} = React;
const RootStack = createNativeStackNavigator<RootRouter>();

export default () => {
  return (
    <Fragment>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <Fragment>
          <RootStack.Screen name="Tabs" component={TabsRouter} options={{}} />
          {/* <RootStack.Screen
              name="PRODUCT_SCREEN"
              options={{headerShown: false}}
              component={ProductScreen}
              initialParams={{id: '0'}}
            />
            <RootStack.Screen
              name="CATEGORY_SCREEN"
              options={{headerShown: false}}
              component={CategoryScreen}
              initialParams={{id: '0'}}
            />
            <RootStack.Screen
              name="SEARCH_SCREEN"
              options={{headerShown: false}}
              component={SearchScreen}
            />
            <RootStack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="IMAGES_GALLERY"
              component={ImagesGalleryScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
              options={{headerShown: false}}
            /> */}
        </Fragment>
      </RootStack.Navigator>
    </Fragment>
  );
};
