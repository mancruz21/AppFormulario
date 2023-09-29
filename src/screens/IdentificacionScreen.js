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
  const [tipoId, setTipoId] = useState("");
  const [numeroIdentificacion, setNumeroIdentificacion] = useState("");
  const [puedeAvanzar, setPuedeAvanzar] = useState(false);
  const [departamentoID, setDepartamentoID] = useState("");
  const [numeroIdentificacionValue, setNumeroIdentificacionValue] = useState("");


  // departamento donde se hace la encuesta

  const departamentoHandle = (itemValue, itemIndex) => {
    setDepartamentoID(itemValue);
  };
  useEffect(() => {
    // Recuperar los datos guardados de AsyncStorage cuando la pantalla se carga
    const restoreData = async () => {
      try {
        const savedData = await AsyncStorage.getItem("identificacionData");
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setTipoId(parsedData.tipoId);
          setNumeroIdentificacion(parsedData.numeroIdentificacion);
          setDepartamentoID(parsedData.departamentoID);
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
          tipoId,
          numeroIdentificacion,
          departamentoID,
        });
        await AsyncStorage.setItem("identificacionData", dataToSave);
      } catch (error) {
        console.error("Error al guardar los datos:", error);
      }
    };

    saveData();
  }, [tipoId, numeroIdentificacion, departamentoID]);

  //Para que no salga la opcion de escribir el documento de identidad
  const shouldShowNumeroIdentificacion = () => {
    return (
      tipoId !== "" &&
      tipoId !== "AdultoSinIdentificacion" &&
      tipoId !== "AdultoSinIdentificacionAnonimo"
    );
  };
  const toggleOption = (option) => {
    // Siempre establece el tipo de identificación
    setTipoId(option);
  
    // Generar un número aleatorio único cuando se selecciona la opción
    if (option === "AdultoSinIdentificacion" || option === "AdultoSinIdentificacionAnonimo") {
      const randomNumber = Math.floor(Math.random() * 1000000); // Generar un número aleatorio único
      setNumeroIdentificacionValue(randomNumber.toString());
    } else {
      // Si se selecciona otra opción, asegúrate de que numeroIdentificacionValue esté vacío
      setNumeroIdentificacionValue("");
    }
  };
  

  
  //Metodo para guardar en firestore
  const SaveIdent = async () => {
    try {
      const docRef = await addDoc(collection(db, 'identificacion'), {
        tipoIdentificacion: tipoId,
        numeroIdentificacion: numeroIdentificacionValue,
        departamento: departamentoID,
      });

      console.log("Documento guardado con ID:", docRef.id);


    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    if (tipoId !== '' && (tipoId === 'AdultoSinIdentificacion' || tipoId === 'AdultoSinIdentificacionAnonimo' || numeroIdentificacion !== '')) {
      setPuedeAvanzar(true);
    } else {
      setPuedeAvanzar(false);
    }
  }, [tipoId, numeroIdentificacionValue])

  const goToPreguntaUno = () => {
    // Aquí puedes realizar acciones con la opción seleccionada
    if (
      tipoId !== "" &&
      (!shouldShowNumeroIdentificacion() || numeroIdentificacionValue.trim() !== "")
    ) {
      console.log("Opción seleccionada:", tipoId);
      console.log("Número de identificación:", numeroIdentificacionValue);
      console.log("Departamento:", departamentoID);
      navigation.navigate("Pregunta 1.1", {
        tipoId: tipoId,
        numeroIdentificacion: numeroIdentificacionValue,
        departamentoID: departamentoID
      });
    } else {
      // Mostrar una alerta al usuario
      Alert.alert("Error", "Por favor completa todos los campos.");
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
              checked={tipoId === "TI"}
              onPress={() => toggleOption("TI")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                tipoId === "TI"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />

            <CheckBox
              title="CC Cédula de Ciudadanía"
              checked={tipoId === "CC"}
              onPress={() => toggleOption("CC")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                tipoId === "CC"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="CE Cédula de Extranjería"
              checked={tipoId === "CE"}
              onPress={() => toggleOption("CE")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                tipoId === "CE"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="PA Pasaporte"
              checked={tipoId === "PA"}
              onPress={() => toggleOption("PA")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                tipoId === "PA"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="PEP Permiso Especial de Permanencia"
              checked={tipoId === "PEP"}
              onPress={() => toggleOption("PEP")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                tipoId === "PEP"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="Adulto sin Identificación (no tiene)"
              checked={tipoId === "AdultoSinIdentificacion"}
              onPress={() => toggleOption("AdultoSinIdentificacion")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                tipoId === "AdultoSinIdentificacion"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="Adulto sin Identificación (participa como anónimo)"
              checked={tipoId === "AdultoSinIdentificacionAnonimo"}
              onPress={() =>
                toggleOption("AdultoSinIdentificacionAnonimo")
              }
              containerStyle={styles.checkBoxContainer}
              textStyle={
                tipoId === "AdultoSinIdentificacionAnonimo"
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
                  value={numeroIdentificacionValue} // Usa numeroIdentificacionValue en lugar de numeroIdentificacion
                  onChangeText={(text) => {
                    setNumeroIdentificacionValue(text);
                  }}
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
                selectedValue={departamentoID}
                style={{ height: 70, width: 300 }}
                onValueChange={departamentoHandle}
              >
                <Picker.Item label="Antioquia" value="Antioquia" />
                <Picker.Item label="Bolívar" value="Bolívar" />
                <Picker.Item label="Cauca" value="Cauca" />
                <Picker.Item label="Meta" value="Meta" />
                <Picker.Item label="Putumayo" value="Putumayo" />

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
