import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';

export default function PreTresScreen(props) {

    const {navigation} = props;

    const goToPreguntaCua = () => {
        navigation.navigate("Pregunta 2.2")
    }
  return (
    <View>
      <Text>PreTresScreen</Text>
      <Button onPress={goToPreguntaCua} title="Siguiente"/>
    </View>
  )
}