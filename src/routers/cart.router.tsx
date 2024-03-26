import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Appbar, Colors} from 'react-native-paper';
import {CartRouter} from '@interfaces';
import {createStackNavigator} from '@react-navigation/stack';

const {useCallback} = React;
const CartStack = createStackNavigator<CartRouter>();

export default () => {
  const {t} = useTranslation();


  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={CartScreen}
        initialParams={{editing: false, onPress: () => {}}}
        options={({route}) => ({
          header: () => (
            <Appbar.Header>
              <Appbar.Content title={t('navigation:cart:cartHeaderTitle')} />
              {cartProducts ? (
                <Appbar.Action
                  icon={route.params.editing ? 'check' : 'pencil-outline'}
                  onPress={route.params.onPress}
                  color={Colors.white}
                  animated
                />
              ) : null}
            </Appbar.Header>
          ),
        })}
      />
    </CartStack.Navigator>
  );
};
