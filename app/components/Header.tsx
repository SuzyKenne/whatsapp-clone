import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import Icon from './Icon';

const HEADER_ICONS = [
  {
    name: 'camera-outline',
    iconType: 'ionicon',
    size: 50,
  },
  {
    name: 'search-outline',
    iconType: 'ionicon',
    size: 50,
  },
  {
    name: 'ellipsis-vertical',
    iconType: 'ionicon',
    size: 50,
  },
];

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.icons}>
        {HEADER_ICONS.map((icon, index) => (
          <Icon
            key={index}
            name={icon.name}
            iconType={icon.iconType}
            size={icon.size}
            style={styles.icon}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingVertical: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 23,
    color: colors.white,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
});
