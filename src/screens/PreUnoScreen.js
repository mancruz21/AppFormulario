import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function PreUnoScreen(props) {
  const { navigation } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
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
  const departamentosConMunicipios = [
    {
      departamento: "Antioquia",
      municipios: ["Cáceres", "Caucasia", "El Bagre", "Tarazá", "Valdivia", "Yarumal",
      ],
    },
    {
      departamento: "Bolívar",
      municipios: ["San Jacinto", "San Juan Nepomuceno"],
    },

    {
      departamento: "Cauca",
      municipios: ["Cajibío", "Piendamo - Tunía", "Santander de Quilichao", "Toribío",
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

  const filtrarMunicipiosPorDepartamento = (departamentoSeleccionado) => {
    const departamentoEncontrado = departamentosConMunicipios.find(
      (dep) => dep.departamento === departamentoSeleccionado
    );
    if (departamentoEncontrado) {
      return departamentoEncontrado.municipios.map((municipio) => ({
        label: municipio,
        value: municipio,
      }));
    }
    return [];
  };
  {
    /* Para que atrape la inf de la hora y fecha */
  }
  const initialState = {
    titulo: " ",
    detalle: " ",
  };
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
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1
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
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  const goToPreguntaDos = () => {
    navigation.navigate("Pregunta 1.2");
    console.log("Sexo:", selectedOption);
    console.log("Area:", selectedOption1);
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
          <Text style={styles.fechaText} >Fecha de dilingeciamiento         {formatDate(new Date())} </Text>
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
                  miniumDate={new Date("01-01-1900")}
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
            <View>
              <RNPickerSelect
                placeholder={{
                  label: "Selecciona el departamento",
                  value: departamento,
                }}
                value={departamento}
                onValueChange={(value) => {
                  setDepartamento(value);
                  setMunicipio(""); // Reiniciamos el valor del municipio al cambiar el departamento
                }}
                items={[
                  { label: "Antioquia", value: "Antioquia" },
                  { label: "Bolívar", value: "Bolívar" },
                  { label: "Cauca", value: "Cauca" },
                  { label: "Meta", value: "Meta" },
                  { label: "Putumayo", value: "Putumayo" },
                  { label: "Sucre", value: "Sucre" },
                  { label: "Valle del Cauca", value: "Valle del Cauca" },
                ]}
              />
            </View>
            {/* Municipio */}

            <Text style={styles.preguntas}>Municipio</Text>
            <View>
              <RNPickerSelect
                placeholder={{
                  label: "Selecciona el Municipio",
                  value: municipio,
                }}
                value={municipio}
                onValueChange={(value) => setMunicipio(value)}
                items={filtrarMunicipiosPorDepartamento(departamento)}
              />
            </View>
            {/* Area */}
            <Text style={styles.preguntas}> Área</Text>

            <View>
              <RNPickerSelect
                placeholder={{
                  label: "Selecciona una opción",
                  value: area,
                }}
                value={area}
                onValueChange={(value) => setArea(value)}
                items={[
                  { label: "Cabecera Municipal (Area urbana)", value: "Cabecera Municipal (Area urbana)" },
                  { label: "Centro poblado (Inspección, Corregimiento, caserío)", value: "Centro poblado (Inspección, Corregimiento, caserío)" },
                  { label: "Rural disperso", value: "Rural disperso" },
                ]}
              />
            </View>

            {/* Ubicación */}
            <Text style={styles.preguntas}>
              {" "}
              Nombre del centro poblado (inspección, corregimiento, caserio)
            </Text>
            <TextInput
              placeholder="Ingresa el nombre del centro poblado"
              style={styles.input}
              underlineColorAndroid="transparent" // Para Android
              selectionColor="#efefef" // Color de la línea cuando se selecciona el campo
              value={nombreCentroPoblado}
              onChangeText={setNombreCentroPoblado}
            />

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

            <View>
              <RNPickerSelect
                placeholder={{
                  label: "Selecciona una opción",
                  value: estratoSocial,
                }}
                value={estratoSocial}
                onValueChange={(value) => setEstratoSocial(value)}
                items={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                  { label: "5", value: "5" },
                  { label: "6", value: "6" },
                  { label: "Sin Estrato", value: "Sin Estrato" },
                ]}
              />
            </View>

            {/* Boton */}
            <TouchableOpacity style={styles.boton} onPress={goToPreguntaDos}>
              <Text style={styles.textoBoton}> Siguiente </Text>
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

  /* Texto subtitulo */
  preguntas: {
    color: "#000000",
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
    

  },

  // Estilo para el texto de las opciones seleccionadas
  selectedOptionText: {
    color: "#BA0C2F", // Color de texto para la opción seleccionada
    fontWeight: "bold", // Puedes ajustar el peso del texto si lo deseas
    fontSize: 16,
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
  /* Estilo fecha de dilingeciamiento */
  fechaContainer: {
    flexDirection: 'row',   // Mostrar elementos en una fila
    justifyContent: 'space-between', // Espacio entre los elementos
    alignItems: 'center',   // Centrar elementos verticalmente
    marginTop: 10,          // Espacio opcional entre la línea roja y la fecha
    fontWeight: "bold",
  },
  fechaText: {
    color: "#35669a",
    fontWeight: "bold",
    fontSize: 14,

  },
});
