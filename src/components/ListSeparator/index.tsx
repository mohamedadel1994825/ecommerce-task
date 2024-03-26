import React from 'react';
import {View, ViewStyle} from 'react-native';

interface SeparatorProps {
  width: number;
  style?: ViewStyle;
}

const Separator: React.FC<SeparatorProps> = ({width, style}) => (
  <View style={[{width}, style]} />
);

export {Separator};
