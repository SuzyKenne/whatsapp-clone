import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

interface Props {
  name?: any;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
  iconName?: string;
  iconType?: 'ionicon' | 'material-community';
  style?: object;
}

export default function Icon({
  name,
  iconName,
  size = 40,
  backgroundColor = '#000',
  iconColor = '#fff',
  iconType,
  style,
}: Props) {
  return (
    <View
      style={[
        {
          marginTop: 40,
          width: size,
          height: size,
          borderRadius: size / 2,
          // backgroundColor,
          // justifyContent: 'center',
          // alignItems: 'center',

          // paddingBottom: 40,
        },
        style,
      ]}
    >
      {iconType ? (
        <Ionicons name={name} color={iconColor} size={size * 0.5} />
      ) : (
        <MaterialCommunityIcons
          name={name}
          color={iconColor}
          size={size * 0.5}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontWeight: 'bold',
    padding: 15,
  },
});
