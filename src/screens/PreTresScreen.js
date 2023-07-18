import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Button, CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default function PreTresScreen(props) {
  const { navigation } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const [aseguradora, setAseguradora] = useState('');
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [municipio, setMunicipio] = useState('');
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [nombreDepartamento, setNombreDepartamento] = useState('');
  


  const goToPreguntaCua = () => {
    navigation.navigate('Pregunta 2.2')
    // Verificar si se ha seleccionado una opción antes de continuar
    if (selectedOption !== null && selectedOption2 !== null && selectedOption3 !== null) {
      
    } else {
      // Aquí puedes mostrar una notificación o mensaje de error indicando al usuario que debe seleccionar una opción antes de continuar
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  }
  const handleAseguradoraChange = (text) => {
    setAseguradora(text);
  }
  const handleOption2Select = (option) => {
    setSelectedOption2(option);
    setMunicipio(''); // Reiniciar el valor del municipio al cambiar la opción seleccionada
  }
  const handleOption3Select = (option) => {
    setSelectedOption3(option);
    if (option === 'No') {
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


  return (
    <ScrollView>
      <Text style={styles.titulo}>           ASEGURAMIENTO EN LA SALUD</Text>

      <View style={styles.preguntaContainer}>
      <Text style={styles.pregunta}>PREGUNTA 3.1 (Selección Única)</Text>
      <View style={styles.recuadro}>
          <Text style={styles.recuadroTitulo}>Indique cuál es su Régimen de Afiliación en Salud:</Text>
          <View style={styles.optionContainer}>
          <CheckBox
            title="Contributivo"
            checked={selectedOption === 'Contributivo'}
            onPress={() => handleOptionSelect('Contributivo')}
          />
          <CheckBox
            title="Subsidiado"
            checked={selectedOption === 'Subsidiado'}
            onPress={() => handleOptionSelect('Subsidiado')}
          />
          <CheckBox
            title="Especial o Excepción (Fuerzas Armadas – Policía Ecopetrol, Senado, Magisterio Educadores)"
            checked={selectedOption === 'Especial o Excepción'}
            onPress={() => handleOptionSelect('Especial o Excepción')}
          />
          <CheckBox
            title="No afiliado"
            checked={selectedOption === 'No afiliado'}
            onPress={() => handleOptionSelect('No afiliado')}
          />
        </View>

      </View>

      </View>

      <View style={styles.preguntaContainer}>
        <Text style={styles.pregunta}>PREGUNTA 3.2</Text>
          <View style={styles.recuadro}>
           
           <View style={styles.preguntaContainer}>
        <Text style={styles.preguntaText}>Indique cuál es el nombre de la Aseguradora en Salud / EAPB a la que se encuentra afiliado en la actualidad:</Text>
        <TextInput
          style={styles.input}
          value={aseguradora}
          onChangeText={handleAseguradoraChange}
          placeholder="Ingrese el nombre de la aseguradora"
        />
      </View>

      </View>


      </View>

      <View style={styles.preguntaContainer}>
        <Text style={styles.pregunta}>PREGUNTA 3.3 – Sobre el acceso que garantiza la aseguradora (EAPB) a los usuarios en el área de influencia (Selección Única)</Text>
          <View style={styles.recuadro}>
            <Text style={styles.recuadroTitulo}>Según la asignación realizada por su aseguradora (EAPB), indique cuál es el lugar al que asiste con mayor frecuencia para su atención general en salud</Text>
           
           <View style={styles.preguntaContainer}>

           <CheckBox
            title="Centro de Salud y/o Hospital del Municipio"
            checked={selectedOption2 === 'Centro de Salud y/o Hospital del Municipio'}
            onPress={() => handleOption2Select('Centro de Salud y/o Hospital del Municipio')}
          />
          <CheckBox
            title="Centro de Salud y/o Hospital en otro Municipio"
            checked={selectedOption2 === 'Centro de Salud y/o Hospital en otro Municipio'}
            onPress={() => handleOption2Select('Centro de Salud y/o Hospital en otro Municipio')}
          />
          <CheckBox
            title="Consultorio Particular u otro servicio dentro del Municipio"
            checked={selectedOption2 === 'Consultorio Particular u otro servicio dentro del Municipio'}
            onPress={() => handleOption2Select('Consultorio Particular u otro servicio dentro del Municipio')}
          />
          <CheckBox
            title="Consultorio Particular u otro servicio fuera del Municipio"
            checked={selectedOption2 === 'Consultorio Particular u otro servicio fuera del Municipio'}
            onPress={() => handleOption2Select('Consultorio Particular u otro servicio fuera del Municipio')}
          />
          <CheckBox
            title="Medicina Tradicional (Quilombo, Maloka, Sobandero, Taita … etc.)"
            checked={selectedOption2 === 'Medicina Tradicional (Quilombo, Maloka, Sobandero, Taita … etc.)'}
            onPress={() => handleOption2Select('Medicina Tradicional (Quilombo, Maloka, Sobandero, Taita … etc.)')}
          />

      </View>

      {(selectedOption2 === 'Centro de Salud y/o Hospital en otro Municipio' ||
        selectedOption2 === 'Consultorio Particular u otro servicio fuera del Municipio') && (
        <View style={styles.preguntaContainer}>
          <Text style={styles.preguntaText}>Ingrese el nombre del municipio:</Text>
          <TextInput
            style={styles.input}
            value={municipio}
            onChangeText={handleMunicipioChange}
            placeholder="Nombre del municipio"
          />
        </View>
      )}
   </View>
</View>

<View style={styles.preguntaContainer}>
<Text style={styles.pregunta}>PREGUNTA 3.4 (Selección Única)</Text>
          <View style={styles.recuadro}>
              <Text style={styles.recuadroTitulo}>¿El lugar donde su aseguradora (EAPB) realiza la autorización para la atención especializada en salud (hospitalización, cirugía, exámenes diagnósticos, terapias, médicos especialistas, etc.) se encuentra dentro del municipio?</Text>
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

              {selectedOption3 === 'No' && (
        <View style={styles.preguntaContainer}>
          <Text style={styles.preguntaText}>Ingrese el nombre del municipio:</Text>
          <TextInput
            style={styles.input}
            value={municipio}
            onChangeText={handleMunicipioChange}
            placeholder="Nombre del municipio"
          />
          <Text style={styles.preguntaText}>Ingrese el nombre del departamento:</Text>
          <TextInput
            style={styles.input}
            value={nombreDepartamento}
            onChangeText={handleNombreDepartamentoChange}
            placeholder="Nombre del departamento"
          />
        </View>
      )}
     </View>
    </View>
    {/* Boton */}
    <TouchableOpacity style={styles.boton} onPress={goToPreguntaCua}>
              <Text style={styles.textoBoton}> Siguiente </Text>
            </TouchableOpacity>

    

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
  },

  boton: {
    backgroundColor: "#02B3C6",
    borderColor: "#007bff ",
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    /* Estilo cuando se pasa el cursor por encima */
    ":hover": {
      opacity: 1,
    },
  },

  /* Estilo Boton y texto*/
  textoBoton: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 16,
  },
})
