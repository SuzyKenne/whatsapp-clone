// import {
//   Image,
//   StyleSheet,
//   Platform,
//   View,
//   Text,
//   SafeAreaView,
//   ScrollView,
// } from 'react-native';
// import Icon from '../components/Icon';
// import WhasappHeader from '../components/WhasappHeader';
// import CheckNow from '../components/CheckNow';
// import Message from '../components/Message';
// import colors from '../config/colors';
// import ChatList from '../components/Message';

// export default function HomeScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <WhasappHeader />
//       <CheckNow />
//       <View style={styles.chatListContainer}>
//         <ChatList />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.primary,
//     flex: 1,
//     margin: 10,
//   },
//   chatListContainer: {
//     flex: 1,
//   },
// });

import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import WhatsappHeader from '../components/WhasappHeader';
import Message from '../components/Message';
import colors from '../config/colors';
import ChatList from '../components/Message';
import CreateChats from '../components/NewContactModal';
import CheckNow from '../components/CheckNow';
import NewContactModal from '../components/NewContactModal';

// Define Contact type to match the modal's type
interface Contact {
  name: string;
  phoneNumber: string;
}

export default function HomeScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCreateContact = (contactInfo: Contact) => {
    // Implement contact creation logic here
    console.log('New Contact Created:', contactInfo);

    // Close the modal
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <WhatsappHeader onAddContact={() => setModalVisible(true)} />
      <CheckNow />
      <View style={styles.chatListContainer}>
        <ChatList />
      </View>

      <NewContactModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onCreateContact={handleCreateContact}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    margin: 10,
  },
  chatListContainer: {
    flex: 1,
  },
});
