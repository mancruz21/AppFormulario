import React from "react";
import { View, Text, Button } from "react-native";

export default function SettingsScreen(props){

    
    const {navigation} = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }


    return(
        <View>
            <Text> Estamos en la pagina de config</Text>
            <Text> Estamos en la pagina de config</Text>
            <Text> Estamos en la pagina de config</Text>
            <Text> Estamos en la pagina de config</Text>
            <Text> Estamos en la pagina de config</Text>
            <Button onPress={() => goToPage("Home")} title="Volver a Home" />
        </View>
    )
}