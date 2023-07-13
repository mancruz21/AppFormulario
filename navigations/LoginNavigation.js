import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import Register from '../screens/Register'


const Stack = createStackNavigator()

export default function LoginNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="login"
        component={Login}
        options={{title:"Acceder"}}
        />

    <Stack.Screen
        name="register"
        component={Register}
        options={{title:"Registrar Usuario"}}
    />

    </Stack.Navigator>
  )
}