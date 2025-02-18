import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from '../components/Icon';
import WhasappHeader from '../components/WhasappHeader';
import CheckNow from '../components/CheckNow';
import Message from '../components/Message';
import ListOfInterest from '../components/ListOfInterest';
import Archived from '../components/Archived';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WhasappHeader />
      <CheckNow />
      <ScrollView>
        <ListOfInterest />
        <Archived />
        <Message />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
