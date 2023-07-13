import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Login from '../screens/Login'
import LoginNavigation from './LoginNavigation'

const Tab = createBottomTabNavigator()

export default function Inicio() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen
            name="login"
            component={LoginNavigation}
            options={{title: "Acceder"}}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}