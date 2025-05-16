import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Cartas from './components/cartas';
import { useState } from 'react';

export default function App() {

  const [validar, setValidar] = useState<boolean>(true)

  function Activar() {
    setValidar(false)
  }

  function Desactivar() {
    setValidar(true)
  }

  return (
    <View style={styles.container}>
      {validar ? (
        <Button title='Iniciar a Jugar' onPress={Activar}></Button>
      ) : (
        <>
          <Cartas />
          <View style={{ marginTop: 20 }}>
            <Button title='Salir' onPress={Desactivar} />
          </View>
        </>
      )}
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
