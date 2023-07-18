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

export default function PreUnoScreen(props) {
  const { navigation } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");

  const [Celular, setCelular] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
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

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [fecha, setFecha] = useState("");

  {
    /* Funcion   */
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      "Hora: " + tempDate.getHours() + " minutos" + tempDate.getMinutes();
    // setText(fdate+ " "+ ftime);
    setFecha(fDate);
    setHora(fTime);
  };

  const goToPreguntaDos = () => {
    navigation.navigate("Pregunta 1.2");
    console.log("Opción seleccionada:", selectedOption);
  };
  return (
    <ScrollView>
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>
              Datos de identificación y localización
            </Text>

            {/* Contenedor Hora y fecha de dilingeciamiento de información */}

            <Text> Apellidos</Text>
            <TextInput
              placeholder="Ingresa tus apellidos"
              style={styles.textoInput}
            />
            <Text> Nombres</Text>
            <TextInput
              placeholder="Ingresa tus nombres"
              style={styles.textoInput}
            />
            <Text> Sexo </Text>
            <View style={styles.inputDate}>
              <CheckBox
                title="Masculino"
                checked={selectedOption === "Masculino"}
                onPress={() => setSelectedOption("Masculino")}
                containerStyle={styles.checkBoxContainer}
                textStyle={styles.checkBoxText}
              />
              <CheckBox
                title="Femenino"
                checked={selectedOption === "Femenino"}
                onPress={() => setSelectedOption("Femenino")}
                containerStyle={styles.checkBoxContainer}
                textStyle={styles.checkBoxText}
              />
            </View>

            {/* Fecha Nacimiento */}
            <Text> Fecha Nacimiento</Text>
            <View style={styles.inputDate}>
              <TextInput
                placeholder="DD/MM/AAAA"
                style={styles.textoDate}
                value={fecha}
                keyboardType="numeric"
                maxLength={12}
                onPress={() => showMode("date")}
              />

              <TouchableOpacity
                style={styles.botonDate}
                onPress={() => showMode("date")}
              >
                <Text style={styles.subtitle}> Date </Text>
              </TouchableOpacity>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display=" default"
                onChange={onChange}
                miniumDate={new Date("01-01-1900")}
              />
            )}

            <Text> Edad</Text>
            <TextInput
              placeholder="Ingresa tu edad"
              style={styles.textoInput}
            />

            <Text> Departamento</Text>
            <TextInput
              placeholder="Ingresa el departamento perteneciente"
              style={styles.textoInput}
            />
            <Text> Municipio</Text>
            <TextInput
              placeholder="Ingresa el municipio perteneciente"
              style={styles.textoInput}
            />

            <Text> Área</Text>

            <CheckBox
              title="Cabecera Municipal (Area urbana)"
              checked={selectedOption1 === "Cabecera municipal"}
              onPress={() => setSelectedOption1("Cabecera municipal")}
              containerStyle={styles.checkBoxContainer}
              textStyle={styles.checkBoxText}
            />
            <CheckBox
              title="Centro poblado (Inspección, Corregimiento, caserío)"
              checked={selectedOption1 === "Centro poblado"}
              onPress={() => setSelectedOption1("Centro poblado")}
              containerStyle={styles.checkBoxContainer}
              textStyle={styles.checkBoxText}
            />

            <CheckBox
              title="Rural disperso"
              checked={selectedOption1 === "Rural disperso"}
              onPress={() => setSelectedOption1("Rural disperso")}
              containerStyle={styles.checkBoxContainer}
              textStyle={styles.checkBoxText}
            />

            <Text>
              {" "}
              Nombre del centro poblado (inspección, corregimiento, caserio)
            </Text>
            <TextInput
              placeholder="Ingresa el nombre del centro poblado"
              style={styles.textoInput}
            />

            <Text>
              {" "}
              Nombre del barrio o vereda (vereda rural - barrio urbano)
            </Text>
            <TextInput
              placeholder="Ingresa el nombre del barrio o vereda"
              style={styles.textoInput}
            />

            <Text> Dirección </Text>
            <TextInput
              placeholder="Ingresa su dirección"
              style={styles.textoInput}
            />

            <Text> Número de teléfono</Text>

            <TextInput
              style={styles.textoInput}
              placeholder="Ingresa su número de celular"
              keyboardType="numeric"
              maxLength={10}
              onChangeText={setCelular}
              value={Celular}
            />

            <Text> Estrato social</Text>

            <View>
              <RNPickerSelect
                placeholder={{ label: "Selecciona una opción", value: null }}
                value={selectedValue}
                onValueChange={(value) => setSelectedValue(value)}
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

  titulo: {
    textAlign: "center",
    fontSize: 22,
  },

  /* Estilo Formulario*/

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
    padding: 20,
  },

  /* Texto casillas nombre y apellido*/

  textoInput: {
    borderColor: "slategray",
    borderWidth: 1,
    padding: 2,
    marginTop: 10,
    borderRadius: 8,
  },

  /* Estilo Fecha Nacimiento*/
  inputDate: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  checkBoxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    margin: 5,
    marginBottom: 10,
  },

  botonDate: {
    backgroundColor: "#02B3C6",
    borderRadius: 5,
    padding: 10,
    width: "30%",
    height: "90%",
    marginTop: 10,
    marginLeft: 10,
  },
  textoDate: {
    borderColor: "slategray",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
  },

  subtitle: {
    color: "white",
    fontSize: 18,
  },
});
