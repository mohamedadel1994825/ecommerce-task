import * as React from 'react';
import {
  AccountScreen,
  ContactUsScreen,
  EditAccountScreen,
  OrderScreen,
  OrdersScreen,
  SelectCurrency,
  WishListScreen,
} from '@screens';
import {AccountRouter} from '@interfaces';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {I18nManager} from 'react-native';

const AccountStack = createStackNavigator<AccountRouter>();

export default () => {
  const {t} = useTranslation();
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          header: () => (
            <Appbar.Header>
              <Appbar.Content
                title={t('navigation:account:accountHeaderTitle')}
              />
            </Appbar.Header>
          ),
        }}
      />
      <AccountStack.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          header: ({navigation}) => (
            <Appbar.Header>
              <Appbar.Action
                  icon={I18nManager.isRTL?'arrow-right':'arrow-left'}
                  // @ts-ignore
                  onPress={navigation.goBack}
                />
              <Appbar.Content
                title={t('navigation:account:wishListHeaderTitle')}
              />
            </Appbar.Header>
          ),
        }}
      />
      <AccountStack.Screen
        name="EditAccount"
        component={EditAccountScreen}
        options={{
          header: ({navigation}) => (
            <Appbar.Header>
              <Appbar.Action
                  icon={I18nManager.isRTL?'arrow-right':'arrow-left'}
                  // @ts-ignore
                  onPress={navigation.goBack}
                />
              <Appbar.Content
                title={t('navigation:account:editAccountHeaderTitle')}
              />
            </Appbar.Header>
          ),
        }}
      />
      <AccountStack.Screen
        name="OrderList"
        component={OrdersScreen}
        options={{
          header: ({navigation}) => (
            <Appbar.Header>
              <Appbar.Action
                  icon={I18nManager.isRTL?'arrow-right':'arrow-left'}
                  // @ts-ignore
                  onPress={navigation.goBack}
                />
              <Appbar.Content
                title={t('navigation:account:orderListHeaderTitle')}
              />
            </Appbar.Header>
          ),
        }}
      />
      <AccountStack.Screen
        name="OrderScreen"
        component={OrderScreen}
        initialParams={{
          id: '',
        }}
        options={{
          header: ({navigation}) => (
            <Appbar.Header>
                       <Appbar.Action
                  icon={I18nManager.isRTL?'arrow-right':'arrow-left'}
                  // @ts-ignore
                  onPress={navigation.goBack}
                />
              <Appbar.Content
                title={t('navigation:account:orderListHeaderTitle')}
              />
            </Appbar.Header>
          ),
        }}
      />
      <AccountStack.Screen
        name="ContactUs"
        component={ContactUsScreen}
        options={{
          header: ({navigation}) => (
            <Appbar.Header>
                       <Appbar.Action
                  icon={I18nManager.isRTL?'arrow-right':'arrow-left'}
                  // @ts-ignore
                  onPress={navigation.goBack}
                />
              <Appbar.Content
                title={t('navigation:account:contactUsHeaderTitle')}
              />
            </Appbar.Header>
          ),
        }}
      />
      <AccountStack.Screen
        name="ChangeCurrency"
        component={SelectCurrency}
        options={{
          header: ({navigation}) => (
            <Appbar.Header>
                       <Appbar.Action
                  icon={I18nManager.isRTL?'arrow-right':'arrow-left'}
                  // @ts-ignore
                  onPress={navigation.goBack}
                />
              <Appbar.Content
                title={I18nManager.isRTL ? 'أختار العملة' : 'Select Currency'}
              />
            </Appbar.Header>
          ),
        }}
      />
    </AccountStack.Navigator>
  );
};
