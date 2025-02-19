import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import colors from '../config/colors';
import Icon from './Icon';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';

interface InterestItem {
  id: number;
  title: string;
  isLabel?: boolean;
  labelColor?: string;
}

interface Props {
  defaultSelectedId?: number;
}

const interests: InterestItem[] = [
  {
    id: 1,
    title: 'All',
    isLabel: false,
    labelColor: 'orange',
  },
  {
    id: 2,
    title: 'Unread',
    isLabel: false,
    labelColor: 'violet',
  },
  {
    id: 3,
    title: 'Favorites',
    isLabel: true,
    labelColor: 'pink',
  },
  {
    id: 4,
    title: 'Groups',
    isLabel: true,
    labelColor: 'blue',
  },
  {
    id: 5,
    title: 'Lead',
    isLabel: true,
    labelColor: 'orange',
  },
  {
    id: 6,
    title: 'Family',
    isLabel: false,
  },
];


const Stack = createNativeStackNavigator();

export default function ListOfInterest({ defaultSelectedId = 1 }: Props) {
  const [selectedId, setSelectedId] = useState(defaultSelectedId);

  const renderItem = ({ item }: { item: InterestItem }) => {
    const isSelected = item.id === selectedId;

    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={[styles.itemContainer, isSelected && styles.selectedItem]}
      >
        <View style={styles.itemContent}>
          {item.isLabel && (
            <MaterialCommunityIcons
              name="label"
              size={20}
              color={item.labelColor || 'green'}
              style={styles.icon}
            />
          )}
          <Text style={[styles.text, isSelected && styles.selectedText]}>
            {item.title}
          </Text>

          <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={GetStartedScreen}
        options={{ title: 'Choose Operation' }}
      />
      <Stack.Screen
        name="Encrypt"
        component={EncryptScreen}
        options={{ title: 'Encryption' }}
      />
      <Stack.Screen
        name="Decrypt"
        component={DecryptScreen}
        options={{ title: 'Decryption' }}
      />
    </Stack.Navigator>
  );
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={interests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    marginTop: 8,
  },
  listContainer: {
    paddingHorizontal: 8,
    gap: 6,
  },
  itemContainer: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  selectedItem: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  icon: {
    marginRight: 4,
  },
  text: {
    color: '#8B96A0',
    fontSize: 13,
    fontWeight: '500',
  },
  selectedText: {
    color: colors.white,
  },
});
function createNativeStackNavigator() {
  throw new Error('Function not implemented.');
}

