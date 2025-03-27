import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  ActivityIndicator,
} from 'react-native';
import ChatItem from './ChatItem';
import colors from '../config/colors';
import Category from './Category';
import Archived from './Archived';
import { supabase } from '../../utils/supabase';

// Define the chat data type
interface Chat {
  id: string;
  name: string;
  avatar?: string | null;
  lastMessage: string;
  timestamp: string;
  isUnRead: boolean;
  isPinned: boolean;
  category?: string;
}

export default function ChatList() {
  const [whatsappChats, setWhatsappChats] = useState<Chat[]>([]);
  const [filteredChats, setFilteredChats] = useState<Chat[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch chats from Supabase
  const fetchChats = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.from('chats').select('*');
      if (error) throw error;

      setWhatsappChats(data);
      console.log(data);
      setFilteredChats(data); // Initially, show all chats
    } catch (error: any) {
      Alert.alert('Error', `Failed to fetch chats: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const filterChats = (categoryId: number) => {
    let filtered: Chat[] = [];

    switch (categoryId) {
      case 1: // All
        filtered = whatsappChats;
        break;
      case 2: // Unread
        filtered = whatsappChats.filter((chat) => chat.isUnRead);
        break;
      case 3: // Favorites
        filtered = whatsappChats.filter((chat) => chat.isPinned);
        break;
      case 4: // Groups (Assuming groups don't have avatars)
        filtered = whatsappChats.filter((chat) => !chat.avatar);
        break;
      case 5: // Lead
        filtered = whatsappChats.filter((chat) => chat.category === 'Lead');
        break;
      case 6: // Family
        filtered = whatsappChats.filter((chat) => chat.category === 'Family');
        break;
      default:
        filtered = whatsappChats;
    }

    setFilteredChats(filtered);
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

      {isLoading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <TouchableWithoutFeedback>
          <FlatList
            data={filteredChats}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ChatItem {...item} />}
            style={styles.list}
          />
        </TouchableWithoutFeedback>
      )}
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
