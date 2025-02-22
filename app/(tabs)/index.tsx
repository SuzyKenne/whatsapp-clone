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
import colors from '../config/colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WhasappHeader />
      <CheckNow />
      <ScrollView>
        <Message />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    margin: 10,
  },
});
