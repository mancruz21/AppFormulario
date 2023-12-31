import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";
import appFirebase from "../components/firebase-config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const db = getFirestore(appFirebase);
import { RealmConfigContext } from "./../../utils/models/context";
const { useRealm } = RealmConfigContext;
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useRoute } from "@react-navigation/native";
export default function PreSeisScreen(props) {
  const realm = useRealm();
  const { navigation } = props;
  const route = useRoute();
  const { numeroIdentificacion } = route.params;
  const [opcionOtro, setOpcionOtro] = useState(false);
  const [opcionOtro1, setOpcionOtro1] = useState(false);
  const [otroTexto, setOtroTexto] = useState("");
  const [encuestador, setEncuestador] = useState("");
  const [fecha, setFecha] = useState("");
  const [otroTexto1, setOtroTexto1] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [edad, setEdad] = useState("");
  const [seleccionoSi1, setSeleccionoSi1] = useState(false);
  const [seleccionoSi, setSeleccionoSi] = useState(false);
  const [otroIndicacion, setOtroIndicacion] = useState("");
  const [otroIndicacion1, setOtroIndicacion1] = useState("");
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [nombreDepartamento, setNombreDepartamento] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [formCounter, setFormCounter] = useState(1);
  const [opcion6_2, setOpcion6_2] = useState("");
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  useEffect(() => {
    // Recuperar los datos guardados de AsyncStorage cuando la pantalla se carga
    const restoreData = async () => {
      try {
        const savedData6 = await AsyncStorage.getItem("componente6");
        if (savedData6) {
          const parsedData = JSON.parse(savedData6);
          setOpcionOtro(parsedData.opcion);
          setOpcionOtro1(parsedData.opcion1);
          setOtroTexto(parsedData.otroTexto);
          setOtroTexto1(parsedData.otroTexto1);
          setSelectedOptions(parsedData.selectedOptions);
          setSelectedOptions1(parsedData.selectedOptions1);
          setSeleccionoSi(parsedData.seleccionoSi);
          setSeleccionoSi1(parsedData.seleccionoSi1);
          setOtroIndicacion(parsedData.otroIndicacion);
          setOtroIndicacion1(parsedData.otroIndicacion1);
          setSelectedOption3(parsedData.selectedOption3);
          setNombreDepartamento(parsedData.nombreDepartamento);
          setMunicipio(parsedData.municipio);
          setEncuestador(parsedData.encuestador);
          setFecha(parsedData.fecha);


        }
      } catch (error) {
        console.error("Error al restaurar los datos:", error);
      }
    };

    restoreData();
  }, []);
  // Función para formatear la fecha
  function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }
     // Función para calcular la edad
  const calcularEdad = (fechaNacimiento) => {
    // Convertimos la fechaNacimiento en un objeto Date
    const fechaNac = new Date(
      fechaNacimiento.split("/").reverse().join("-") // Convertimos "DD/MM/AAAA" a "AAAA-MM-DD"
    );

    const today = new Date();
    let age = today.getFullYear() - fechaNac.getFullYear();
    const monthDifference = today.getMonth() - fechaNac.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < fechaNac.getDate())
    ) {
      age--;
    }
    return age.toString();
  };
  const showMode = (mode) => {
    setMode(mode);
    setShow(true);
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    // Formateamos la fecha en "DD/MM/AAAA" antes de asignarla al estado "fecha"
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1
      }/${currentDate.getFullYear()}`;
    setFecha(formattedDate);

    // Calculamos la edad y la establecemos en el estado "edad"
    if (formattedDate !== "") {
      const age = calcularEdad(formattedDate);
      setEdad(age);
    }
  };

  useEffect(() => {
    // Guardar los datos seleccionados en AsyncStorage cuando cambian
    const saveData = async () => {
      try {
        const dataToSave6 = JSON.stringify({
          opcionOtro, opcionOtro1, otroTexto, otroTexto1, selectedOptions, selectedOptions1,
          seleccionoSi, seleccionoSi1, otroIndicacion, otroIndicacion1, selectedOption3,
          nombreDepartamento, municipio, encuestador,fecha,
        });
        await AsyncStorage.setItem("componente6", dataToSave6);
      } catch (error) {
        console.error("Error al guardar los datos:", error);
      }
    };

    saveData();
  }, [opcionOtro, opcionOtro1, otroTexto, otroTexto1, selectedOptions, selectedOptions1,
    seleccionoSi, seleccionoSi1, otroIndicacion, otroIndicacion1, selectedOption3,
    nombreDepartamento, municipio, encuestador, fecha
  ]);
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

  const handleCheckboxChange1 = (index) => {
    if (selectedOptions1.includes(4) && index !== 4) {
      return;
    }

    if (index === 3) {
      setOpcionOtro1(!opcionOtro1);
    } else {
      setOpcionOtro1(false);
    }

    const options1 = [...selectedOptions1];

    if (options1.includes(index)) {
      options1.splice(options1.indexOf(index), 1);
    } else {
      if (options1.length < 2) {
        options1.push(index);
      }
    }

    setSelectedOptions1(options1);
  };

  const handleSiCheckboxChange = () => {
    setSeleccionoSi(true);
  };

  const handleNoCheckboxChange = () => {
    setSeleccionoSi(false);
  };
  const handleSiCheckboxChange1 = () => {
    setSeleccionoSi1(true);
  };

  const handleNoCheckboxChange1 = () => {
    setSeleccionoSi1(false);
  };

  const handleOtroTextoChange = (text) => {
    setOtroTexto(text);
  };
  const handlEncuestadorTextoChange = (text) => {
    setEncuestador(text);
  };
  const handleOtroTextoChange1 = (text) => {
    setOtroTexto1(text);
  };

  const handleOtroIndicacionChange = (text) => {
    setOtroIndicacion(text);
  };
  const handleOtroIndicacionChange1 = (text) => {
    setOtroIndicacion1(text);
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
    if (
      selectedOptions.length > 0 &&
      (!selectedOptions.includes(3) || otroTexto !== "") && // Validación de opciones y campo de texto
      // Verifica que al menos una opción esté seleccionada si es "Sí"
      (!seleccionoSi1 || seleccionoSi1 !== "") &&
      ((seleccionoSi && otroIndicacion !== "") || !seleccionoSi) && // Validación de checkboxes y campo de texto
      ((selectedOption3 === "Sí" &&
        municipio !== "" &&
        nombreDepartamento !== "") ||
        selectedOption3 === "No") &&// Validación de la selección única y campos de texto
      encuestador !== ""&&
      fecha.trim() !== ""
    ) {
      navigation.navigate("Envio", { numeroIdentificacion: numeroIdentificacion });
    } else {
      Alert.alert("Error", "Por favor completa todos los campos.");
    }
  };

  // Suponiendo que ya tienes 'realm' disponible y has definido tu modelo 'Componente6'



  const SaveComponente6 = async () => {
    /*  try {
      await addDoc(collection(db, "componenteseis"), {
        pregunta6_1: selectedOptions.map((index) => opciones[index]),
        otroTexto6_1: opcionOtro ? otroTexto : "",
        pregunta6_2: seleccionoSi ? "Si" : "No",
        otroIndicacion6_2: seleccionoSi ? otroIndicacion : "",
        pregunta6_3: selectedOption3,
        municipio_pregunta6_3: selectedOption3 === "Sí" ? municipio : "",
        departamento_pregunta6_3:
          selectedOption3 === "Sí" ? nombreDepartamento : "",
      });
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Hubo un error al guardar sus respuestas");
    } */
    const selectedOptionsStrings = selectedOptions.map((index) => opciones[index]);
    const pregunta6_1 = selectedOptionsStrings.join(', ');

    const selectedOptions1Strings = selectedOptions1.map((index) => opciones[index]);
    const pregunta6_2_2 = selectedOptions1Strings.join(', ');


    try {
      realm.write(() => {
        const personaToUpdate = realm
          .objects("Persona")
          .filtered(`id_document = ${numeroIdentificacion}`);
        if (personaToUpdate.length > 0) {
          const persona = personaToUpdate[0];



          persona.component6 = {
            pregunta6_1,
            otroTexto6_1: otroTexto,
            pregunta6_2: opcion6_2.toString(),
            pregunta6_2_2,
            pregunta6_2_1: otroTexto1,
            pregunta6_3: selectedOption3,
            departamento_pregunta6_3: nombreDepartamento,
            municipio_pregunta6_3: municipio,
            encuestador_compo7: encuestador,
            FechaDilingecimiento: fecha.toString(),
          };
        }
      });

      console.log("Los datos se han guardado correctamente en Realm.");
      console.log(numeroIdentificacion);
      console.log(pregunta6_2_2);
      console.log(pregunta6_1);
     
    } catch (error) {
      console.error("Error al guardar datos en Realm:", error);
    }
  };

  return (
    <ScrollView>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>SALUD PÚBLICA</Text>
            <Text style={styles.texto}>
              La Salud Pública es un conjunto de acciones que se realizan de manera individual (persona por persona) o también de forma colectiva (grupal) para contribuir al
              bienestar, el desarrollo y el mejoramiento de calidad de vida de la población. Dentro de las acciones de salud pública se cuentan: salud ambiental, salud nutricional,
              salud mental y sustancias psicoactivas, vacunación, enfermedades transmisibles, enfermedades no transmisibles, poblaciones vulnerables, estilos saludables, epidemiología
              y demografía, salud sexual y reproductiva, entre otras. Estas acciones se realizan bajo la rectoría del Estado y se caracterizan por promover la participación de
              todos los sectores de la comunidad, de acuerdo con las responsabilidades de cada uno de los mismos. - Ley 1122 de 2007 - Resolución 1536 de 2015 del MSPS -
            </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>
      {/* Pregunta 6.1 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>

            <Text style={styles.question}>
              {" "}
              PREGUNTA 6.1 ( SELECCIÓN MÚLTIPLE - MÁXIMO 2 OPCIONES){" "}
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
                    selectedOptions.includes(index)
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
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
          </View>
        </View>
      </View>

      {/* Pregunta 6.2 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question1}>
              {" "}
              PREGUNTA 6.2 ( SELECCIÓN ÚNICA ){" "}
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
                ¿Ha participado en alguna de las anteriores intervenciones en
                Salud Pública asociadas a la Rehabilitación en el último año?
              </Text>
              <CheckBox
                title="Si"
                checked={opcion6_2 === "Si"}
                onPress={() => setOpcion6_2("Si")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  opcion6_2 === "Si"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="No"
                checked={opcion6_2 === "No"}
                onPress={() => setOpcion6_2("No")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  opcion6_2 === "No"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />

              {opcion6_2 == "Si" && (
                <View>
                  <Text style={styles.advertencia}>
                    Escoja el que se escogio en la respuesta 6.1{" "}
                  </Text>
                  <Text style={styles.preguntas}>Indique Cúal</Text>
                  <View style={styles.preguntaContainer}>
                    {opciones.map((opcion, index) => (
                      <CheckBox
                        key={index}
                        title={opcion}
                        checked={selectedOptions1.includes(index)}
                        onPress={() => handleCheckboxChange1(index)}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1.includes(index)
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                    ))}
                    {opcionOtro1 && (
                      <TextInput
                        style={styles.input}
                        value={otroTexto1}
                        onChangeText={handleOtroTextoChange1}
                        placeholder="Especifique otro"
                      />
                    )}
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>

      {/* Pregunta 6.3 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question1}>
              {" "}
              PREGUNTA 6.3 ( SELECCIÓN ÚNICA ){" "}
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
                Conoce sobre un lugar de suministro de productos de apoyo en el
                municipio o en el departamento que beneficie a la población con
                elementos como: sillas de ruedas, bastones de orientación
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
              {selectedOption3 === "Sí" && (
                <View style={styles.preguntaContainer}>
                  <Text style={styles.preguntas}>Indique cual:</Text>
                  <TextInput
                    style={styles.input}
                    value={municipio}
                    onChangeText={handleMunicipioChange}
                    placeholder=""
                  />
                  <Text style={styles.preguntas}>Dónde se ubica:</Text>
                  <TextInput
                    style={styles.input}
                    value={nombreDepartamento}
                    onChangeText={handleNombreDepartamentoChange}
                    placeholder=""
                  />
                </View>
              )}
            </View>

          </View>
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question2}>
              {" "}
              COMPONENTE VII. - DATOS DE IDENTIFICACIÓN DE QUIEN REALIZA EL REGISTRO
            </Text>
          </View>

        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <View style={styles.preguntaContainer}>
              <Text style={styles.preguntas}>
                Ingrese su nombre completo
              </Text>
              <TextInput
                style={styles.input}
                value={encuestador}
                onChangeText={handlEncuestadorTextoChange}
                placeholder="Ingrese su nombre completo"
              />

              <View style={styles.EdadYFecha}>
                {/* Fecha Nacimiento */}
                <Text style={styles.preguntas}> Fecha dilingeciamiento</Text>
                <View style={styles.inputDate}>
                  <TextInput
                    placeholder="DD/MM/AAAA"
                    style={styles.textoDate}
                    value={fecha}
                    keyboardType="numeric"
                    maxLength={12}
                    onFocus={() => showMode("date")}
                  />

                  <TouchableOpacity
                    style={styles.botonDate}
                    onPress={() => showMode("date")}
                  >
                    <View style={styles.contenedorIcono}>
                      <Text style={styles.iconoCalendario}>
                        <Icon name="calendar" size={25} color="white" />{" "}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    minimumDate={new Date(1900, 0, 1)} // 1 de enero de 1900

                  />
                )}



              </View>
            </View>
            {/* Boton */}
            <TouchableOpacity
              style={styles.boton}
              onPress={() => {
                goToPreguntaSeis();
                SaveComponente6();
              }}
            >
              <Text style={styles.textoBoton}>Enviar</Text>
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
    textAlign: "justify",
  },
  texto: {
    color: "#000000",
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "justify",
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

  titulo: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: -20,
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

  checkBoxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    margin: 5,
    marginBottom: 10,
  },
  // Estilo para el texto de las opciones seleccionadas
  // Estilo para el texto de las opciones seleccionadas
  selectedOptionText: {
    color: "#BA0C2F", // Color de texto para la opción seleccionada
    fontWeight: "bold", // Puedes ajustar el peso del texto si lo deseas
    fontSize: 16,
  },

  checkBoxText: {
    fontSize: 16,
  },

  advertencia: {
    marginBottom: 5,
    textAlign: "justify",
    marginTop: 5,
    fontWeight: "bold",
    color: "#BA0C2F",
    fontSize: 16,
  },

  EdadYFecha: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  /* Estilo Fecha Nacimiento*/
  inputDate: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  checkBoxWidth: {
    flex: 1,
  },
  contenedorIcono: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  checkBoxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    margin: 5,
    marginBottom: 10,
  },

  botonDate: {
    backgroundColor: "#35669a",
    borderRadius: 5,
    padding: 10,
    width: "25%",
    height: "80%",
    marginTop: 12,
    marginLeft: 10,
  },
  textoDate: {
    borderColor: "slategray",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
  },
});
