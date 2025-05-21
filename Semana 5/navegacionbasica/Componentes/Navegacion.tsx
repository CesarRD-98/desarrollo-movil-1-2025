import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Pages/Home';
import Persona from '../Pages/Persona';
import Detalle from '../Pages/Detalle';

export default function Navegacion() {

    const stack = createNativeStackNavigator();


    return (
        <stack.Navigator>
            <stack.Screen name='Home' component={Home}></stack.Screen>
            <stack.Screen name='Persona' component={Persona}></stack.Screen>
            <stack.Screen name='detallepersona' component={Detalle}></stack.Screen>
        </stack.Navigator>
    )
}