import * as React from 'react';
import {DealsScreen} from '@screens';
import {Appbar} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

const DealsStack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  return (
    <DealsStack.Navigator>
      <DealsStack.Screen
        name="Deals"
        component={DealsScreen}
        options={{
          header: ({navigation}) => (
            <Appbar.Header>
              <Appbar.Content title={t('navigation:deals:headerTitle')} />
              <Appbar.Action
                icon="magnify"
                onPress={() => navigation.navigate('SEARCH_SCREEN')}
              />
            </Appbar.Header>
          ),
        }}
      />
    </DealsStack.Navigator>
  );
};
