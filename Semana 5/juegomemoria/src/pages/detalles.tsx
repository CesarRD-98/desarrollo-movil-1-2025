import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Detalles() {
  return (
    <View style={styles.container}>
      <Text>Esta es la pagina de detalles</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})