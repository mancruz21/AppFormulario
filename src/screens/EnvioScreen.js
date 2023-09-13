import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function
  EnvioScreen(props) {
  const { navigation } = props;

  const limpiar = async () => {
    try {
      console.log("Borrado datos de AsyncStorage");
      await AsyncStorage.removeItem("selectedOption");
      await AsyncStorage.removeItem("identificacionData");
      await AsyncStorage.removeItem("formData");

      await AsyncStorage.removeItem("opcion1");
      await AsyncStorage.removeItem("opcion2");
      await AsyncStorage.removeItem("opcion3");
      await AsyncStorage.removeItem("discapacidad");
      await AsyncStorage.removeItem("OptionSelection");
      await AsyncStorage.removeItem("etnia");
      await AsyncStorage.removeItem("indigena");
      await AsyncStorage.removeItem("educativo");
      await AsyncStorage.removeItem("educacionSuperior");
      await AsyncStorage.removeItem("ocupacion");
      await AsyncStorage.removeItem("trabajo");
      await AsyncStorage.removeItem("salario");
      await AsyncStorage.removeItem("promedio");
      await AsyncStorage.removeItem("selectedOption");
      await AsyncStorage.removeItem("aseguradora");
      await AsyncStorage.removeItem("otraAseguradora");
      await AsyncStorage.removeItem("selectedOption2");
      await AsyncStorage.removeItem("municipio");
      await AsyncStorage.removeItem("selectedOption3");
      await AsyncStorage.removeItem("municipio1");
      await AsyncStorage.removeItem("nombreDepartamento");

      await AsyncStorage.removeItem("datosGuardados");

      await AsyncStorage.removeItem("datosGuardados5");
      await AsyncStorage.removeItem("componente6");

      console.log("Navegar a siguiente ventana");
      
    } catch (error) {
      console.error("Error al borrar datos de AsyncStorage:", error);
    }

  };
  const goToFormulario = async () => {
    limpiar();
    navigation.navigate("Pregunta 2.5", { formCounter: formCounter });

  };
  const goToSalida = () => {
    limpiar();
    navigation.navigate("Login");
  };
  const route = useRoute();
  const { formCounter } = route.params;
  return (
    <ScrollView>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question}>
              {" "}
              Se han enviado los datos correctamente{" "}
            </Text>
            <Text style={styles.texto}>

              El{formCounter > 1 ? 's' : ''} formulario{formCounter > 1 ? 's' : ''} se ha enviado con numero{formCounter === 1 ? '' : 'n'}  {formCounter}
            </Text>

            <View style={styles.container}>
              <TouchableOpacity onPress={goToFormulario}>
                <Text style={styles.registrateText}>
                  ¿Quieres llenar un nuevo formulario?{" "}
                  <Text style={styles.registrate}> Presione aquí </Text>
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container}>
              <TouchableOpacity onPress={goToSalida}>
                <Text style={styles.registrateText}>
                  Si desea salir del formulario{" "}
                  <Text style={styles.registrate}> Presione aquí </Text>
                </Text>
              </TouchableOpacity>
            </View>


          </View>
          <View style={styles.linea} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  question: {
    color: "#35669a",
    marginBottom: -20,
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
  },
  linea: {
    marginTop: "auto",
    height: 6, // Altura de la línea
    backgroundColor: "#BA0C2F", // Color de la línea (rojo en este caso)
    position: "absolute", // Posición absoluta para que se superponga al contenido
    bottom: 0, // Se coloca en la parte inferior de la tarjeta
    left: 8, // Alinear a la izquierda
    right: 8, // Alinear a la derecha
  },
  registrate: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#1b3f90",


  },
  registrateText: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 30,

  },
  container: {
    marginTop: 0,
  },
  texto: {
    marginTop: 40,

    fontWeight: "bold",
    fontSize: 18,
  }
});
