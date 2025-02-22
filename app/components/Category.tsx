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

interface CategoryItem {
  id: number;
  title: string;
  isLabel?: boolean;
  labelColor?: string;
}

interface Props {
  defaultSelectedId?: number;
  onCategorySelect?: (categoryId: number) => void;
}

const categories: CategoryItem[] = [
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

export default function Category({
  defaultSelectedId = 1,
  onCategorySelect,
}: Props) {
  const [selectedId, setSelectedId] = useState(defaultSelectedId);

  const handlePress = (item: CategoryItem) => {
    setSelectedId(item.id);
    onCategorySelect?.(item.id);
  };

  const renderItem = ({ item }: { item: CategoryItem }) => {
    const isSelected = item.id === selectedId;

    return (
      <TouchableOpacity
        onPress={() => handlePress(item)}
        style={[styles.itemContainer, isSelected && styles.selectedItem]}
      >
        <View style={styles.itemContent}>
          {item.isLabel && (
            <MaterialCommunityIcons
              name="label"
              size={16}
              color={item.labelColor || 'green'}
              style={styles.icon}
            />
          )}
          <Text style={[styles.text, isSelected && styles.selectedText]}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
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
    backgroundColor: colors.darkGreen,
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
