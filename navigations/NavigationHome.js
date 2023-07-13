import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import Home from '../screens/Home'
import HomeStack from './HomeStack'

const Tab = createBottomTabNavigator()

export default function NavigationHome() {

    const screenOptions = (route, color) =>{
        let iconName
        switch (route.name) {
            case "Home":
                iconName = "home-outline"
                break;
        
            
        }
        return(
            <Icon
                type="material-community"
                name={iconName}
                size={22}
                color={color}
            />
        )

    }
  return (


    <NavigationContainer>
        <Tab.Navigator
       
            
           > 
            <Tab.Screen

            name="Home Healt"
            component={HomeStack}
            options={{ title: "Home Healt" }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}