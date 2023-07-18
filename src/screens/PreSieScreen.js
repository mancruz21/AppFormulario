import { View, Text, StyleSheet, TextInput} from 'react-native'
import React, {useState} from 'react'
import { Button, CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


export default function PreSieScreen(props) {


  const [selectedOption, setSelectedOption] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [primerNombre, setPrimerNombre] = useState('');
  const [segundoNombre, setSegundoNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  }

    const {navigation} = props;
    const goToEnvio = () => {
        navigation.navigate("Pregunta 2.6")
    }


  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.titulo}>   DATOS DE IDENTIFICACIÓN DE QUIEN REALIZA EL REGISTRO</Text>
          <View style={styles.preguntaContainer}>
          <Text style={styles.pregunta}>PREGUNTA 3.1 (Selección Única)</Text>
          <View style={styles.recuadro}>
            <Text style={styles.recuadroTitulo}>Tipo de Identificación</Text>
            <View style={styles.optionContainer}>
            <CheckBox
              title="CC Cédula de Ciudadanía"
              checked={selectedOption === 'CC'}
              onPress={() => handleOptionSelect('CC')}
            />
            <CheckBox
              title="CE Cédula de Extranjería"
              checked={selectedOption === 'CE'}
              onPress={() => handleOptionSelect('CE')}
            />


            </View>
            
          {selectedOption && (
            <View>
              <Text style={styles.preguntaText}>Número de identificación:</Text>
              <TextInput
                style={styles.input}
                value={identificationNumber}
                onChangeText={setIdentificationNumber}
                keyboardType="numeric"
              />
            </View>
          )}


          </View>

          </View>

          <View style={styles.preguntaContainer}>
          <View style={styles.recuadro}>
          <Text style={styles.recuadroTitulo}>Nombres y Apellidos</Text>
          <TextInput
            style={styles.input}
            value={primerNombre}
            onChangeText={text => setPrimerNombre(text)}
            placeholder="Ingrese su primer nombre"
          />
          <TextInput
            style={styles.input}
            value={segundoNombre}
            onChangeText={text => setSegundoNombre(text)}
            placeholder="Ingrese su segundo nombre"
          />

         <TextInput
            style={styles.input}
            value={primerApellido}
            onChangeText={text => setPrimerApellido(text)}
            placeholder="Ingrese su rimer apellido"
          />
          <TextInput
            style={styles.input}
            value={segundoApellido}
            onChangeText={text => setSegundoApellido(text)}
            placeholder="Ingrese su segundo apellido"
          />
          


          </View>



          </View>


          


    <Button onPress={goToEnvio} title="Siguiente"/>
</ScrollView>
  )
}
const styles = StyleSheet.create({
    preguntaText: {
      fontWeight: 'bold',
      marginBottom: 8,
    },
    container: {
      flexGrow: 1,
      padding: 16,
      alignItems: 'center',
    },
    titulo: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    preguntaContainer: {
      marginBottom: 16,
    },
    pregunta: {
      fontSize: 16,
      marginBottom: 8,
    },
    recuadro: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      padding: 8,
      alignSelf: 'stretch',
      marginHorizontal: 8,
    },
    recuadroTitulo: {
      fontWeight: 'bold',
      marginBottom: 8,
    },
    opcionesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 8,
      borderRadius: 4,
      fontSize: 16,
      color: '#333'
    },
    button: {
      backgroundColor: '#007AFF',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginVertical: 16,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    }
  })
  