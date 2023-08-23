import React, { useState} from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default function IdentificacionScreen(props) {
  const { navigation } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const [numeroIdentificacion, setNumeroIdentificacion] = useState("");

  const goToPreguntaUno = () => {
    // Aquí puedes realizar acciones con la opción seleccionada
    console.log("Opción seleccionada:", selectedOption);
    console.log("Número de identificación:", numeroIdentificacion);
    navigation.navigate("Pregunta 1.1");
  };
  //Para que no salga la opcion de escribir el documento de identidad
  const shouldShowNumeroIdentificacion = () => {
    return (
      selectedOption !== "" &&
      selectedOption !== "AdultoSinIdentificacion" &&
      selectedOption !== "AdultoSinIdentificacionAnonimo"
    );
  };

  const toggleOption = (option) => {
    if (selectedOption === option) {
      // Si la opción actual ya está seleccionada, deselecciónala
      setSelectedOption("");
    } else {
      // Si no está seleccionada, selecciónala
      setSelectedOption(option);
    }
  };

  return (
    <ScrollView>
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.container}>
            <Text style={styles.title}>Escoge el tipo de identificación</Text>
            <CheckBox
              title="TI Tarjeta de Identidad (10 a 17 años)"
              checked={selectedOption === "TI"}
              onPress={() => toggleOption("TI")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                selectedOption === "TI"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            
            <CheckBox
              title="CC Cédula de Ciudadanía"
              checked={selectedOption === "CC"}
              onPress={() => toggleOption("CC")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                selectedOption === "CC"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="CE Cédula de Extranjería"
              checked={selectedOption === "CE"}
              onPress={() => toggleOption("CE")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                selectedOption === "CE"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="PA Pasaporte"
              checked={selectedOption === "PA"}
              onPress={() => toggleOption("PA")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                selectedOption === "PA"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="PEP Permiso Especial de Permanencia"
              checked={selectedOption === "PEP"}
              onPress={() => toggleOption("PEP")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                selectedOption === "PEP"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="Adulto sin Identificación (no tiene)"
              checked={selectedOption === "AdultoSinIdentificacion"}
              onPress={() => toggleOption("AdultoSinIdentificacion")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                selectedOption === "AdultoSinIdentificacion"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="Adulto sin Identificación (participa como anónimo)"
              checked={selectedOption === "AdultoSinIdentificacionAnonimo"}
              onPress={() =>
                toggleOption("AdultoSinIdentificacionAnonimo")
              }
              containerStyle={styles.checkBoxContainer}
              textStyle={
                selectedOption === "AdultoSinIdentificacionAnonimo"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            {shouldShowNumeroIdentificacion() && (
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Número de identificación</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ingresa tu número de identificación"
                  keyboardType="numeric"
                  maxLength={10}
                  onChangeText={setNumeroIdentificacion}
                  value={numeroIdentificacion}
                  underlineColorAndroid="transparent" // Para Android
                  selectionColor="#efefef" // Color de la línea cuando se selecciona el campo
                />
              </View>
            )}

            {/* Boton */}
            <TouchableOpacity style={styles.boton} onPress={goToPreguntaUno}>
              <Text style={styles.textoBoton}> Siguiente </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  /*Estilo Titulo*/
  title: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  /*Estilo checkbox*/
  checkBoxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    margin: 0,
    marginBottom: 10,
  },
  checkBoxText: {
    fontSize: 16,
  },

  /* Estilo inputs */
  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderBottomWidth: 1, // Añadimos el borde inferior
    borderBottomColor: "#000000", // Color del borde inferior
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor:"white"
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

  /* Estilo Formulario*/

  contenedorPadre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  tarjeta: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    width: "95%",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    padding: 30,
  },

  // Estilo para el texto de las opciones seleccionadas
  selectedOptionText: {
    color: "#BA0C2F", // Color de texto para la opción seleccionada
    fontWeight: "bold", // Puedes ajustar el peso del texto si lo deseas
    fontSize: 16,
  },
});
