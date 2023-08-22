import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default function PreSieScreen(props) {
  const [selectedOption, setSelectedOption] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [primerNombre, setPrimerNombre] = useState("");
  const [segundoNombre, setSegundoNombre] = useState("");
  const [primerApellido, setPrimerApellido] = useState("");
  const [segundoApellido, setSegundoApellido] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const { navigation } = props;
  const goToEnvio = () => {
    navigation.navigate("Pregunta 2.6");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>
              {" "}
              DATOS DE IDENTIFICACIÓN DE QUIEN REALIZA EL REGISTRO
            </Text>
            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                PREGUNTA 3.1 (Selección Única)
              </Text>
              
                <Text style={styles.recuadroTitulo}>
                  Tipo de Identificación
                </Text>
                <View style={styles.optionContainer}>
                  <CheckBox
                    title="CC Cédula de Ciudadanía"
                    checked={selectedOption === "CC"}
                    onPress={() => handleOptionSelect("CC")}
                    containerStyle={styles.checkBoxContainer}
                textStyle={
                  selectedOption === "CC"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                  />
                  <CheckBox
                    title="CE Cédula de Extranjería"
                    checked={selectedOption === "CE"}
                    onPress={() => handleOptionSelect("CE")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption === "CE"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                </View>

                {selectedOption && (
                  <View>
                    <Text style={styles.recuadroTitulo}>
                      Número de identificación:
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={identificationNumber}
                      onChangeText={setIdentificationNumber}
                      keyboardType="numeric"
                    />
                  </View>
                )}
              
            </View>

            <View style={styles.preguntaContainer}>
              
                <Text style={styles.recuadroTitulo}>Nombres y Apellidos</Text>
                <TextInput
                  style={styles.input}
                  value={primerNombre}
                  onChangeText={(text) => setPrimerNombre(text)}
                  placeholder="Ingrese su primer nombre"
                />
                <TextInput
                  style={styles.input}
                  value={segundoNombre}
                  onChangeText={(text) => setSegundoNombre(text)}
                  placeholder="Ingrese su segundo nombre"
                />

                <TextInput
                  style={styles.input}
                  value={primerApellido}
                  onChangeText={(text) => setPrimerApellido(text)}
                  placeholder="Ingrese su primer apellido"
                />
                <TextInput
                  style={styles.input}
                  value={segundoApellido}
                  onChangeText={(text) => setSegundoApellido(text)}
                  placeholder="Ingrese su segundo apellido"
                />
              
            </View>

            {/* Boton */}
            <TouchableOpacity style={styles.boton} onPress={goToEnvio}>
              <Text style={styles.textoBoton}> Finalizar </Text>
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
    marginBottom: 8,
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
 // Estilo para el texto de las opciones seleccionadas
 selectedOptionText: {
  color: "#35669a", // Color de texto para la opción seleccionada
  fontWeight: "bold", // Puedes ajustar el peso del texto si lo deseas
  fontSize: 16,
},

checkBoxText: {
  fontSize: 16,
},

checkBoxContainer: {
  backgroundColor: "transparent",
  borderWidth: 0,
  padding: 0,
  margin: 5,
  marginBottom: 10,
},

pregunta: {
  fontSize: 16,
  marginBottom: 10,
  fontWeight: "bold",
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
});
