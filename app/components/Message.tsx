// components/ChatList.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import ChatItem from './ChatItem';
import colors from '../config/colors';
import { TouchableOpacity } from 'react-native';
import Category from './Category';
import { chats } from '@/utils/data';
import Archived from './Archived';

export default function ChatList() {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [filteredChats, setFilteredChats] = useState(chats);

  const filterChats = (categoryId: number) => {
    switch (categoryId) {
      case 1: // All
        setFilteredChats(chats);
        break;
      case 2: // Unread
        setFilteredChats(chats.filter((chat) => chat.isUnRead));
        break;
      case 3: // Favorites
        setFilteredChats(chats.filter((chat) => chat.isPinned));
        break;
      case 4: // Groups
        setFilteredChats(chats.filter((chat) => !chat.avatar)); // Assuming groups don't have avatars
        break;
      case 5: // Lead
        // Implement your lead filtering logic
        setFilteredChats(chats.filter((chat) => chat.category === 'Lead'));
        break;
      case 6: // Family
        setFilteredChats(chats.filter((chat) => chat.category === 'Family'));
        break;
      default:
        setFilteredChats(chats);
    }
  };

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId);
    filterChats(categoryId);
  };

  return (
    <View style={styles.container}>
      <Category
        defaultSelectedId={selectedCategory}
        onCategorySelect={handleCategoryChange}
      />
      <Archived />
      <TouchableWithoutFeedback onPress={() => alert('hello ')}>
        <FlatList
          data={filteredChats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ChatItem {...item} />}
          style={styles.list}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
