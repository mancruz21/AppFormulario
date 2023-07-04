import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();


export default function MiCuentaNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mi Cuenta" component={SettingsScreen} options={{title: "Bienvenido a mi cuenta"}}/>    
    </Stack.Navigator>
  )
}