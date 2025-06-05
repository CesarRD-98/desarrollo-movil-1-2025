import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { useImageContext } from '../providers/imageProvider'

export default function Imagenes() {

  const { cargarImg, obtenerImagen } = useImageContext()

  const [idImagen, setIdImagen] = useState<string>('')

  function handleIdImage() {
    if (idImagen.trim() === '') {
      Alert.alert('Acción', 'Por favor, ingrese un ID.')
      return
    }
    obtenerImagen(parseInt(idImagen))
    setIdImagen('')
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Buscar imagen por ID</Text>
      <TextInput
        style={styles.input}
        inputMode='numeric'
        keyboardType='numeric'
        placeholder='Ingrese ID de la imagen'
        value={idImagen}
        onChangeText={(text) => {
          setIdImagen(text.replace(/[^0-9]/g, ''))
        }} />

      <TouchableOpacity onPress={handleIdImage} style={[styles.boton, styles.bgGreen]}>
        <Text style={styles.textoBoton}>Buscar imagen</Text>
      </TouchableOpacity>

      {cargarImg && <Image source={{ uri: cargarImg }} style={styles.image} />}
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 250,
    height: 250,
    margin: 10
  },
  boton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 14,
  },
  bgGreen: {
    backgroundColor: '#00bc7d'
  },
  bgBlue: {
    backgroundColor: '#00a6f4'
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fafafa',
    borderRadius: 4,
    height: 40,
    width: '60%',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
    borderColor: '#016630',
    borderWidth: 1,
    paddingHorizontal: 10
  }
});