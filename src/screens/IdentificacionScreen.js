import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {  CheckBox } from "react-native-elements";
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
  //Para que no salga la opcion de escribir el documuento de identidad
  const shouldShowNumeroIdentificacion = () => {
    return (
      selectedOption !== '' &&
      selectedOption !== 'AdultoSinIdentificacion' &&
      selectedOption !== 'AdultoSinIdentificacionAnonimo'
    );
  };

  return (
    <ScrollView>
    <View style={styles.contenedorPadre} >
      <View style={styles.tarjeta} >
        <View style={styles.container}>
          <Text style={styles.title}>Escoge el tipo de identificación</Text>
          <CheckBox
            title="TI Tarjeta de Identidad (10 a 17 años)"
            checked={selectedOption === "TI"}
            onPress={() => setSelectedOption("TI")}
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkBoxText}
          />
          <CheckBox
            title="CC Cédula de Ciudadanía"
            checked={selectedOption === "CC"}
            onPress={() => setSelectedOption("CC")}
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkBoxText}
          />
          <CheckBox
            title="CE Cédula de Extranjería"
            checked={selectedOption === "CE"}
            onPress={() => setSelectedOption("CE")}
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkBoxText}
          />
          <CheckBox
            title="PA Pasaporte"
            checked={selectedOption === "PA"}
            onPress={() => setSelectedOption("PA")}
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkBoxText}
          />
          <CheckBox
            title="PEP Permiso Especial de Permanencia"
            checked={selectedOption === "PEP"}
            onPress={() => setSelectedOption("PEP")}
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkBoxText}
          />
          <CheckBox
            title="Adulto sin Identificación (no tiene)"
            checked={selectedOption === "AdultoSinIdentificacion"}
            onPress={() => setSelectedOption("AdultoSinIdentificacion")}
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkBoxText}
          />
          <CheckBox
            title="Adulto sin Identificación (participa como anónimo)"
            checked={selectedOption === "AdultoSinIdentificacionAnonimo"}
            onPress={() => setSelectedOption("AdultoSinIdentificacionAnonimo")}
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkBoxText}
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
  container: {
    display: "flex",
    flex: 1,
    padding: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign:"center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
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
  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  /* Estilos Boton */
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
});