import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

export default function Boton() {
  return (
    <View>
      <Button title='Haz clic' onPress={()=>Alert.alert("Hola Cesar")}></Button>
    </View>
  )
}