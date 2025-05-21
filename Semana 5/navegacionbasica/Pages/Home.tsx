import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {Persona} from '../Modelos/Persona'
 
export default function Home() {

  const navegacion=useNavigation();


  return (
    <View>
      <Text>Pagina inicial</Text>

      <Button title='Ir a pagina persona' onPress={()=>navegacion.navigate('Persona' as never)}></Button>
      <Button title='Ir a pagina detalle' onPress={()=>navegacion.navigate('detallepersona' as never, {nombre:'Luis',apellido:'Garcia'})}></Button>
    </View>
  )
}