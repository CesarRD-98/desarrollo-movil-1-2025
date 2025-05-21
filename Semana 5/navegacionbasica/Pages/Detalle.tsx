import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function Detalle() {

  const router= useRoute()

  const {nombre,apellido} = router.params as {nombre:string, apellido:string}
  return (
    <View>
      <Text>Nombre persona: {nombre}</Text>
       <Text>Apelido persona: {apellido}</Text>
    </View>
  )
}