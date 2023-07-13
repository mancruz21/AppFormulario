import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'


import Home from '../screens/Home'
import Iniciar from '../screens/Iniciar';


const Stack = createStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator>
     <Stack.Screen
       name="home"
       component={Home}
    />

    <Stack.Screen
       name="iniciar"
       component={Iniciar}
    />
 </Stack.Navigator>
  )
}