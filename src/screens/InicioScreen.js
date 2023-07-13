import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'
import React from 'react'


export default function InicioScreen(props) {

    const {navigation} = props;

    const goToIdentificacion = () => {
        navigation.navigate("Identificacion")
    }


  return (
    <View  style={styles.container}>
    
    <ScrollView style={styles.content}>
        <Text style={styles.boldText}>La encuesta puede ser respondida por máximo 3 integrantes del hogar, que incluyen:</Text>
        <Text style={styles.text}>Personas de 10 años o más (≥10 años) que residan de manera permanente en el municipio, es decir, por un tiempo mayor o igual a 6 meses (≥ 6 meses).</Text>
        <Text style={styles.text}>Para el caso de las personas menores de 18 años de edad (18 años), el suministro de la información se realizará a través del acompañamiento de los padres o de la persona del hogar que esté a cargo de su cuidado.</Text>
        <Text style={styles.text}>Para el caso de las personas que no tengan la capacidad de responder por sí mismas, la información será suministrada por un adulto del hogar o por parte de un cuidador con tiempo de servicio/acompañamiento mayor o igual a seis meses (≥ 6 meses).</Text>
    </ScrollView>
    <Button onPress={goToIdentificacion} title="Siguiente" style={styles.button} />
</View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  backgroundImage: {
      flex: 1,
      width: '50%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
  },
  header: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 20,
  },
  content: {
      flex: 1,
      marginHorizontal: 20,
      marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
      marginBottom: 10,
  },
  button: {
    margin: 20,
},
});





