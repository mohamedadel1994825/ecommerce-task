import * as React from 'react';
import {useTranslation} from 'react-i18next';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {TabsRouter} from '@interfaces';
// import remoteConfig from '@react-native-firebase/remote-config';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Colors} from '@styles';
import {Text, TouchableOpacity} from 'react-native';
import categoriesRouter from './categories.router';
import HomeRouter from './home.router';

const {useCallback} = React;
const BottomTabs = createMaterialBottomTabNavigator<TabsRouter>();

export default () => {
  // const middleTab: string = useMemo(() => {
  //   const config = remoteConfig().getValue('middleTab');
  //   console.log(config);
  //   return typeof config.value === 'string' ? config.value : 'Deals';
  // }, []);

  const {t} = useTranslation();
  // const cartProductsLengthSelector = useCallback(
  //   (state) => state.cart.products.length,
  //   [],
  // );
  // const cartProducts = useSelector<RootState, number>(
  //   cartProductsLengthSelector,
  //   shallowEqual,
  // );
  const MiddleAddIcon = () => (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.surface,
        height: 90,
        width: 90,
        // justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 100,
        bottom: 20,
        // marginBottom: -100,
      }}>
      <CommunityIcon
        name="plus"
        color={Colors.white}
        size={24}
        style={{marginTop: 18}}
      />
      <Text style={{fontSize: 12, marginTop: 10, color: Colors.white}}>
        {t('navigation:deals:headerTitle')}
      </Text>
    </TouchableOpacity>
  );
  return (
    <>
      <MiddleAddIcon />
      <BottomTabs.Navigator
        initialRouteName="Home"
        sceneAnimationEnabled
        activeColor={Colors.primary}>
        <BottomTabs.Screen
          name="HomeScreen"
          component={HomeRouter}
          options={{
            tabBarColor: Colors.primary,
            tabBarLabel: (
              <Text style={{fontSize: 12}}>
                {t('navigation:home:homeHeaderTitle')}
              </Text>
            ),
            tabBarIcon: ({color, focused}) => (
              <CommunityIcon
                name="home"
                size={24}
                color={focused ? Colors.primary : color}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Categories"
          component={HomeRouter}
          options={{
            tabBarLabel: (
              <Text style={{fontSize: 12}}>
                {t('navigation:categories:categoriesHeaderTitle')}
              </Text>
            ),
            tabBarIcon: ({color, focused}) => (
              <CommunityIcon
                name="magnify"
                size={24}
                color={focused ? Colors.primary : color}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Deals"
          component={HomeRouter}
          options={{
            tabBarLabel: <Text style={{fontSize: 12}} />,
            // tabBarIcon: middleAddIcon,
          }}
        />
        <BottomTabs.Screen
          name="Cart"
          component={HomeRouter}
          options={{
            // tabBarBadge: 0,
            tabBarLabel: (
              <Text style={{fontSize: 12}}>
                {t('navigation:cart:cartHeaderTitle')}
              </Text>
            ),
            tabBarIcon: ({color, focused}) => (
              <CommunityIcon
                name="cube"
                size={24}
                color={focused ? Colors.primary : color}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Account"
          component={HomeRouter}
          options={{
            tabBarLabel: (
              <Text style={{fontSize: 12}}>
                {t('navigation:account:accountHeaderTitle')}
              </Text>
            ),
            tabBarIcon: ({color, focused}) => (
              <CommunityIcon
                name="menu"
                size={24}
                color={focused ? Colors.primary : color}
              />
            ),
          }}
        />
      </BottomTabs.Navigator>
    </>
  );
};
