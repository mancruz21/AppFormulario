import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Button, CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default function PreSeisScreen(props) {
  const { navigation } = props;
  const [opcionOtro, setOpcionOtro] = useState(false);
  const [otroTexto, setOtroTexto] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [seleccionoSi, setSeleccionoSi] = useState(false);
  const [otroIndicacion, setOtroIndicacion] = useState('');
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [nombreDepartamento, setNombreDepartamento] = useState('');
  const [municipio, setMunicipio] = useState('');

  const opciones = [
    'Educación para la salud (cuidado de niños, mujeres y adulto mayor)',
    'Estrategia comunitaria RBC – Rehabilitación Basada en Comunidad (ayudas técnicas, deporte para Personas con Discapacidad)',
    'Salud Mental (consumo Sustancias Psicoactivas, proyecto vida para jóvenes, prevención de conducta suicida, identificación riesgo violencias sexuales)',
    'Otro',
    'Ninguna'
  ];

  const handleCheckboxChange = (index) => {
    if (selectedOptions.includes(4) && index !== 4) {
      return;
    }

    if (index === 3) {
      setOpcionOtro(!opcionOtro);
    } else {
      setOpcionOtro(false);
    }

    const options = [...selectedOptions];

    if (options.includes(index)) {
      options.splice(options.indexOf(index), 1);
    } else {
      if (options.length < 2) {
        options.push(index);
      }
    }

    setSelectedOptions(options);
  };

  const handleSiCheckboxChange = () => {
    setSeleccionoSi(true);
  };

  const handleNoCheckboxChange = () => {
    setSeleccionoSi(false);
  };

  const handleOtroTextoChange = (text) => {
    setOtroTexto(text);
  };

  const handleOtroIndicacionChange = (text) => {
    setOtroIndicacion(text);
  };
  const handleOption3Select = (option) => {
    setSelectedOption3(option);
    if (option === 'Sí') {
      setMunicipio('');
      setNombreDepartamento('');
    }
  }

  const handleMunicipioChange = (text) => {
    setMunicipio(text);
  }

  const handleNombreDepartamentoChange = (text) => {
    setNombreDepartamento(text);
  }

  const goToPreguntaSeis = () => {
    navigation.navigate("Pregunta 2.5");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>SALUD PÚBLICA</Text>
      <View style={styles.preguntaContainer}>
        <Text style={styles.pregunta}>PREGUNTA 6.1 (Selección Múltiple – Máximo 2 opciones)</Text>
        <View style={styles.recuadro}>
          <Text style={styles.recuadroTitulo}>Cuáles de las siguientes intervenciones de Salud Pública asociadas a la Rehabilitación conoce:</Text>
          {opciones.map((opcion, index) => (
            <CheckBox
              key={index}
              title={opcion}
              checked={selectedOptions.includes(index)}
              onPress={() => handleCheckboxChange(index)}
            />
          ))}
          {opcionOtro && (
            <TextInput
              style={styles.input}
              value={otroTexto}
              onChangeText={handleOtroTextoChange}
              placeholder="Especifique otro"
            />
          )}
        </View>
      </View>

      <View style={styles.preguntaContainer}>
        <Text style={styles.pregunta}>PREGUNTA 6.2</Text>
        <View style={styles.recuadro}>
          <Text style={styles.recuadroTitulo}>¿Ha participado en alguna de las anteriores intervenciones en Salud Pública asociadas a la Rehabilitación en el último año?</Text>
          <CheckBox
            title="Si"
            checked={seleccionoSi}
            onPress={handleSiCheckboxChange}
          />
          <CheckBox
            title="No"
            checked={!seleccionoSi}
            onPress={handleNoCheckboxChange}
          />
          {seleccionoSi && (
            <TextInput
              style={styles.input}
              value={otroIndicacion}
              onChangeText={handleOtroIndicacionChange}
              placeholder="Indique cuál o cuáles:"
            />
          )}
        </View>
      </View>

      <View style={styles.preguntaContainer}>
        <Text style={styles.pregunta}>PREGUNTA 6.3</Text>
        <View style={styles.recuadro}>
          <Text style={styles.recuadroTitulo}>Conoce sobre un lugar de suministro de productos de apoyo en el municipio o en el departamento que beneficie a la población con elementos como: sillas de ruedas, bastones de orientación visual, muletas, caminadores, bastones, etc.</Text>
          <View style={styles.optionContainer}>
          <CheckBox
            title="Sí"
            checked={selectedOption3 === 'Sí'}
            onPress={() => handleOption3Select('Sí')}
          />
          <CheckBox
            title="No"
            checked={selectedOption3 === 'No'}
            onPress={() => handleOption3Select('No')}
          />
               


          </View>
          {selectedOption3 === 'Sí' && (
        <View style={styles.preguntaContainer}>
          <Text style={styles.preguntaText}>Indique cual:</Text>
          <TextInput
            style={styles.input}
            value={municipio}
            onChangeText={handleMunicipioChange}
            placeholder=""
          />
          <Text style={styles.preguntaText}>Dónde se ubica:</Text>
          <TextInput
            style={styles.input}
            value={nombreDepartamento}
            onChangeText={handleNombreDepartamentoChange}
            placeholder=""
          />
        </View>
      )}
        
        </View>
      </View>

      <Button onPress={goToPreguntaSeis} title="Siguiente" />
    </ScrollView>
  );
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
    color: '#333',
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
  },
});
