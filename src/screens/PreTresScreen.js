import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {  CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default function PreTresScreen(props) {
  const { navigation } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const [aseguradora, setAseguradora] = useState("");
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [municipio, setMunicipio] = useState("");
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [nombreDepartamento, setNombreDepartamento] = useState("");

  const goToPreguntaCua = () => {
    navigation.navigate("Pregunta 2.2");
    // Verificar si se ha seleccionado una opción antes de continuar
    if (
      selectedOption !== null &&
      selectedOption2 !== null &&
      selectedOption3 !== null
    ) {
    } else {
      // Aquí puedes mostrar una notificación o mensaje de error indicando al usuario que debe seleccionar una opción antes de continuar
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const handleAseguradoraChange = (text) => {
    setAseguradora(text);
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
  const handleNombreDepartamentoChange = (text) => {
    setNombreDepartamento(text);
  };

  return (
    <ScrollView>
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}> ASEGURAMIENTO EN LA SALUD</Text>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                PREGUNTA 3.1 (Selección Única)
              </Text>

              <Text style={styles.recuadroTitulo}>
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
                />
              </View>
            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>PREGUNTA 3.2</Text>

              <View style={styles.preguntaContainer}>
                <Text style={styles.recuadroTitulo}>
                  Indique cuál es el nombre de la Aseguradora en Salud / EAPB a
                  la que se encuentra afiliado en la actualidad:
                </Text>
                <TextInput
                  style={styles.input}
                  value={aseguradora}
                  onChangeText={handleAseguradoraChange}
                  placeholder="Ingrese el nombre de la aseguradora"
                  underlineColorAndroid="transparent" // Para Android
                  selectionColor="#efefef" // Color de la línea cuando se selecciona el campo
                />
              </View>
            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                PREGUNTA 3.3 - Sobre el acceso que garantiza la aseguradora
                (EAPB) a los usuarios en el área de influencia (Selección Única)
              </Text>

              <Text style={styles.recuadroTitulo}>
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
                    "Medicina Tradicional (Quilombo, Maloka, Sobandero, Taita … etc."
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
              </View>

              {(selectedOption2 ===
                "Centro de Salud y/o Hospital en otro Municipio" ||
                selectedOption2 ===
                  "Consultorio Particular u otro servicio fuera del Municipio") && (
                <View style={styles.preguntaContainer}>
                  <Text style={styles.recuadroTitulo}>
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

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                PREGUNTA 3.4 (Selección Única)
              </Text>

              <Text style={styles.recuadroTitulo}>
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

              {selectedOption3 === "No" && (
                <View style={styles.preguntaContainer}>
                  <Text style={styles.recuadroTitulo}>
                    Ingrese el nombre del municipio:
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={municipio}
                    onChangeText={handleMunicipioChange}
                    placeholder="Nombre del municipio"
                  />
                  <Text style={styles.recuadroTitulo}>
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
            <TouchableOpacity style={styles.boton} onPress={goToPreguntaCua}>
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
  },
  preguntaContainer: {
    marginBottom: 16,
  },
  pregunta: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  recuadro: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 8,
    alignSelf: "stretch",
    marginHorizontal: 8,
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

  contenedorPadre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  /* Estilo Contenedor */

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
});
