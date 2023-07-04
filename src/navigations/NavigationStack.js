import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Seccion1 from "../screens/Seccion1";

const Stack = createStackNavigator();

export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Settings" component={SettingsScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Seccion" component={Seccion1}/>
            
        </Stack.Navigator>
    )

    
}