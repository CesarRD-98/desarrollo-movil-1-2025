import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useImageContext } from '../providers/imageProvider'


export default function Home() {

  const { imgPicker, elegirImagen, tomarImagen, enviarImagen, cancelarSeleccion } = useImageContext()

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Subir imagen en la nube</Text>

      {!imgPicker && <>
        <TouchableOpacity onPress={elegirImagen} style={[styles.boton, styles.bgBlue]}>
          <Text style={styles.textoBoton}>Seleccionar imagen desde galería</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={tomarImagen} style={[styles.boton, styles.bgGreen]}>
          <Text style={styles.textoBoton}>Tomar imagen desde cámara</Text>
        </TouchableOpacity>
      </>}



      {imgPicker && <>
        <Image source={{ uri: imgPicker?.uri }} style={styles.image} />
        <TouchableOpacity onPress={enviarImagen} style={[styles.boton, styles.bgGreen]}>
          <Text style={styles.textoBoton}>Subir imagen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cancelarSeleccion} style={[styles.boton, styles.bgRed]}>
          <Text style={styles.textoBoton}>Cancelar</Text>
        </TouchableOpacity>
      </>}
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
    marginVertical: 8,
  },
  bgGreen: {
    backgroundColor: '#00bc7d'
  },
  bgBlue: {
    backgroundColor: '#00a6f4'
  },
  bgRed: {
    backgroundColor: '#ec003f'
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});