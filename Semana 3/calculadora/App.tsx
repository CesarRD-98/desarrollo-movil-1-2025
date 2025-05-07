import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorComponent from './components/calculatorComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <CalculatorComponent num1={10} num2={5} operacion={4} />
      <StatusBar style="auto" />
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
