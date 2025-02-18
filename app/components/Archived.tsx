import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import Icon from './Icon';

export default function Archived() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          name="archive-outline"
          iconType="ionicon"
          size={50}
          style={styles.icon}
        />
      </View>
      <Text style={styles.text}>Archived</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 70,
  },
  iconContainer: {
    marginLeft: 14,
    // marginRight: 14,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 16,
    paddingTop: 20,
  },
});
