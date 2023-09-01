import { View, Text, StyleSheet, TextInput, TouchableOpacity,Alert } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import appFirebase from "../components/firebase-config";
import {addDoc, collection, getFirestore} from 'firebase/firestore';
const db = getFirestore(appFirebase)

export default function PreSeisScreen(props) {
  const { navigation } = props;
  const [opcionOtro, setOpcionOtro] = useState(false);
  const [otroTexto, setOtroTexto] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [seleccionoSi, setSeleccionoSi] = useState(false);
  const [otroIndicacion, setOtroIndicacion] = useState("");
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [nombreDepartamento, setNombreDepartamento] = useState("");
  const [municipio, setMunicipio] = useState("");

  const opciones = [
    "Educación para la salud (cuidado de niños, mujeres y adulto mayor)",
    "Estrategia comunitaria RBC - Rehabilitación Basada en Comunidad (ayudas técnicas, deporte para Personas con Discapacidad)",
    "Salud Mental (consumo Sustancias Psicoactivas, proyecto vida para jóvenes, prevención de conducta suicida, identificación riesgo violencias sexuales)",
    "Otro",
    "Ninguna",
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
    if (option === "Sí") {
      setMunicipio("");
      setNombreDepartamento("");
    }
  };

  const handleMunicipioChange = (text) => {
    setMunicipio(text);
  };

  const handleNombreDepartamentoChange = (text) => {
    setNombreDepartamento(text);
  };

  const goToPreguntaSeis = () => {
    if (
      (selectedOptions.length > 0 &&
        (!selectedOptions.includes(3) || otroTexto !== "")) && // Validación de opciones y campo de texto
  
      ((seleccionoSi && otroIndicacion !== "") || !seleccionoSi) && // Validación de checkboxes y campo de texto
  
      ((selectedOption3 === "Sí" && municipio !== "" && nombreDepartamento !== "") ||
        selectedOption3 === "No") // Validación de la selección única y campos de texto
    ) {
      navigation.navigate("Pregunta 2.6");
    } else {
      Alert.alert("Error", "Por favor completa todos los campos.");
    }
  };
  const SaveComponente6 = async () => {
    try {
      await addDoc(collection(db, 'componenteseis'), {
        pregunta6_1: selectedOptions.map(index => opciones[index]),
        otroTexto6_1: opcionOtro ? otroTexto : "",
        pregunta6_2: seleccionoSi ? "Si" : "No",
        otroIndicacion6_2: seleccionoSi ? otroIndicacion : "",
        pregunta6_3: selectedOption3,
        municipio_pregunta6_3: selectedOption3 === "Sí" ? municipio : "",
        departamento_pregunta6_3: selectedOption3 === "Sí" ? nombreDepartamento : "",
      });
  
      
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un error al guardar sus respuestas');
    }
  };

  return (
    <ScrollView >

      {/* Pregunta 6.1 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>SALUD PÚBLICA</Text>
            <Text style={styles.question}> PREGUNTA 6.1 ( SELECCIÓN MÚLTIPLE - MÁXIMO 2 OPCIONES) </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <View style={styles.preguntaContainer}>


              <Text style={styles.pregunta}>
                Cuáles de las siguientes intervenciones de Salud Pública
                asociadas a la Rehabilitación conoce:
              </Text>
              {opciones.map((opcion, index) => (
                <CheckBox
                  key={index}
                  title={opcion}
                  checked={selectedOptions.includes(index)}
                  onPress={() => handleCheckboxChange(index)}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions.includes(index)

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
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
        </View>
      </View>

      {/* Pregunta 6.2 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question1}> PREGUNTA 6.2 ( SELECCIÓN ÚNICA ) </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>


      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                ¿Ha participado en alguna de las anteriores intervenciones en
                Salud Pública asociadas a la Rehabilitación en el último año?
              </Text>
              <CheckBox
                title="Si"
                checked={seleccionoSi}
                onPress={handleSiCheckboxChange}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  seleccionoSi
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="No"
                checked={!seleccionoSi}
                onPress={handleNoCheckboxChange}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  !seleccionoSi
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              {seleccionoSi && (
                <View>
                  <Text style={styles.advertencia}>Escriba lo números de la respuesta 6.1 </Text>
                  <Text style={styles.preguntas}>Indique Cúal</Text>
                  <TextInput
                

                style={styles.input}
                value={otroIndicacion}
                onChangeText={handleOtroIndicacionChange}
                placeholder="Indique cuál o cuáles:"
              />

                </View>
                
              )}

            </View>

          </View>
        </View>
      </View>

      {/* Pregunta 6.3 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question1}> PREGUNTA 6.3 ( SELECCIÓN ÚNICA ) </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <View style={styles.preguntaContainer}>

              <Text style={styles.pregunta}>
                Conoce sobre un lugar de suministro de productos de apoyo en
                el municipio o en el departamento que beneficie a la población
                con elementos como: sillas de ruedas, bastones de orientación
                visual, muletas, caminadores, bastones, etc.
              </Text>
              <View style={styles.optionContainer}>
                <CheckBox
                  title="Sí"
                  checked={selectedOption3 === "Sí"}
                  onPress={() => handleOption3Select("Sí")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption3 === "Sí"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="No"
                  checked={selectedOption3 === "No"}
                  onPress={() => handleOption3Select("No")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption3 === "No"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
              </View>
              {selectedOption3 === "Sí" && (
                <View style={styles.preguntaContainer}>
                  <Text style={styles.preguntas}>Indique cual:</Text>
                  <TextInput
                    style={styles.input}
                    value={municipio}
                    onChangeText={handleMunicipioChange}
                    placeholder=""

                  />
                  <Text style={styles.preguntas}>Dónde se ubica:</Text>
                  <TextInput
                    style={styles.input}
                    value={nombreDepartamento}
                    onChangeText={handleNombreDepartamentoChange}
                    placeholder=""
                  />
                </View>
              )}

            </View>
            {/* Boton */}
            <TouchableOpacity style={styles.boton} onPress={() => {
             goToPreguntaSeis();
             SaveComponente6();
             }}
             >
          <Text style={styles.textoBoton}>Siguiente</Text>
        </TouchableOpacity>


          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  preguntaText: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  container: {
    flexGrow: 1,
    padding: 16,
    alignItems: "center",
  },
  pregunta: {
    marginBottom: 5,
    textAlign: 'justify',
    marginTop: -15,
    fontWeight: "bold",
    fontSize: 16,

  },
  preguntas: {
    color: "#000000",
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  question: {
    color: "#35669a",
    marginBottom: -20,
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
  },
  question1: {
    color: "#35669a",
    marginBottom: -80,
    marginTop: -22,
    fontWeight: "bold",
    fontSize: 18,
  },
  question2: {
    color: "#35669a",
    marginBottom: 20,
    marginTop: 2,
    fontWeight: "bold",
    fontSize: 18,
  },
  linea: {
    marginTop: "auto",
    height: 6,              // Altura de la línea
    backgroundColor: "#BA0C2F",  // Color de la línea (rojo en este caso)
    position: 'absolute',   // Posición absoluta para que se superponga al contenido
    bottom: 0,              // Se coloca en la parte inferior de la tarjeta
    left: 8,                // Alinear a la izquierda
    right: 8,               // Alinear a la derecha
  },
  linea1: {
    marginTop: 8,
    height: 6,              // Altura de la línea
    backgroundColor: "#BA0C2F",  // Color de la línea (rojo en este caso)
    position: 'relative',   // Posición absoluta para que se superponga al contenido
    bottom: 20,              // Se coloca en la parte inferior de la tarjeta
    left: 0,                // Alinear a la izquierda
    right: 0,               // Alinear a la derecha
  },

  input: {
    backgroundColor: "white",
    height: 40,
    borderBottomWidth: 1, // Añadimos el borde inferior
    borderBottomColor: "#35669a", // Color del borde inferior
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 10,
  },

  /* Estilos Boton y texto */
  boton: {
    backgroundColor: "#1b3f90",
    borderColor: "#D2D4DF",
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 15,

  },
  textoBoton: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },


  titulo: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: -20,
  },
  /* Estilo Contenedor */
  contenedorPadre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  /* Estilo Contenedor */

  tarjeta: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  contenedor: {
    padding: 20,
  },

  checkBoxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    margin: 5,
    marginBottom: 10,
  },
  // Estilo para el texto de las opciones seleccionadas
  // Estilo para el texto de las opciones seleccionadas
  selectedOptionText: {
    color: "#BA0C2F", // Color de texto para la opción seleccionada
    fontWeight: "bold", // Puedes ajustar el peso del texto si lo deseas
    fontSize: 16,
  },


  checkBoxText: {
    fontSize: 16,
  },

  advertencia: {
    marginBottom:5,
    textAlign: 'justify',
    marginTop: 5,
    fontWeight: "bold",
    color: "#BA0C2F",
    fontSize: 16,

  },
});
