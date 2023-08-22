import { View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

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
    navigation.navigate("Pregunta 2.5");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>SALUD PÚBLICA</Text>
            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                PREGUNTA 6.1 (Selección Múltiple - Máximo 2 opciones)
              </Text>
             
                <Text style={styles.recuadroTitulo}>
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
                  selectedOptions ===""
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
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

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>PREGUNTA 6.2</Text>
              
                <Text style={styles.recuadroTitulo}>
                  ¿Ha participado en alguna de las anteriores intervenciones en
                  Salud Pública asociadas a la Rehabilitación en el último año?
                </Text>
                <CheckBox
                  title="Si"
                  checked={seleccionoSi}
                  onPress={handleSiCheckboxChange}
                  containerStyle={styles.checkBoxContainer}
                textStyle={
                  seleccionoSi === ""
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                />
                <CheckBox
                  title="No"
                  checked={!seleccionoSi}
                  onPress={handleNoCheckboxChange}
                  containerStyle={styles.checkBoxContainer}
                textStyle={
                  seleccionoSi === ""
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
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

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>PREGUNTA 6.3</Text>
              
                <Text style={styles.recuadroTitulo}>
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
                  />
                </View>
                {selectedOption3 === "Sí" && (
                  <View style={styles.preguntaContainer}>
                    <Text style={styles.recuadroTitulo}>Indique cual:</Text>
                    <TextInput
                      style={styles.input}
                      value={municipio}
                      onChangeText={handleMunicipioChange}
                      placeholder=""

                    />
                    <Text style={styles.recuadroTitulo}>Dónde se ubica:</Text>
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
            <TouchableOpacity style={styles.boton} onPress={goToPreguntaSeis}>
              <Text style={styles.textoBoton}> Siguiente </Text>
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
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    alignItems: "center",
  },
  preguntaContainer: {
    marginBottom: 16,
  },
  pregunta: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  
  recuadroTitulo: {
    fontWeight: "bold",
    marginBottom: 10,
    color: "#35669a",
    fontSize: 14,
  },
  opcionesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    borderBottomWidth: 1, // Añadimos el borde inferior
    borderBottomColor: "#D2D4DF", // Color del borde inferior
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 10,
  },

  /* Estilo Boton y texto*/
  boton: {
    backgroundColor: "#35669a",
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

  textoBoton: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 16,
  },
  /* Estilo Contenedor */
  contenedorPadre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  tarjeta: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 20,
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
    padding: 0,
  },

  checkBoxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    margin: 5,
    marginBottom: 10,
  },
  // Estilo para el texto de las opciones seleccionadas
  selectedOptionText: {
    color: "#35669a", // Color de texto para la opción seleccionada
    fontWeight: "bold", // Puedes ajustar el peso del texto si lo deseas
    fontSize: 16,
  },

  checkBoxText: {
    fontSize: 16,
  },
});
