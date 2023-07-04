import React from "react";
import { View, Text, Button } from "react-native";



export default function HomeScreen(props){

    const {navigation} = props;
    const goToSettings = () => {
        navigation.navigate("SettingsScren");
    };


    return(
        <View>
            <Text> Estamos en la pagina de inicio</Text>
            <Text> Estamos en la pagina de inicio</Text>
            <Text> Estamos en la pagina de inicio</Text>
            <Text> Estamos en la pagina de inicio</Text>
            <Text> Estamos en la pagina de inicio</Text>
            <Text> Estamos en la pagina de inicio</Text>
            <Button onPress={goToSettings} title="Ir a ajustes" />
            
            
        </View>
    )
}