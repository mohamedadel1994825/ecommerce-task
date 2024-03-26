import {createStackNavigator} from '@react-navigation/stack';
import {CategoriesScreen, ExploreScreen} from '@screens/categories';
import * as React from 'react';
import {useTranslation} from 'react-i18next';

const CategoriesStack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  return (
    <CategoriesStack.Navigator screenOptions={{headerShown: false}}>
      <CategoriesStack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        // options={({navigation}) => ({
        //   header: () => (
        //     <Appbar.Header>
        //       <Appbar.Content
        //         title={t('navigation:categories:categoriesHeaderTitle')}
        //       />
        //       <Appbar.Action
        //         icon="magnify"
        //         onPress={() => navigation.navigate('SEARCH_SCREEN')}
        //       />
        //     </Appbar.Header>
        //   ),
        // })}
      />
    </CategoriesStack.Navigator>
  );
};
