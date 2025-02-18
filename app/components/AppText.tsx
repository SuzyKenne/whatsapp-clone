import { Text, View, StyleProp, TextStyle } from 'react-native';
import React from 'react';
import defaultStyle from '../config/style';

interface Props {
  children?: string;
  style?: StyleProp<TextStyle>;
}

const AppText = ({ children, style }: Props) => {
  return <Text style={[defaultStyle.text, style]}>{children}</Text>;
};

export default AppText;
