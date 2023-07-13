import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import LoginScreen from '../src/screens/LoginScreen'
import InicioScreen from '../src/screens/InicioScreen'
import RegistrateScreen from '../src/screens/RegistrateScreen'
import IdentificacionScreen from '../src/screens/IdentificacionScreen'
import PreUnoScreen from '../src/screens/PreUnoScreen'
import PreDosScreen from '../src/screens/PreDosScreen'
import PreTresScreen from '../src/screens/PreTresScreen'
import PreCuaScreen from '../src/screens/PreCuaScreen'
import PreCinScreen from '../src/screens/PreCinScreen'
import RecuperacioScreen from '../src/screens/RecuperacioScreen'


const Stack = createStackNavigator()


export default function StackNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Inicio" component={InicioScreen}/>
        <Stack.Screen name="Registrate" component={RegistrateScreen}/>
        <Stack.Screen name="Recuperala" component={RecuperacioScreen}/>
        <Stack.Screen name="Identificacion" component={IdentificacionScreen}/>
        <Stack.Screen name="Pregunta 1.1" component={PreUnoScreen}/>
        <Stack.Screen name="Pregunta 1.2"component={PreDosScreen}/>
        <Stack.Screen name="Pregunta 2.1"component={PreTresScreen}/>
        <Stack.Screen name="Pregunta 2.2"component={PreCuaScreen}/>
        <Stack.Screen name="Pregunta 2.3"component={PreCinScreen}/>

    </Stack.Navigator>
  )
}