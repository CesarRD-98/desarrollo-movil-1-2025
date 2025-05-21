import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import Juego from '../pages/juego';
import { NavigationContainer } from '@react-navigation/native';
import Detalles from '../pages/detalles';

export default function TabNav() {

    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home}></Tab.Screen>
                <Tab.Screen name='Juego' component={Juego}></Tab.Screen>
                <Tab.Screen name='Detalles' component={Detalles}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
