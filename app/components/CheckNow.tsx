import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import colors from '../config/colors';
import Icon from './Icon';

export default function CheckNow() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <View>
      {isOpen && (
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Icon
              name="cloud-upload-outline"
              iconColor={colors.green}
              size={60}
              style={styles.cloudIcon}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Your Google storage is over 70% full. Make sure you have enough
              storage for backups.
            </Text>
            <Text style={styles.checkNowText}>Check now</Text>
          </View>
          <TouchableOpacity
            style={styles.closeIconContainer}
            onPress={handleClose}
          >
            <Icon
              name="close"
              size={45}
              iconColor="gray"
              style={styles.closeIcon}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGreen,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    marginHorizontal: 8,
    marginVertical: 5,
  },
  iconContainer: {
    marginRight: 10,
    alignSelf: 'flex-start',
  },
  cloudIcon: {
    marginTop: 0,
    paddingBottom: 0,
  },
  textContainer: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  text: {
    color: colors.white,
    alignSelf: 'flex-start',
    fontSize: 12,
    lineHeight: 20,
  },
  checkNowText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  closeIconContainer: {
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  closeIcon: {
    padding: 0,
    margin: 0,
  },
});
