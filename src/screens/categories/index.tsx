import {Colors} from '@styles';
import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import productsData from '../../store/productsData.json';
import {ExploreScreenProps} from './interfaces';

export const CategoriesScreen: React.FC<
  ExploreScreenProps
> = ({}): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState(productsData[0]);
  const [selectedBrand, setSelectedBrand] = useState(productsData[0].brands[0]);
  const renderCategoryItem = ({item}) => (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text style={{padding: 10, fontWeight: 'bold'}}>{item.category}</Text>
      <View
        style={{
          // width: 100,
          height: item == selectedCategory ? 1 : 0,
          backgroundColor: Colors.primary,
          marginTop: 1,
        }}
      />
    </TouchableOpacity>
  );

  const renderBrandItem = ({item}) => (
    <TouchableOpacity onPress={() => setSelectedBrand(item)}>
      <Text style={{padding: 10}}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderModelItem = ({item}) => (
    <Text style={{padding: 10}}>{item.name}</Text>
  );

  const renderVariantItem = ({item}) => (
    <Text style={{padding: 10}}>{item}</Text>
  );

  return (
    <View>
      <Text>Categories</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={productsData}
        renderItem={renderCategoryItem}
        keyExtractor={category => category.category}
      />
      <FlatList
        horizontal
        data={selectedCategory.brands}
        renderItem={renderBrandItem}
        keyExtractor={brand => brand.name}
      />
      <FlatList
        // numColumns={3}
        data={selectedBrand.models}
        renderItem={renderModelItem}
        keyExtractor={model => model.name}
      />
      {/* <FlatList
        data={selectedBrand.models[0].variants} // Displaying variants of the first model by default
        renderItem={renderVariantItem}
        keyExtractor={variant => variant}
      /> */}
    </View>
  );
};
