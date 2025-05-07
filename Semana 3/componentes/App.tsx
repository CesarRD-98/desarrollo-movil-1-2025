import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ClasesComponents from './components/clasesComponents';
import Boton from './components/button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Este es una app con componentes</Text>
      <ClasesComponents></ClasesComponents>
      <StatusBar style="auto" />
      <Boton></Boton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
