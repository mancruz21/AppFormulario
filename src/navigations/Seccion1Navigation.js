import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import Formulario1 from '../screens/Formulario1';
import Seccion1 from '../screens/Seccion1';

const Stack = createStackNavigator();


export default function Seccion1Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="........" component={Formulario1}/>
      <Stack.Screen name="Seccion 1" component={Seccion1}/>    
    </Stack.Navigator>
  )
}