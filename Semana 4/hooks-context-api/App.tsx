import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EstudianteProvider from './provider/estudianteProvider';
import EstudianteConsumer from './components/estudianteConsumer';

export default function App() {
  return (
    <View style={styles.container}>
      <EstudianteProvider>
        <EstudianteConsumer/>
      </EstudianteProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 50
  },
});
