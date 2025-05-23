import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TabNav from './components/TabNav';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TabNav></TabNav>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
