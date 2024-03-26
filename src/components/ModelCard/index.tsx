import {Colors} from '@styles';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

interface ModelCardProps {
  item: {
    name: string;
    image: string;
    availableProducts: string;
    quantity: number;
    space: string;
    color: string;
  };
}
const ModelCard: React.FC<ModelCardProps> = ({item}) => {
  const {name, image, availableProducts, quantity, space, color} = item;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#e9eff8',
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 113,
        height: 150,
      }}>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        source={{uri: image}}
        style={{width: 45, height: 45, marginBottom: 5}}
      />
      <Text
        style={{
          fontSize: 12,
          fontWeight: '400',
          marginBottom: 5,
          color: Colors.black,
        }}>
        {name}
      </Text>
      <Text
        style={{
          marginBottom: 2,
          fontSize: 10,
          fontWeight: '400',
          color: Colors.black,
        }}>
        {space} | {color}
      </Text>
      <Text style={{marginBottom: 2, fontSize: 10}}>{availableProducts}</Text>
      <Text style={{fontSize: 12, fontWeight: '400', color: Colors.black}}>
        {quantity}
      </Text>
    </TouchableOpacity>
  );
};

export {ModelCard};
