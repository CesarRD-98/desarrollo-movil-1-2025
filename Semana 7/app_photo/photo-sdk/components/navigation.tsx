import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home'
import Imagenes from '../screens/imagenes'

export default function Navigation() {
    const tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <tab.Navigator>
                <tab.Screen name='Inicio' component={Home}></tab.Screen>
                <tab.Screen name='Imagenes' component={Imagenes}></tab.Screen>
            </tab.Navigator>
        </NavigationContainer>
    )
}