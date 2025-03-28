import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function Seperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.tertiare,
  },
});
