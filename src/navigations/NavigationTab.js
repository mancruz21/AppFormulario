import React from "react";
import {Image} from "react-native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome5";


import HomeScreen from "../screens/HomeScreen";


import MiCuentaNavigation from "./MiCuentaNavigation";
import Seccion1Navigation from "./Seccion1Navigation";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {

    return(

        <Tab.Navigator>

         <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: "INICIO",
         //tabBarBadge: 3,
          tabBarIcon: ({color, size}) => (
            <Icon name= "heart" color= {color} size={size}/>
          ),
        }}
       />
            <Tab.Screen name="Cuestionario" component={Seccion1Navigation} options={{
        tabBarLabel: "",
         //tabBarBadge: 3,
          tabBarIcon: ({color, size}) => renderLogo(),
        }}
       />



            <Tab.Screen name="Mi cuenta" component={MiCuentaNavigation} options={{
        tabBarLabel: "ACCEDE",
         //tabBarBadge: 3,
          tabBarIcon: ({color, size}) => ( <Icon name= "user" color= {color} size={size}/>
          ),
        }}
       />
 
        </Tab.Navigator>
    )

}

function renderLogo() {

    return(
        <Image source={require('../assets/Logo_Color.png/')} 
        style={{width: 45, height: 60}}
        />
    )
}