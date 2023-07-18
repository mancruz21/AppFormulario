import { View, Text, Button} from 'react-native'
import React from 'react'

export default function PreCinScreen(props) {

  const {navigation} = props;

    const goToPreguntaSeis = () => {
        navigation.navigate("Pregunta 2.4")
    }
  return (
    <View>
      <Text>PreCinScreen</Text>
      <Button onPress={goToPreguntaSeis} title="Siguiente"/>
    </View>
  )
}