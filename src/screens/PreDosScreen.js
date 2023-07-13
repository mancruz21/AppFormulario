import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';

export default function PreDosScreen(props) {

    const {navigation} = props;

    const goToPreguntaTres = () => {
        navigation.navigate("Pregunta 2.1")
    }
  return (
    <View>
      <Text>PreDosScreen</Text>
      <Button onPress={goToPreguntaTres} title="Siguiente"/>

    </View>
  )
}