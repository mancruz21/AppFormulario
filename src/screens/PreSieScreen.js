import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default function PreSieScreen(props) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const { navigation } = props;
  const goToEnvio = () => {
    navigation.navigate("Pregunta 2.6");
  };

  return (
    <ScrollView >
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>
              CONSENTIMIENTO INFORMADO
            </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>

            <View style={styles.preguntaContainer}>
              <Text style={styles.Text}>
                El propósito del proyecto es conocer las necesidades de atención en rehabilitación del municipio. El análisis de la información nos ayudará a identificar las necesidades para la puesta en marcha de servicios comunitarios de rehabilitación. Si decide participar, se le realizará un cuestionario sobre su conocimiento y experiencia frente al uso de servicios de rehabilitación. Tenga en cuenta que los datos e información que suministre se utilizaran con fines únicamente del proyecto conforme a la ley 1581 del 2012 de manejo de datos personales.
                Cualquier pregunta que tenga relación con el estudio o su participación, antes o después de su consentimiento, será contestada por el encuestador, supervisor u otro miembro del equipo. Recuerde que su participación es voluntaria y puede elegir participar o no.
                Participando en este estudio se autoriza que sus datos personales sean tratados por la Asociación Colombiana de Fisioterapia para la verificación de la información a través de la base de datos de aseguramiento del país.

              </Text>
              <Text style={styles.Text}>
                ¿Desea participar en el estudio de Caracterización de Necesidades de Rehabilitación?
              </Text>


              <View style={styles.optionContainer}>
                <CheckBox
                  title="Sí"
                  checked={selectedOption === "Sí"}
                  onPress={() => handleOptionSelect("Sí")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption === "Sí"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="No"
                  checked={selectedOption === "No"}
                  onPress={() => handleOptionSelect("No")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption === "No"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
              </View>
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
  Text: {
    textAlign: 'justify',
    marginTop: 20,
    fontWeight: "bold",
  },
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

  linea: {
    marginTop: "auto",
    height: 6,              // Altura de la línea
    backgroundColor: "#BA0C2F",  // Color de la línea (rojo en este caso)
    position: 'absolute',   // Posición absoluta para que se superponga al contenido
    bottom: 0,              // Se coloca en la parte inferior de la tarjeta
    left: 8,                // Alinear a la izquierda
    right: 8,               // Alinear a la derecha
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


  pregunta: {
    fontSize: 16,
    marginBottom: 8,
  },




  opcionesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  // Estilo para el texto de las opciones seleccionadas
  selectedOptionText: {
    color: "#BA0C2F", // Color de texto para la opción seleccionada
    fontWeight: "bold", // Puedes ajustar el peso del texto si lo deseas
    fontSize: 16,
  },


  checkBoxText: {
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
