import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './components/navigation';
import ImageProvider from './providers/imageProvider';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageProvider>
        <Navigation />
      </ImageProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
