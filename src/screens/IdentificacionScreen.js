import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import appFirebase from "../components/firebase-config";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";


const db = getFirestore(appFirebase)

export default function IdentificacionScreen(props) {
  const { navigation } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const [numeroIdentificacion, setNumeroIdentificacion] = useState("");
  const [puedeAvanzar, setPuedeAvanzar] = useState(false);
  const [departamento, setDepartamento] = useState("departamento");

  const goToPreguntaUno = () => {
    // Aquí puedes realizar acciones con la opción seleccionada
    if (
      selectedOption !== "" &&
      (!shouldShowNumeroIdentificacion() || numeroIdentificacion.trim() !== "")
    ) {
      console.log("Opción seleccionada:", selectedOption);
      console.log("Número de identificación:", numeroIdentificacion);
      console.log("Departamento:", departamento);
      navigation.navigate("Pregunta 1.1");
    } else {
      // Mostrar una alerta al usuario
      Alert.alert("Error", "Por favor completa todos los campos.");
    }
  };
  // departamento donde se hace la encuesta

  const departamentoHandle = (itemValue, itemIndex) => {
    setDepartamento(itemValue);
  };
  useEffect(() => {
    // Recuperar los datos guardados de AsyncStorage cuando la pantalla se carga
    const restoreData = async () => {
      try {
        const savedData = await AsyncStorage.getItem("identificacionData");
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setSelectedOption(parsedData.selectedOption);
          setNumeroIdentificacion(parsedData.numeroIdentificacion);
          setDepartamento(parsedData.departamento);
        }
      } catch (error) {
        console.error("Error al restaurar los datos:", error);
      }
    };

    restoreData();
  }, []);

  useEffect(() => {
    // Guardar los datos seleccionados en AsyncStorage cuando cambian
    const saveData = async () => {
      try {
        const dataToSave = JSON.stringify({
          selectedOption,
          numeroIdentificacion,
          departamento,
        });
        await AsyncStorage.setItem("identificacionData", dataToSave);
      } catch (error) {
        console.error("Error al guardar los datos:", error);
      }
    };

    saveData();
  }, [selectedOption, numeroIdentificacion, departamento]);

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
  //Metodo para guardar en firestore
  const SaveIdent = async () => {
    /* try {
      const docRef = await addDoc(collection(db, 'identificacion'), {
        tipoIdentificacion: selectedOption,
        numeroIdentificacion: numeroIdentificacion,
        departamento: departamento,
      });

      console.log("Documento guardado con ID:", docRef.id);


    } catch (error) {
      console.error(error);
    } */
  }
  useEffect(() => {
    if (selectedOption !== '' && (selectedOption === 'AdultoSinIdentificacion' || selectedOption === 'AdultoSinIdentificacionAnonimo' || numeroIdentificacion !== '')) {
      setPuedeAvanzar(true);
    } else {
      setPuedeAvanzar(false);
    }
  }, [selectedOption, numeroIdentificacion])

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
            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                Indique en que departamento esta realizando la encuesta
              </Text>

              <Picker
                selectedValue={departamento}
                style={{ height: 70, width: 300 }}
                onValueChange={departamentoHandle}
              >
                <Picker.Item label="Antioquia" value="Antioquia" />
                <Picker.Item label="Bolívar" value="Bolívar" />
                <Picker.Item label="Cauca" value="Cauca" />
                <Picker.Item label="Meta" value="Meta" />
                <Picker.Item label="Putumayo" value="Putumayo" />
                <Picker.Item label="Sucre" value="Sucre" />
                <Picker.Item label="Valle del Cauca" value="Valle del Cauca" />

              </Picker>


            </View>





            {/* Boton */}
            <TouchableOpacity style={styles.boton} onPress={() => {
              if (puedeAvanzar) {
                goToPreguntaUno();
                SaveIdent();
              }
            }}
              disabled={!puedeAvanzar}
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
    backgroundColor: "white"
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
  pregunta: {
    marginBottom: 5,
    marginTop: 20,
    textAlign: "justify",
    marginTop: -15,
    fontWeight: "bold",
    fontSize: 16,
  },
  preguntaContainer: {
    marginTop: 23,
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
