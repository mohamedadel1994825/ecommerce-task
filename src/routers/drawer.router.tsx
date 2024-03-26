import * as React from 'react';
import {useTranslation} from 'react-i18next';
import CommunityIcon from 'react-native-vector-icons/FontAwesome';

import {TabsRouter} from '@interfaces';

import {createDrawerNavigator} from '@react-navigation/drawer';
import AccountRouter from './account.router';
import CategoriesRouter from './categories.router';
import DealsRouter from './deals.router';
import HomeRouter from './home.router';

const {useCallback} = React;
const Drawer = createDrawerNavigator<TabsRouter>();

export default () => {
  const {t} = useTranslation();


  return (
    <Drawer.Navigator
      initialRouteName="Home"
      lazy
      drawerContentOptions={{
        labelStyle: {
          fontFamily: 'Cairo-Regular',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeRouter}
        options={{
          drawerLabel: t('navigation:home:homeHeaderTitle'),
          drawerIcon: ({color}) => (
            <CommunityIcon name="home" color={color} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="Categories"
        component={CategoriesRouter}
        options={{
          drawerLabel: t('navigation:categories:categoriesHeaderTitle'),
          drawerIcon: ({color}) => (
            <CommunityIcon name="magnify" color={color} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="Deals"
        component={DealsRouter}
        options={{
          drawerLabel: t('navigation:deals:dealsHeaderTitle'),
          drawerIcon: ({color}) => (
            <CommunityIcon name="brightness-percent" color={color} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{
          // tabBarBadge: cartProducts,
          drawerLabel: t('navigation:cart:cartHeaderTitle'),
          drawerIcon: ({color}) => (
            <CommunityIcon name="cart" color={color} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={AccountRouter}
        options={{
          drawerLabel: t('navigation:account:accountHeaderTitle'),
          drawerIcon: ({color}) => (
            <CommunityIcon name="account" color={color} size={24} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
