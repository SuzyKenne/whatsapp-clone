// components/ChatList.tsx
import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import ChatItem from './ChatItem';
import colors from '../config/colors';
import { TouchableOpacity } from 'react-native';

const chats = [
  {
    id: '1',
    title: 'Salome',
    message: 'You reacted 👍 to "Guys we should hangout on satusrday"',
    time: 'Yesterday',
    isPinned: true,
    avatar: require('@/assets/images/salome.png'),
    numberOfMessage: 2,
    isUnRead: true,
  },
  {
    id: '2',
    title: 'Computer Vision and Cybersecurity',
    message: 'You reacted 👍 to "NO Java this week"',
    time: 'Yesterday',
    avatar: null,
    isPinned: true,
    numberOfMessage: 45,
    isUnRead: true,
  },
  {
    id: '3',
    title: 'MEng Artificial Intelligence and Computing',
    message: 'You: You deleted this message',
    time: '1/29/25',
    avatar: null,
  },
  {
    id: '4',
    title: 'Dummy - Talk to myself 🤔',
    message: '✓ You: 👌 LEARN LARAVEL THE EAS...',
    time: 'Yesterday',
    avatar: require('@/assets/images/suzy.png'),
  },
  {
    id: '5',
    title: 'Cyril',
    message: 'what about the creator db?',
    time: '9:51 AM',
    avatar: require('@/assets/images/cyril.png'),
    isDraft: false,
    numberOfMessage: 5,
    isUnRead: true,
    isMuted: true,
  },
  {
    id: '6',
    title: 'RBC - Made in Cameroon 🇨🇲',
    message: 'Draft: Bbb',
    time: '9:51 AM',
    avatar: require('@/assets/images/girl.jpeg'),
    numberOfMessage: 45,
    isUnRead: true,
  },
];

export default function ChatList() {
  return (
    <TouchableWithoutFeedback onPress={() => alert('hello ')}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatItem {...item} />}
        style={styles.list}
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   SafeAreaView,
//   ScrollView,
// } from 'react-native';
// import React, { useState } from 'react';
// import ListItem from '../components/ListItem';
// // import Screen from '../components/Screen';
// import Seperator from './Seperator';

// const initialMessages = [
//   {
//     id: 1,
//     title: 'Computer Vision and Cybersecurity',
//     description: 'You reacted 👍 to "No Java this week',
//     image: require('@/assets/images/girl.jpeg'),
//   },
//   {
//     id: 2,
//     title: 'T2',
//     description: 'D2',
//     image: require('@/assets/images/girl.jpeg'),
//   },
//   {
//     id: 3,
//     title: 'T3',
//     description: 'D3',
//     image: require('@/assets/images/girl.jpeg'),
//   },
//   {
//     id: 4,
//     title: 'T4',
//     description: 'D4',
//     image: require('@/assets/images/girl.jpeg'),
//   },
//   {
//     id: 5,
//     title: 'T5',
//     description: 'D5',
//     image: require('@/assets/images/girl.jpeg'),
//   },
//   {
//     id: 6,
//     title: 'T6',
//     description: 'D6',
//     image: require('@/assets/images/girl.jpeg'),
//   },
//   {
//     id: 7,
//     title: 'T7',
//     description: 'D7',
//     image: require('@/assets/images/girl.jpeg'),
//   },
// ];
// export default function MesagesScreen() {
//   const [messages, setMessages] = useState(initialMessages);

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <FlatList
//           data={messages}
//           keyExtractor={(message) => message.id.toString()}
//           renderItem={({ item }) => (
//             <ListItem
//               title={item.title}
//               subtitle={item.description}
//               image={item.image}
//               onPress={() => console.log('Message selected', item)}
//             />
//           )}
//           ItemSeparatorComponent={Seperator}
//           contentContainerStyle={styles.listContainer}
//         />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   listContainer: {
//     flexGrow: 1,
//   },
// });
