import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";
import appFirebase from "../components/firebase-config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const db = getFirestore(appFirebase);
import { RealmConfigContext } from "./../../utils/models/context";
const { useRealm } = RealmConfigContext;

export default function PreUnoScreen(props) {
  const realm = useRealm();
  const { navigation } = props;
  /* const realm = new Realm({ schema: [Persona] }); */
  // Función para guardar los datos en AsyncStorage
  const saveDataToStorage = async () => {
    try {
      const data = {
        selectedOption,
        apellido,
        nombres,
        fecha,
        edad,
        departamento,
        municipio,
        nombreCentroPoblado,
        nombreBarrioVereda,
        direccion,
        estratoSocial,
        Celular,
        area,
      };
      await AsyncStorage.setItem("formData", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // Función para cargar los datos desde AsyncStorage
  const loadDataFromStorage = async () => {
    try {
      const data = await AsyncStorage.getItem("formData");
      if (data) {
        const parsedData = JSON.parse(data);
        setSelectedOption(parsedData.selectedOption);
        setApellido(parsedData.apellido);
        setNombres(parsedData.nombres);
        setFecha(parsedData.fecha);
        setEdad(parsedData.edad);
        setDepartamento(parsedData.departamento);
        setMunicipio(parsedData.municipio);
        setNombreCentroPoblado(parsedData.nombreCentroPoblado);
        setNombreBarrioVereda(parsedData.nombreBarrioVereda);
        setDireccion(parsedData.direccion);
        setEstratoSocial(parsedData.estratoSocial);
        setCelular(parsedData.Celular);

        setArea(parsedData.area);
      }
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  // Llama a la función para cargar los datos al montar el componente
  useEffect(() => {
    loadDataFromStorage();
  }, []);

  const [selectedOption, setSelectedOption] = useState("");

  const [apellido, setApellido] = useState("");
  const [nombres, setNombres] = useState("");
  const [edad, setEdad] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [nombreCentroPoblado, setNombreCentroPoblado] = useState("");
  const [nombreBarrioVereda, setNombreBarrioVereda] = useState("");
  const [direccion, setDireccion] = useState("");
  const [estratoSocial, setEstratoSocial] = useState(null);
  const [Celular, setCelular] = useState("");
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [fecha, setFecha] = useState("");
  const [edadCalculada, setEdadCalculada] = useState("");
  const [area, setArea] = useState("");

  // Departamentos y municipios

  const departamentosConMunicipios = [
    {
      departamento: "Antioquia",
      municipios: [
        "Cáceres",
        "Caucasia",
        "El Bagre",
        "Tarazá",
        "Valdivia",
        "Yarumal",
      ],
    },
    {
      departamento: "Bolívar",
      municipios: ["San Jacinto", "San Juan Nepomuceno"],
    },

    {
      departamento: "Cauca",
      municipios: [
        "Cajibío",
        "Piendamo - Tunía",
        "Santander de Quilichao",
        "Toribío",
      ],
    },
    {
      departamento: "Meta",
      municipios: ["San Martín"],
    },
    {
      departamento: "Putumayo",
      municipios: ["Orito"],
    },
    {
      departamento: "Sucre",
      municipios: ["Colosó"],
    },
    {
      departamento: "Valle del Cauca",
      municipios: ["Buenaventura"],
    },
  ];
  const [municipiosDelDepartamento, setMunicipiosDelDepartamento] = useState(
    []
  );
  const filtrarMunicipiosPorDepartamento = (departamentoSeleccionado) => {
    const departamentoEncontrado = departamentosConMunicipios.find(
      (dep) => dep.departamento === departamentoSeleccionado
    );
    if (departamentoEncontrado) {
      return departamentoEncontrado.municipios;
    }
    return [];
  };

  {
    /* Para que atrape la inf de la hora y fecha */
  }

  const showMode = (mode) => {
    setMode(mode);
    setShow(true);
  };

  {
    /* Funcion   */
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    // Formateamos la fecha en "DD/MM/AAAA" antes de asignarla al estado "fecha"
    const formattedDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    setFecha(formattedDate);

    // Calculamos la edad y la establecemos en el estado "edad"
    if (formattedDate !== "") {
      const age = calcularEdad(formattedDate);
      setEdad(age);
    }
  };

  // Calcula la edad cada vez que el estado fechaNacimiento se actualiza
  useEffect(() => {
    if (fecha !== "") {
      const age = calcularEdad(fecha);
      setEdadCalculada(age); // Actualiza el estado de la edad con la edad calculada
    }
  }, [fecha]);

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

  // Función para formatear la fecha
  function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }
  const goToPreguntaDos = () => {
    if (
      selectedOption !== "" &&
      apellido.trim() !== "" &&
      nombres.trim() !== "" &&
      fecha.trim() !== "" &&
      edad.trim() !== "" &&
      departamento.trim() !== "" &&
      municipio.trim() !== "" &&
      (area !== "Centro poblado (Inspección, Corregimiento, caserío)" ||
        nombreCentroPoblado.trim() !== "") &&
      nombreBarrioVereda.trim() !== "" &&
      direccion.trim() !== "" &&
      Celular.trim() !== "" &&
      estratoSocial !== null
    ) {
      // Todas las respuestas requeridas han sido llenadas, permitir la navegación
      navigation.navigate("Pregunta 1.2");
      console.log("Sexo:", selectedOption);
      console.log("Apellido:", apellido);
      console.log("Nombres:", nombres);
      console.log("Fecha de nacimiento:", fecha);
      console.log("Edad:", edad);
      console.log("Departamento:", departamento);
      console.log("Municipio:", municipio);
      console.log("Área:", area);
      console.log("Nombre centro poblado:", nombreCentroPoblado);
      console.log("Nombre barrio vereda:", nombreBarrioVereda);
      console.log("Dirección:", direccion);
      console.log("Celular:", Celular);
      console.log("Estrato social:", estratoSocial);
    } else {
      // Mostrar una alerta al usuario indicando que deben llenar todas las respuestas
      Alert.alert("Error", "Por favor completa todos los campos.");
    }
    saveDataToStorage();
  };
  const SaveComponente1 = async () => {
    /* try {
      await addDoc(collection(db, "componenteuno"), {
        pregunta1_1Apell: apellido,
        pregunta1_1_2Nombres: nombres,
        pregunta1_1_3_Sexo: selectedOption,
        pregunta1_1_4Fecha: fecha,
        pregunta1_1_5Edad: edadCalculada,

        pregunta1_2_1: departamento,
        pregunta1_2_2: municipiosDelDepartamento,
        pregunta1_2_3_Mun: municipio,
        pregunta1_2_4_Area: area,
        pregunta1_2_5: nombreCentroPoblado,
        pregunta1_2_6_Ver: nombreBarrioVereda,
        pregunta1_2_7_Dir: direccion,
        pregunta1_2_8_Tel: Celular,
        pregunta1_2_9_Estr: estratoSocial,
      });
    } catch (error) {
      console.error(error);
    } */

    Celular_parse = parseInt(Celular);
    edad_parse = parseInt(edadCalculada);
    try {
      realm.write(() => {
        realm.create("Persona", {
          tipoID: "CC",
          id_document: 10029658523,
          component1: {
            pregunta1_1Apell: apellido.toString(),
            pregunta1_1_2Nombres: nombres.toString(),
            pregunta1_1_3_Sexo: selectedOption.toString(), // Cambia esto al valor seleccionado
            pregunta1_1_4Fecha: fecha.toString(), // Cambia esto a la fecha seleccionada
            pregunta1_1_5Edad: edad_parse,
            pregunta1_2_1: departamento.toString(),
            pregunta1_2_2: municipiosDelDepartamento.toString(),
            pregunta1_2_3_Mun: municipio.toString(),
            pregunta1_2_4_Area: area.toString(),
            pregunta1_2_5: nombreCentroPoblado.toString(),
            pregunta1_2_6_Ver: nombreBarrioVereda.toString(),
            pregunta1_2_7_Dir: direccion.toString(),
            pregunta1_2_8_Tel: Celular_parse,
            pregunta1_2_9_Estr: estratoSocial.toString(),
          },
        });
      });
      console.log("Los datos se han guardado correctamente en Realm.");
    } catch (error) {
      console.error("Error al guardar datos en Realm:", error);
    }
  };
  return (
    <ScrollView>
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>
              Datos de identificación y localización
            </Text>
            <Text style={styles.question}> PREGUNTA 1.1</Text>
          </View>
          <View style={styles.linea} />
        </View>
        <View style={styles.FechaContainer}>
          <Text style={styles.fechaText}>
            Fecha de dilingeciamiento {formatDate(new Date())}{" "}
          </Text>
        </View>
      </View>
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            {/* Contenedor Hora y fecha de dilingeciamiento de información */}
            {/* Nombres, apellidos y sexo */}
            <Text style={styles.preguntas}> Apellidos</Text>
            <TextInput
              placeholder="Ingresa tus apellidos"
              style={styles.input}
              underlineColorAndroid="transparent" // Para Android
              selectionColor="#efefef" // Color de la línea cuando se selecciona el campo
              value={apellido}
              onChangeText={setApellido}
            />
            <Text style={styles.preguntas}> Nombres</Text>
            <TextInput
              placeholder="Ingresa tus nombres"
              style={styles.input}
              underlineColorAndroid="transparent" // Para Android
              selectionColor="#efefef" // Color de la línea cuando se selecciona el campo
              value={nombres}
              onChangeText={setNombres}
            />
            <Text style={styles.preguntas}> Sexo </Text>
            <View style={styles.inputDate}>
              <CheckBox
                title="Masculino"
                checked={selectedOption === "Masculino"}
                onPress={() => setSelectedOption("Masculino")}
                containerStyle={[
                  styles.checkBoxContainer,
                  styles.checkBoxWidth,
                ]}
                textStyle={
                  selectedOption === "Masculino"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Femenino"
                checked={selectedOption === "Femenino"}
                onPress={() => setSelectedOption("Femenino")}
                containerStyle={[
                  styles.checkBoxContainer,
                  styles.checkBoxWidth,
                ]}
                textStyle={
                  selectedOption === "Femenino"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
            </View>

            <View style={styles.EdadYFecha}>
              {/* Fecha Nacimiento */}
              <Text style={styles.preguntas}> Fecha Nacimiento</Text>
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
                  maximumDate={new Date(2014, 11, 31)} // 31 de diciembre de 2014
                />
              )}
              {/* Edad*/}
              <Text style={styles.preguntas}> Edad</Text>
              <TextInput
                style={styles.inputEdad}
                keyboardType="numeric" // Establece el teclado numérico
                underlineColorAndroid="transparent"
                selectionColor="#efefef"
                maxLength={3}
                placeholder={edadCalculada !== "" ? edadCalculada : ""} // Mostrar el valor calculado en el placeholder
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question1}> PREGUNTA 1.2</Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            {/* Departamento */}
            <Text style={styles.preguntas}>Departamento</Text>
            {departamentosConMunicipios.map((dep) => (
              <TouchableOpacity
                key={dep.departamento}
                onPress={() => {
                  setDepartamento(dep.departamento);
                  setMunicipiosDelDepartamento(dep.municipios); // Actualiza los municipios del departamento seleccionado
                }}
                style={[{ paddingVertical: 10 }]}
              >
                <Text
                  style={
                    departamento === dep.departamento
                      ? styles.selectedOptionText
                      : null
                  }
                >
                  {dep.departamento}
                </Text>
              </TouchableOpacity>
            ))}
            {/* Municipio */}
            <Text style={styles.preguntas}>Municipio</Text>
            {municipiosDelDepartamento.length > 0 ? (
              municipiosDelDepartamento.map((mun) => (
                <TouchableOpacity
                  key={mun}
                  onPress={() => setMunicipio(mun)}
                  style={[{ paddingVertical: 10 }]}
                >
                  <Text
                    style={municipio === mun ? styles.selectedOptionText : null}
                  >
                    {mun}
                  </Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text>No hay municipios disponibles para este departamento.</Text>
            )}
            {/* Area */}

            <Text style={styles.preguntas}> Área</Text>
            <CheckBox
              title="Cabecera Municipal (Area urbana)"
              checked={area === "Cabecera Municipal (Area urbana)"}
              onPress={() => setArea("Cabecera Municipal (Area urbana)")}
              containerStyle={[styles.checkBoxContainer, styles.checkBoxWidth]}
              textStyle={
                area === "Cabecera Municipal (Area urbana)"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />

            <CheckBox
              title="Centro poblado (Inspección, Corregimiento, caserío)"
              checked={
                area === "Centro poblado (Inspección, Corregimiento, caserío)"
              }
              onPress={() =>
                setArea("Centro poblado (Inspección, Corregimiento, caserío)")
              }
              containerStyle={[styles.checkBoxContainer, styles.checkBoxWidth]}
              textStyle={
                area === "Centro poblado (Inspección, Corregimiento, caserío)"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="Rural disperso"
              checked={area === "Rural disperso"}
              onPress={() => setArea("Rural disperso")}
              containerStyle={[styles.checkBoxContainer, styles.checkBoxWidth]}
              textStyle={
                area === "Rural disperso"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            {/* Ubicación */}

            {area === "Centro poblado (Inspección, Corregimiento, caserío)" && (
              <>
                <Text style={styles.preguntas}>
                  Nombre del centro poblado (inspección, corregimiento, caserio)
                </Text>
                <TextInput
                  placeholder="Ingresa el nombre del centro poblado"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  selectionColor="#efefef"
                  value={nombreCentroPoblado}
                  onChangeText={setNombreCentroPoblado}
                />
              </>
            )}

            <Text style={styles.preguntas}>
              {" "}
              Nombre del barrio o vereda (vereda rural - barrio urbano)
            </Text>
            <TextInput
              placeholder="Ingresa el nombre del barrio o vereda"
              style={styles.input}
              underlineColorAndroid="transparent" // Para Android
              selectionColor="#efefef" // Color de la línea cuando se selecciona el campo
              value={nombreBarrioVereda}
              onChangeText={setNombreBarrioVereda}
            />
            <Text style={styles.preguntas}> Dirección </Text>
            <TextInput
              placeholder="Ingresa su dirección"
              style={styles.input}
              underlineColorAndroid="transparent" // Para Android
              selectionColor="#efefef" // Color de la línea cuando se selecciona el campo
              value={direccion}
              onChangeText={setDireccion}
            />
            <Text style={styles.preguntas}> Número de teléfono</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa su número de celular"
              keyboardType="numeric"
              maxLength={10}
              onChangeText={setCelular}
              value={Celular}
              underlineColorAndroid="transparent" // Para Android
              selectionColor="#efefef" // Color de la línea cuando se selecciona el campo
            />
            <Text style={styles.preguntas}> Estrato social</Text>
            <CheckBox
              title="1"
              checked={estratoSocial === "1"}
              onPress={() => setEstratoSocial("1")}
              containerStyle={[styles.checkBoxContainer, styles.checkBoxWidth]}
              textStyle={
                estratoSocial === "1"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="2"
              checked={estratoSocial === "2"}
              onPress={() => setEstratoSocial("2")}
              containerStyle={[styles.checkBoxContainer, styles.checkBoxWidth]}
              textStyle={
                estratoSocial === "2"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="3"
              checked={estratoSocial === "3"}
              onPress={() => setEstratoSocial("3")}
              containerStyle={[styles.checkBoxContainer, styles.checkBoxWidth]}
              textStyle={
                estratoSocial === "3"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="4"
              checked={estratoSocial === "4"}
              onPress={() => setEstratoSocial("4")}
              containerStyle={[styles.checkBoxContainer, styles.checkBoxWidth]}
              textStyle={
                estratoSocial === "4"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="5"
              checked={estratoSocial === "5"}
              onPress={() => setEstratoSocial("5")}
              containerStyle={[styles.checkBoxContainer, styles.checkBoxWidth]}
              textStyle={
                estratoSocial === "5"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="6"
              checked={estratoSocial === "6"}
              onPress={() => setEstratoSocial("6")}
              containerStyle={[styles.checkBoxContainer, styles.checkBoxWidth]}
              textStyle={
                estratoSocial === "6"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="Sin Estrato"
              checked={estratoSocial === "Sin Estrato"}
              onPress={() => setEstratoSocial("Sin Estrato")}
              containerStyle={[styles.checkBoxContainer, styles.checkBoxWidth]}
              textStyle={
                estratoSocial === "Sin Estrato"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />

            {/* Boton */}
            <TouchableOpacity
              style={styles.boton}
              onPress={() => {
                goToPreguntaDos();
                SaveComponente1();
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

  /* Estilos titulo y preguntas */

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

  /* Estilo texto casillas*/

  textoInput: {
    borderColor: "slategray",
    borderWidth: 1,
    padding: 2,
    marginTop: 10,
    borderRadius: 8,
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

  inputEdad: {
    height: 35,
    borderBottomWidth: 1, // Añadimos el borde inferior
    borderBottomColor: "#707070", // Color del borde inferior
    paddingHorizontal: 10,
    width: "15%",
    marginLeft: 10,
  },
  EdadYFecha: {
    flexWrap: "wrap",
    flexDirection: "row",
  },

  checkBoxText: {
    fontSize: 16,
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

  // Estilo para el texto de las opciones seleccionadas
  selectedOptionText: {
    color: "#BA0C2F", // Color de texto para la opción seleccionada
    fontWeight: "bold", // Puedes ajustar el peso del texto si lo deseas
    fontSize: 16,
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
  /* Estilo fecha de dilingeciamiento */
  fechaContainer: {
    flexDirection: "row", // Mostrar elementos en una fila
    justifyContent: "space-between", // Espacio entre los elementos
    alignItems: "center", // Centrar elementos verticalmente
    marginTop: 10, // Espacio opcional entre la línea roja y la fecha
    fontWeight: "bold",
  },
  fechaText: {
    color: "#35669a",
    fontWeight: "bold",
    fontSize: 14,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dropdownButton: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    color: "#333",
    paddingRight: 30,
    backgroundColor: "#fff",
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    color: "#333",
    paddingRight: 30,
    backgroundColor: "#fff",
  },
});
