import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';

export default function PreUnoScreen(props) {

    const {navigation} = props;

    const goToPreguntaDos = () => {
        navigation.navigate("Pregunta 1.2")
    }
  return (
    <View>
      <Text>PreUnoScreen</Text>
      <Button onPress={goToPreguntaDos} title="Siguiente"/>
    </View>
    
  )
}