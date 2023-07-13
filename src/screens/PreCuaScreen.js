import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';

export default function PreCuaScreen(props) {
    const {navigation} = props;

    const goToPreguntaCin = () => {
        navigation.navigate("Pregunta 2.3")
    }
  return (
    <View>
      <Text>PreCuaScreen</Text>
      <Button onPress={goToPreguntaCin} title="Siguiente"/>
    </View>

  )
}