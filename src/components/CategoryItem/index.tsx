import {Colors} from '@styles';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

interface CategoryItemProps {
  item: {
    image: string;
    category: string;
  };
  isSelected: boolean;
  onPress: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  item,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.categoryItemContainer} onPress={onPress}>
      <MaterialIcons
        name={item.image}
        color={isSelected ? Colors.primary : null}
        style={styles.categoryItemIcon}
      />
      <Text
        style={[
          styles.categoryItemText,
          {color: isSelected ? Colors.primary : null},
        ]}>
        {item.category}
      </Text>
      {isSelected && (
        <View
          style={[
            styles.categoryItemIndicator,
            {backgroundColor: Colors.primary},
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

export {CategoryItem};
