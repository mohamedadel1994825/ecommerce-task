import {Colors} from '@styles';
import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ModelCard, Separator} from '../../components';
import productsData from '../../store/productsData.json';
import {HomeScreenProps} from './interfaces';

export const HomeScreen: React.FC<HomeScreenProps> = ({}): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState(productsData[0]);
  const [selectedBrand, setSelectedBrand] = useState(productsData[0].brands[0]);
  const renderCategoryItem = ({item}) => {
    const isSelectedCategory = item == selectedCategory;
    const selectedCategoryHeight = isSelectedCategory ? 1 : 0;
    const selectedCategoryColor = isSelectedCategory ? Colors.primary : null;
    return (
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 50,
        }}
        onPress={() => {
          setSelectedCategory(item);
          setSelectedBrand(item.brands[0]);
        }}>
        <MaterialIcons
          size={14}
          name={item.image}
          color={selectedCategoryColor}
        />
        <Text
          style={{
            fontSize: 13,
            color: selectedCategoryColor,
          }}>
          {item.category}
        </Text>
        <View
          style={{
            // width: 100,
            height: selectedCategoryHeight,
            backgroundColor: Colors.primary,
            marginTop: 1,
            width: '100%',
          }}
        />
      </TouchableOpacity>
    );
  };

  const renderBrandItem = ({item}) => {
    const isSelectedBrand = item == selectedBrand;
    const selectedBrandBackground = isSelectedBrand
      ? Colors.primary
      : Colors.gray100;
    const selectedBrandColor = isSelectedBrand ? Colors.white : Colors.black;
    return (
      <TouchableOpacity
        style={{
          backgroundColor: selectedBrandBackground,
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => setSelectedBrand(item)}>
        <Text style={{color: selectedBrandColor}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderModelItem = ({item}) => (
    <Text style={{marginEnd: 10}}>{item.name}</Text>
  );

  const renderVariantItem = ({item}) => (
    <Text style={{marginEnd: 10}}>{item}</Text>
  );

  return (
    <ScrollView
      scrollEnabled
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: Colors.white, flex: 1}}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '500',
          marginBottom: 14,
          paddingLeft: 15,
          marginTop: 10,
        }}>
        Categories
      </Text>
      <View>
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={productsData}
          renderItem={renderCategoryItem}
          keyExtractor={category => category.category}
          ItemSeparatorComponent={() => <Separator width={20} />}
        />
        <View
          style={{
            width: '100%',
            height: 1,
            marginBottom: 20,
            backgroundColor: Colors.gray100,
          }}
        />
        <Text
          style={{
            fontSize: 13,
            fontWeight: '500',
            marginBottom: 15,
            marginLeft: 15,
          }}>
          Shop by brands
        </Text>
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          horizontal
          data={selectedCategory.brands}
          renderItem={renderBrandItem}
          keyExtractor={brand => brand.name}
          ItemSeparatorComponent={() => <Separator width={20} />}
        />
        <Text
          style={{
            fontSize: 13,
            fontWeight: '500',
            marginBottom: 15,
            marginTop: 18,
            marginLeft: 15,
          }}>
          Shop by models
        </Text>
        <FlatList
          scrollEnabled={false}
          initialNumToRender={10}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          contentContainerStyle={{
            paddingHorizontal: 15,
            marginBottom: 30,
          }}
          data={selectedBrand.models}
          renderItem={({item}: {item: any}) => (
            <>
              <ModelCard {...{item}} />
              <Separator width={10} />
            </>
          )}
          keyExtractor={model => model?.id}
        />
      </View>

      {/* <FlatList
        data={selectedBrand.models[0].variants} // Displaying variants of the first model by default
        renderItem={renderVariantItem}
        keyExtractor={variant => variant}
      /> */}
    </ScrollView>
  );
};
