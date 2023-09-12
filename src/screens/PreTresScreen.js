import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import appFirebase from "../components/firebase-config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RealmConfigContext } from "./../../utils/models/context";
const { useRealm } = RealmConfigContext;

const db = getFirestore(appFirebase);

export default function PreTresScreen(props) {
  const realm = useRealm();
  const { navigation } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const [aseguradora, setAseguradora] = useState("option1");
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [municipio, setMunicipio] = useState("");
  const [municipio1, setMunicipio1] = useState("");
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [nombreDepartamento, setNombreDepartamento] = useState("");
  const [otraAseguradora, setOtraAseguradora] = useState("");

  useEffect(() => {
    async function fetchSavedData() {
      try {
        const savedSelectedOption = await AsyncStorage.getItem(
          "selectedOption"
        );
        const savedAseguradora = await AsyncStorage.getItem("aseguradora");
        const savedOtraAseguradora = await AsyncStorage.getItem(
          "otraAseguradora"
        );
        const savedSelectedOption2 = await AsyncStorage.getItem(
          "selectedOption2"
        );
        const savedMunicipio = await AsyncStorage.getItem("municipio");
        const savedSelectedOption3 = await AsyncStorage.getItem(
          "selectedOption3"
        );
        const savedMunicipio1 = await AsyncStorage.getItem("municipio1");
        const savedNombreDepartamento = await AsyncStorage.getItem(
          "nombreDepartamento"
        );

        setSelectedOption(savedSelectedOption || null);
        setAseguradora(savedAseguradora || "option1");
        setOtraAseguradora(savedOtraAseguradora || "");
        setSelectedOption2(savedSelectedOption2 || null);
        setMunicipio(savedMunicipio || "");
        setSelectedOption3(savedSelectedOption3 || null);
        setMunicipio1(savedMunicipio1 || "");
        setNombreDepartamento(savedNombreDepartamento || "");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchSavedData();
  }, []);

  const goToPreguntaCua = async () => {
    try {
      await AsyncStorage.setItem("selectedOption", selectedOption);
      await AsyncStorage.setItem("aseguradora", aseguradora);
      await AsyncStorage.setItem("otraAseguradora", otraAseguradora);
      await AsyncStorage.setItem("selectedOption2", selectedOption2);
      await AsyncStorage.setItem("municipio", municipio);
      await AsyncStorage.setItem("selectedOption3", selectedOption3);
      await AsyncStorage.setItem("municipio1", municipio1);
      await AsyncStorage.setItem("nombreDepartamento", nombreDepartamento);
    } catch (error) {
      console.error("Error saving data:", error);
      Alert.alert("Error", "Hubo un error al guardar los datos.");
      return;
    }

    navigation.navigate("Pregunta 2.2");
  };

  const SaveComponente3 = async () => {
    try {
      await addDoc(collection(db, "componentetres"), {
        pregunta3_1: selectedOption,
        pregunta3_2: aseguradora,
        pregunta3_2_1: otraAseguradora,
        pregunta3_3: selectedOption2,
        municipio_pregunta3_3: municipio,
        pregunta3_4: selectedOption3,
        municipio_pregunta3_4: selectedOption3 === "No" ? municipio : null,
        departamento_pregunta3_4:
          selectedOption3 === "No" ? nombreDepartamento : null,
      });
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Hubo un error al guardar sus respuestas");
    }

    try {
      realm.write(() => {
        const personaToUpdate = realm
          .objects("Persona")
          .filtered("id_document = 1002965852");
        if (personaToUpdate.length > 0) {
          const persona = personaToUpdate[0];
          persona.component3 = {
            pregunta3_1: selectedOption,
            pregunta3_2: aseguradora,
            pregunta3_3: selectedOption2,
            municipio_pregunta3_3: municipio,
            pregunta3_4: selectedOption3 ? selectedOption3 : "Null",
            municipio_pregunta3_4:
              selectedOption3 === "No" ? municipio : "null",
            departamento_pregunta3_4:
              selectedOption3 === "No" ? nombreDepartamento : "null",
            municipio: "string",
            departamento_pregunta3_4: "string",
            nombreDepartamento: "string",
          };
        }
      });
      console.log("Los datos se han guardado correctamente en Realm.");
    } catch (error) {
      console.error("Error al guardar datos en Realm:", error);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const handleAseguradoraChange = (itemValue, itemIndex) => {
    setAseguradora(itemValue);

    // Si el usuario selecciona "OTRA", habilitar el campo de texto
    if (itemValue === "OTRA") {
      setOtraAseguradora(""); // Limpia el valor anterior
    }
  };
  const handleOption2Select = (option) => {
    setSelectedOption2(option);
    setMunicipio(""); // Reiniciar el valor del municipio al cambiar la opción seleccionada
  };
  const handleOption3Select = (option) => {
    setSelectedOption3(option);
    if (option === "No") {
      setMunicipio("");
      setNombreDepartamento("");
    }
  };
  const handleMunicipioChange = (text) => {
    setMunicipio(text);
  };
  const handleMunicipioChange1 = (text) => {
    setMunicipio1(text);
  };
  const handleNombreDepartamentoChange = (text) => {
    setNombreDepartamento(text);
  };

  return (
    <ScrollView>
      {/* Pregunta 3.1 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}> ASEGURAMIENTO EN LA SALUD </Text>

            <Text style={styles.question}>
              {" "}
              PREGUNTA 3.1 ( SELECCIÓN ÚNICA){" "}
            </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>

      {/* Pregunta 3.1 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                Indique cuál es su Régimen de Afiliación en Salud:
              </Text>
              <View style={styles.optionContainer}>
                <CheckBox
                  title="Contributivo"
                  checked={selectedOption === "Contributivo"}
                  onPress={() => handleOptionSelect("Contributivo")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption === "Contributivo"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Subsidiado"
                  checked={selectedOption === "Subsidiado"}
                  onPress={() => handleOptionSelect("Subsidiado")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption === "Subsidiado"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Especial o Excepción (Fuerzas Armadas - Policía Ecopetrol, Senado, Magisterio Educadores)"
                  checked={selectedOption === "Especial o Excepción"}
                  onPress={() => handleOptionSelect("Especial o Excepción")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption === "Especial o Excepción"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="No afiliado"
                  checked={selectedOption === "No afiliado"}
                  onPress={() => handleOptionSelect("No afiliado")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption === "No afiliado"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Pregunta 3.2 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question1}> PREGUNTA 3.2 </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                Indique cuál es el nombre de la Aseguradora en Salud / EAPB a la
                que se encuentra afiliado en la actualidad:
              </Text>
              <Picker
                selectedValue={aseguradora}
                style={{ height: 70, width: 300 }}
                onValueChange={handleAseguradoraChange}
              >
                <Picker.Item label="COOSALUD EPS-S" value="COOSALUD EPS-S" />
                <Picker.Item label="NUEVA EPS" value="NUEVA EPS" />
                <Picker.Item label="MUTUAL SER" value="MUTUAL SER" />
                <Picker.Item label="ALIANSALUD EPS " value="ALIANSALUD EPS " />
                <Picker.Item
                  label="SALUD TOTAL EPS S.A"
                  value="SALUD TOTAL EPS S.A"
                />
                <Picker.Item label="EPS SANITAS" value="EPS SANITAS" />
                <Picker.Item label="EPS SURA" value="EPS SURA" />
                <Picker.Item label="FAMISANAR" value="FAMISANAR" />
                <Picker.Item
                  label="SERVICIO OCCIDENTAL DE SALUD EPS SOS"
                  value="SERVICIO OCCIDENTAL DE SALUD EPS SOS"
                />
                <Picker.Item label="SALUD MIA" value="SALUD MIA" />
                <Picker.Item
                  label="COMFENALCO VALLE"
                  value="COMFENALCO VALLE"
                />
                <Picker.Item label="COMPENSAR EPS" value="COMPENSAR EPS" />
                <Picker.Item
                  label="EPM - EMPRESAS PUBLICAS DE MEDELLIN"
                  value="EPM - EMPRESAS PUBLICAS DE MEDELLIN"
                />
                <Picker.Item
                  label="FONDO DE PASIVO SOCIAL DE FERROCARRILES
NACIONALES DE COLOMBIA"
                  value="FONDO DE PASIVO SOCIAL DE FERROCARRILES
NACIONALES DE COLOMBIA"
                />
                <Picker.Item
                  label="CAJACOPI ATLANTICO"
                  value="CAJACOPI ATLANTICO "
                />
                <Picker.Item label="CAPRESOCA" value="CAPRESOCA" />
                <Picker.Item label="COMFACHOCO" value="COMFACHOCO" />
                <Picker.Item label="COMFAORIENTE" value="COMFAORIENTE" />
                <Picker.Item
                  label="EPS FAMILIAR DE COLOMBIA"
                  value="EPS FAMILIAR DE COLOMBIA"
                />
                <Picker.Item label="ASMET SALUD" value="ASMET SALUD" />
                <Picker.Item label="EMSSANAR E.S.S" value="EMSSANAR E.S.S" />
                <Picker.Item
                  label="CAPITAL SALUD EPS-S"
                  value="CAPITAL SALUD EPS-S"
                />
                <Picker.Item label="SAVIA SALUD EPS" value="SAVIA SALUD EPS" />
                <Picker.Item label="DUSAKAWI EPSI" value="DUSAKAWI EPSI" />
                <Picker.Item
                  label="ASOCIACION INDIGENA DEL CAUCA EPSI"
                  value="ASOCIACION INDIGENA DEL CAUCA EPSI"
                />
                <Picker.Item label="ANAS WAYUU EPSI" value="ANAS WAYUU EPSI" />
                <Picker.Item label="MALLAMAS EPSI" value="MALLAMAS EPSI " />
                <Picker.Item
                  label="PIJAOS SALUD EPSI"
                  value="PIJAOS SALUD EPSI"
                />
                <Picker.Item
                  label="SALUD BÓLIVAR EPS SAS"
                  value="SALUD BÓLIVAR EPS SAS"
                />
                <Picker.Item label="OTRA" value="OTRA" />
              </Picker>

              <Text style={styles.preguntas}>
                Opción seleccionada: {aseguradora}
              </Text>
              {aseguradora === "OTRA" && (
                <View>
                  <Text style={styles.preguntas}>
                    Ingrese otra aseguradora:
                  </Text>
                  <TextInput
                    value={otraAseguradora}
                    onChangeText={(text) => setOtraAseguradora(text)}
                    style={styles.input}
                    placeholder="Escribe aquí la aseguradora"
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </View>

      {/* Pregunta 3.3 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question1}>
              {" "}
              PREGUNTA 3.3 ( SELECCIÓN ÚNICA){" "}
            </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                Sobre el acceso que garantiza la aseguradora (EAPB) a los
                usuarios en el área de influencia
              </Text>

              <Text style={styles.preguntas}>
                Según la asignación realizada por su aseguradora (EAPB), indique
                cuál es el lugar al que asiste con mayor frecuencia para su
                atención general en salud
              </Text>

              <View style={styles.preguntaContainer}>
                <CheckBox
                  title="Centro de Salud y/o Hospital del Municipio"
                  checked={
                    selectedOption2 ===
                    "Centro de Salud y/o Hospital del Municipio"
                  }
                  onPress={() =>
                    handleOption2Select(
                      "Centro de Salud y/o Hospital del Municipio"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption2 ===
                    "Centro de Salud y/o Hospital del Municipio"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Centro de Salud y/o Hospital en otro Municipio"
                  checked={
                    selectedOption2 ===
                    "Centro de Salud y/o Hospital en otro Municipio"
                  }
                  onPress={() =>
                    handleOption2Select(
                      "Centro de Salud y/o Hospital en otro Municipio"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption2 ===
                    "Centro de Salud y/o Hospital en otro Municipio"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Consultorio Particular u otro servicio dentro del Municipio"
                  checked={
                    selectedOption2 ===
                    "Consultorio Particular u otro servicio dentro del Municipio"
                  }
                  onPress={() =>
                    handleOption2Select(
                      "Consultorio Particular u otro servicio dentro del Municipio"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption2 ===
                    "Consultorio Particular u otro servicio dentro del Municipio"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Consultorio Particular u otro servicio fuera del Municipio"
                  checked={
                    selectedOption2 ===
                    "Consultorio Particular u otro servicio fuera del Municipio"
                  }
                  onPress={() =>
                    handleOption2Select(
                      "Consultorio Particular u otro servicio fuera del Municipio"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption2 ===
                    "Consultorio Particular u otro servicio fuera del Municipio"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Medicina Tradicional (Quilombo, Maloka, Sobandero, Taita … etc.)"
                  checked={
                    selectedOption2 ===
                    "Medicina Tradicional (Quilombo, Maloka, Sobandero, Taita … etc.)"
                  }
                  onPress={() =>
                    handleOption2Select(
                      "Medicina Tradicional (Quilombo, Maloka, Sobandero, Taita … etc.)"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption2 ===
                    "Medicina Tradicional (Quilombo, Maloka, Sobandero, Taita … etc.)"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
              </View>

              {(selectedOption2 ===
                "Centro de Salud y/o Hospital en otro Municipio" ||
                selectedOption2 ===
                  "Consultorio Particular u otro servicio fuera del Municipio") && (
                <View style={styles.preguntaContainer}>
                  <Text style={styles.preguntas}>
                    Ingrese el nombre del municipio:
                  </Text>
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
        </View>
      </View>

      {/* Pregunta 3.4 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question1}>
              {" "}
              PREGUNTA 3.4 ( SELECCIÓN ÚNICA ){" "}
            </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                ¿El lugar donde su aseguradora (EAPB) realiza la autorización
                para la atención especializada en salud (hospitalización,
                cirugía, exámenes diagnósticos, terapias, médicos especialistas,
                etc.) se encuentra dentro del municipio?
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

              {selectedOption3 === "No" && (
                <View style={styles.preguntaContainer}>
                  <Text style={styles.preguntas}>
                    Ingrese el nombre del municipio:
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={municipio1}
                    onChangeText={handleMunicipioChange1}
                    placeholder="Nombre del municipio"
                  />
                  <Text style={styles.preguntas}>
                    Ingrese el nombre del departamento:
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={nombreDepartamento}
                    onChangeText={handleNombreDepartamentoChange}
                    placeholder="Nombre del departamento"
                  />
                </View>
              )}
            </View>
            {/* Boton */}
            <TouchableOpacity
              style={styles.boton}
              onPress={() => {
                goToPreguntaCua();
                SaveComponente3();
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
  titulo: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: -20,
  },

  pregunta: {
    marginBottom: 5,
    textAlign: "justify",
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
  opcionesContainer: {
    flexDirection: "row",
    alignItems: "center",
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
  /* Estilo Contenedor */

  contenedorPadre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

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

  // Estilo para el texto de las opciones seleccionadas
  selectedOptionText: {
    color: "#BA0C2F", // Color de texto para la opción seleccionada
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

  question: {
    color: "#35669a",
    marginBottom: -20,
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 15,
  },
  question1: {
    color: "#35669a",
    marginBottom: -80,
    marginTop: -2,
    fontWeight: "bold",
    fontSize: 15,
  },
  question2: {
    color: "#35669a",
    marginBottom: 20,
    marginTop: 2,
    fontWeight: "bold",
    fontSize: 15,
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
  linea1: {
    marginTop: 8,
    height: 6, // Altura de la línea
    backgroundColor: "#BA0C2F", // Color de la línea (rojo en este caso)
    position: "relative", // Posición absoluta para que se superponga al contenido
    bottom: 20, // Se coloca en la parte inferior de la tarjeta
    left: 0, // Alinear a la izquierda
    right: 0, // Alinear a la derecha
  },
});
