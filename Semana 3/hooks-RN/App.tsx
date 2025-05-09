import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EstudianteComponent from './components/estudianteComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <EstudianteComponent></EstudianteComponent>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  }
});
