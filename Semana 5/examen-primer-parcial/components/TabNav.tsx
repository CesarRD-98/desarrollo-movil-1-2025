import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Inicio from '../screens/Inicio'
import Transferencias from '../screens/Transferencias'
import Historico from '../screens/Historico'

export default function TabNav() {

    const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Inicio' component={Inicio}></Tab.Screen>
            <Tab.Screen name='Transferencias' component={Transferencias}></Tab.Screen>
            <Tab.Screen name='Historico' component={Historico}></Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
  )
}
