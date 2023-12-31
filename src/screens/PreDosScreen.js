import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { CheckBox } from "react-native-elements";
import appFirebase from "../components/firebase-config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RealmConfigContext } from "./../../utils/models/context";
const { useRealm } = RealmConfigContext;
import { useRoute } from "@react-navigation/native";

const db = getFirestore(appFirebase);

export default function PreDosScreen(props) {
  const realm = useRealm();
  const { navigation } = props;
  const route = useRoute();
  const { numeroIdentificacion } = route.params;

  const [opcion1, setOpcion1] = useState("");
  const [opcion2, setOpcion2] = useState("");
  const [opcion3, setOpcion3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState([]);
  const [discapacidad, setDiscapacidad] = useState("");
  const [OptionSelection, setOptionSelection] = useState("");
  const [etnia, setEtnia] = useState("");
  const [indigena, setIndigena] = useState("");
  const [educativo, setEducativo] = useState("");
  const [educacionSuperior, setEducacionSuperior] = useState("");
  const [ocupacion, setOcupacion] = useState([]);
  const [trabajo, setTrabajo] = useState([]);
  const [urbano, setUrbano] = useState("");
  const [poblacion, setPoblacion] = useState("");

  const [salario, setSalario] = useState("");
  const [promedio, setPromedio] = useState("");
  const handleOption1Press = (opcion) => {
    if (opcion === opcion1) {
      // Si la opción seleccionada es la misma que se presionó, deselecciónala
      setOpcion1("");
    } else {
      // De lo contrario, establece la opción seleccionada en la opción presionada
      setOpcion1(opcion);
    }
  };

  const handleOption2Press = (opcion) => {
    if (opcion === opcion2) {
      // Si la opción seleccionada es la misma que se presionó, deselecciónala
      setOpcion2("");
    } else {
      // De lo contrario, establece la opción seleccionada en la opción presionada
      setOpcion2(opcion);
    }
  };

  const handleOption3Press = (opcion) => {
    if (opcion === opcion3) {
      // Si la opción seleccionada es la misma que se presionó, deselecciónala
      setOpcion3("");
    } else {
      // De lo contrario, establece la opción seleccionada en la opción presionada
      setOpcion3(opcion);
    }
  };
  const handleOption4Press = (opcion) => {
    if (opcion === selectedOption4) {
      // Si la opción seleccionada es la misma que se presionó, deselecciónala
      setSelectedOption4([]);
    } else {
      // De lo contrario, establece la opción seleccionada en la opción presionada
      setSelectedOption4(opcion);
    }
    if (opcion !== selectedOption4) {
      // Si la opción presionada es diferente, verifica si es una opción de población con preguntas anidadas
      if (opcion === "Población con Discapacidad") {
        // Establece la opción de población seleccionada y restablece las selecciones anidadas
        setSelectedOption4(opcion);
        setDiscapacidad("");
        setOptionSelection("");

      } else if (opcion === "Población LGBTIQ") {
        // Si se selecciona "Población LGBTIQ", restablece las selecciones anidadas
        setSelectedOption4(opcion);
        setDiscapacidad("");
        setOptionSelection("");

      } else {
        // Si se selecciona otra opción, establece solo la opción seleccionada
        setSelectedOption4(opcion);
        // Restablece las selecciones anidadas y el tipo de población seleccionado
        setDiscapacidad("");
        setOptionSelection("");

      }
    } else {
      // Si la opción presionada es la misma que la opción actualmente seleccionada, deselecciónala
      setSelectedOption4([]);
      // Restablece las selecciones anidadas y el tipo de población seleccionado
      setDiscapacidad("");
      setOptionSelection("");

    }
  };

  const handleOcupacionSelect = (option) => {
    // Resetear las opciones anidadas cuando se cambia la ocupación
    if ((ocupacion === "Trabajando" && option !== "Trabajando") ||
      (ocupacion === "Ninguna de las anteriores / Otras Actividades (pensionado, percibiendo renta, beneficiario de ayudas monetarias)" &&
        option !== "Ninguna de las anteriores / Otras Actividades (pensionado, percibiendo renta, beneficiario de ayudas monetarias)")) {
      // Restablecer las variables
      setPoblacion("");
      setTrabajo("");
      setSalario("");
      setPromedio("");
      
      // También puedes resetear otras variables relacionadas con "Trabajando" aquí si es necesario
    }
    setOcupacion(option);
  };
  const handleEducacion = (option)=>{

     // Resetear las opciones anidadas cuando se cambia la ocupación
     if ((educativo === "Educación Superior" && option !== "Educación Superior")) {
     // Restablecer las variables
     setEducacionSuperior("");
     
     
     // También puedes resetear otras variables relacionadas con "Trabajando" aquí si es necesario
   }
   setEducativo(option);

  }
  const handleSalario = (option)=>{

    // Resetear las opciones anidadas cuando se cambia la ocupación
    if ((salario === "Entre $332.000 y $653.781 (De 0 a < 1 SMMLV)"
     && option !== "Entre $332.000 y $653.781 (De 0 a < 1 SMMLV)")) {
    // Restablecer las variables
    setPromedio("");
    
    
    // También puedes resetear otras variables relacionadas con "Trabajando" aquí si es necesario
  }
  setSalario(option);

 }





  useEffect(() => {
    async function fetchSavedData() {
      try {
        const savedOpcion1 = await AsyncStorage.getItem("opcion1");
        const savedOpcion2 = await AsyncStorage.getItem("opcion2");
        const savedOpcion3 = await AsyncStorage.getItem("opcion3");
        const savedDiscapacidad = await AsyncStorage.getItem("discapacidad");
        const savedOptionSelection = await AsyncStorage.getItem("OptionSelection");
        const savedEtnia = await AsyncStorage.getItem("etnia");
        const savedIndigena = await AsyncStorage.getItem("indigena");
        const savedEducativo = await AsyncStorage.getItem("educativo");
        const savedEducacionSuperior = await AsyncStorage.getItem("educacionSuperior");
        const savedOcupacion = await AsyncStorage.getItem("ocupacion");
        const savedTrabajo = await AsyncStorage.getItem("trabajo");
        const savedSalario = await AsyncStorage.getItem("salario");
        const savedPromedio = await AsyncStorage.getItem("promedio");
        setOpcion1(savedOpcion1 || null);
        setOpcion2(savedOpcion2 || null);
        setOpcion3(savedOpcion3 || null);
        setDiscapacidad(savedDiscapacidad || "");
        setOptionSelection(savedOptionSelection || "");
        setEtnia(savedEtnia || null);
        setIndigena(savedIndigena || "");
        setEducativo(savedEducativo || "");
        setEducacionSuperior(savedEducacionSuperior || "");
        if (savedOcupacion) {
          const parsedOcupacion = JSON.parse(savedOcupacion);
          setOcupacion(Array.isArray(parsedOcupacion) ? parsedOcupacion : []);
        }
        if (savedTrabajo) {
          const parsedTrabajo = JSON.parse(savedTrabajo);
          setTrabajo(Array.isArray(parsedTrabajo) ? parsedTrabajo : []);
        }
        setSalario(savedSalario || "");
        setPromedio(savedPromedio || "");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchSavedData();
  }, []);

  const goToPreguntaTres = async () => {
    //Condicion de no dejar a la proxima pantalla
    if (
      opcion2 !== null &&
      etnia !== null &&
      (etnia === "Indígena" ? indigena !== "" : true) &&
      educativo !== null &&
      (educativo === "Educación Superior"
        ? educacionSuperior !== null
        : true) &&
      ocupacion !== null &&
      (ocupacion === "Trabajando" ? poblacion !== "" : true) &&
      (ocupacion === "Trabajando" ? trabajo.length > 0 : true) &&
      (ocupacion ===
        "Ninguna de las anteriores / Otras Actividades (pensionado, percibiendo renta, beneficiario de ayudas monetarias)"
        ? trabajo !== null
        : true) &&
      (ocupacion === "Trabajando" && salario === "Entre $332.000 y $653.781 (De 0 a < 1 SMMLV)" ? promedio !== "" : true)
    ) {
      try {
        // Evitar guardar valores null
        if (opcion1 !== null) await AsyncStorage.setItem("opcion1", opcion1);
        if (opcion2 !== null) await AsyncStorage.setItem("opcion2", opcion2);
        if (opcion3 !== null) await AsyncStorage.setItem("opcion3", opcion3);
        if (discapacidad !== null)
          await AsyncStorage.setItem("discapacidad", discapacidad);
        if (OptionSelection !== null)
          await AsyncStorage.setItem("OptionSelection", OptionSelection);
        if (etnia !== null) await AsyncStorage.setItem("etnia", etnia);
        if (indigena !== null) await AsyncStorage.setItem("indigena", indigena);
        if (educativo !== "")
          await AsyncStorage.setItem("educativo", educativo);
        if (educacionSuperior !== "")
          await AsyncStorage.setItem("educacionSuperior", educacionSuperior);
        await AsyncStorage.setItem("ocupacion", JSON.stringify(ocupacion));
        await AsyncStorage.setItem("trabajo", JSON.stringify(trabajo));
        if (salario !== "") await AsyncStorage.setItem("salario", salario);
        if (promedio !== "") await AsyncStorage.setItem("promedio", promedio);

        navigation.navigate("Pregunta 2.1", {

          numeroIdentificacion: numeroIdentificacion,

        });
        console.log(numeroIdentificacion)
        console.log(poblacion)
        console.log(salario)
        console.log(discapacidad)
        console.log(OptionSelection)
        console.log(promedio)
        console.log(trabajo)
        console.log(ocupacion)


      } catch (error) {
        console.error("Error saving data:", error);
      }
    } else {
      Alert.alert("Error", "Por favor completa todos los campos.");
    }
  };
  const SaveComponente2 = async () => {
    /* try {
      const pregunta2_4 = selectedOption4.toString();

      await addDoc(collection(db, "componentedos"), {
        pregunta2_1: opcion1,
        pregunta2_2: opcion2,
        pregunta2_3: opcion3,
        pregunta2_4: pregunta2_4,
        pregunta2_2_1: discapacidad,
        pregunta2_2_2: OptionSelection,
        pregunta2_4_1: etnia,
        pregunta2_4_1_nombre: indigena,
        pregunta2_5_2_UltimoNivel: educativo,
        pregunta2_5_1EducaSuperior: educacionSuperior,
        pregunta2_6_Ocupacion: ocupacion,
        pregunta2_7_Trabajo: trabajo,
        pregunta2_8_1_Salario: salario,
        pregunta2_8_2_Ingreso: promedio,
      });
    } catch (error) {
      console.error(error);
    } */

    try {
      // Convierte selectedOption4 en una cadena (si es necesario)
      let pregunta2_4 = selectedOption4;

      if (typeof pregunta2_4 !== "string") {
        // Si selectedOption4 no es una cadena, intenta convertirlo en cadena
        pregunta2_4 = String(selectedOption4);
      }
      // Asegúrate de que los campos opcionales no sean nulos antes de guardarlo




      // En la pantalla dos, actualiza los datos en el mismo objeto Persona
      realm.write(() => {
        const personaToUpdate = realm
          .objects("Persona")
          .filtered(`id_document = ${numeroIdentificacion}`);
        if (personaToUpdate.length > 0) {
          const persona = personaToUpdate[0];
          persona.component2 = {
            pregunta2_1: opcion1 || "",
            pregunta2_2: opcion2 || "",
            pregunta2_3: opcion3 || "",
            pregunta2_4: selectedOption4.toString(),
            pregunta2_2_1: discapacidad || "",
            pregunta2_2_2: OptionSelection.toString(),
            pregunta2_4_1: etnia || "",
            pregunta2_4_1_nombre: indigena,
            pregunta2_5_2_UltimoNivel: educativo || "",
            pregunta2_5_1EducaSuperior: educacionSuperior ? educacionSuperior : "",
            pregunta2_6_Ocupacion: ocupacion.toString(),
            pregunta2_6_1Poblacion: poblacion.toString(),
            pregunta2_7_Trabajo: trabajo.toString(),
            pregunta2_8_1_Salario: salario ? salario : "",
            pregunta2_8_2_Ingreso: promedio ? promedio : "",
          };
        }
      });

      console.log("Los datos se han guardado correctamente en Realm.");
    } catch (error) {
      console.error("Error al guardar datos en Realm:", error);
    }
  };

  return (
    <ScrollView>
      {/* Pregunta 2.1 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>CARACTERÍSTICAS SOCIODEMOGRÁFICAS</Text>
            <Text style={styles.question}>
              {" "}
              PREGUNTA 2.1 ( SELECCIÓN MÚLTIPLE - MÁXIMO 4 OPCIONES){" "}
            </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.pregunta}>
              Según su situación social, etapa de vida y rol en el que se
              identifique, indique el tipo de población al que pertenece:
            </Text>
            {/* Opcion 1 */}
            <Text style={styles.preguntas}> Opción 1</Text>
            <View style={styles.inputDate}>
              <CheckBox
                title="Población Migrante"
                checked={opcion1 === "Población Migrante"}
                onPress={() => handleOption1Press("Población Migrante")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  opcion1 === "Población Migrante"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Población en proceso de reincorporación / reintegración"
                checked={
                  opcion1 ===
                  "Población en proceso de reincorporación / reintegración"
                }
                onPress={() =>
                  handleOption1Press(
                    "Población en proceso de reincorporación / reintegración"
                  )
                }
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  opcion1 ===
                    "Población en proceso de reincorporación / reintegración"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />

              <CheckBox
                title="Víctima de Conflicto Armado - Ley 1448 del 2011"
                checked={
                  opcion1 === "Víctima de Conflicto Armado - Ley 1448 del 2011"
                }
                onPress={() =>
                  handleOption1Press(
                    "Víctima de Conflicto Armado - Ley 1448 del 2011"
                  )
                }
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  opcion1 === "Víctima de Conflicto Armado - Ley 1448 del 2011"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
            </View>
            {/* Opcion 2 */}
            <Text style={styles.preguntas}> Opción 2 </Text>
            <View style={styles.inputDate}>
              <CheckBox
                title="Infancia (10 a 11 años)"
                checked={opcion2 === "Infancia (10 a 11 años)"}
                onPress={() => handleOption2Press("Infancia (10 a 11 años)")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  opcion2 === "Infancia (10 a 11 años)"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />

              <CheckBox
                title="Adolescente (12 a 17 años)"
                checked={opcion2 === "Adolescente (12 a 17 años)"}
                onPress={() => handleOption2Press("Adolescente (12 a 17 años)")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  opcion2 === "Adolescente (12 a 17 años)"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Juventud (18 a 28 años)"
                checked={opcion2 === "Juventud (18 a 28 años)"}
                onPress={() => handleOption2Press("Juventud (18 a 28 años)")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  opcion2 === "Juventud (18 a 28 años)"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Adultez (29 a 59 años)"
                checked={opcion2 === "Adultez (29 a 59 años)"}
                onPress={() => handleOption2Press("Adultez (29 a 59 años)")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  opcion2 === "Adultez (29 a 59 años)"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Vejez (60 y más)            "
                checked={opcion2 === "Vejez (60 y más)"}
                onPress={() => handleOption2Press("Vejez (60 y más)")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  opcion2 === "Vejez (60 y más)"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
            </View>

            {/* Opcion 3 */}
            <Text style={styles.preguntas}> Opción 3 </Text>
            <View style={styles.inputDate}>
              <CheckBox
                title="Mujer embarazada y/o lactante"
                checked={opcion3 === "Mujer embarazada y/o lactante"}
                onPress={() =>
                  handleOption3Press("Mujer embarazada y/o lactante")
                }
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  opcion3 === "Mujer embarazada y/o lactante"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />

              <CheckBox
                title="Cabeza de Familia                 "
                checked={opcion3 === "Cabeza de Familia"}
                onPress={() => handleOption3Press("Cabeza de Familia")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  opcion3 === "Cabeza de Familia"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
            </View>

            <View>
              {/* Opcion 4 */}
              <Text style={styles.preguntas}> Opción 4 </Text>
              <View style={styles.inputDate}>
                <CheckBox
                  title="Población con Discapacidad"
                  checked={selectedOption4 === "Población con Discapacidad"}
                  onPress={() =>
                    handleOption4Press("Población con Discapacidad")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption4 === "Población con Discapacidad"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Población LGBTI"
                  checked={selectedOption4 === "Población LGBTI"}
                  onPress={() => handleOption4Press("Población LGBTI")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption4 === "Población LGBTI"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                {selectedOption4 === "Población con Discapacidad" && (
                  <View style={styles.questionContainer}>
                    <Text style={styles.question2}>
                      {" "}
                      PREGUNTA 2.2 ( SELECCIÓN ÚNICA ){" "}
                    </Text>
                    <View style={styles.linea1} />
                    <Text style={styles.pregunta}>
                      Si es una persona con discapacidad, indique la categoría
                      de la misma.
                    </Text>

                    <CheckBox
                      title="Física"
                      checked={discapacidad === "Física"}
                      onPress={() => setDiscapacidad("Física")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        discapacidad === "Física"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Visual"
                      checked={discapacidad === "Visual"}
                      onPress={() => setDiscapacidad("Visual")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        discapacidad === "Visual"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Auditiva"
                      checked={discapacidad === "Auditiva"}
                      onPress={() => setDiscapacidad("Auditiva")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        discapacidad === "Auditiva"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Intelectual"
                      checked={discapacidad === "Intelectual"}
                      onPress={() => setDiscapacidad("Intelectual")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        discapacidad === "Intelectual"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Psicosocial"
                      checked={discapacidad === "Psicosocial"}
                      onPress={() => setDiscapacidad("Psicosocial")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        discapacidad === "Psicosocial"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Sordoceguera"
                      checked={discapacidad === "Sordoceguera"}
                      onPress={() => setDiscapacidad("Sordoceguera")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        discapacidad === "Sordoceguera"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Múltiple"
                      checked={discapacidad === "Múltiple"}
                      onPress={() => setDiscapacidad("Múltiple")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        discapacidad === "Múltiple"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />

                    <Text style={styles.question2}>
                      {" "}
                      PREGUNTA 2.3 ( SELECCIÓN ÚNICA ){" "}
                    </Text>
                    <View style={styles.linea1} />

                    <Text style={styles.pregunta}>
                      Si es una persona con discapacidad, ¿Cuenta en la
                      actualidad con el Certificado de Discapacidad a partir del
                      procedimiento de valoración clínica realizado por un
                      equipo multidisciplinario de salud**?
                    </Text>

                    <View style={styles.inputDate}>
                      <CheckBox
                        title="Si"
                        checked={OptionSelection === "Si"}
                        onPress={() => setOptionSelection("Si")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          OptionSelection === "Si"
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="No"
                        checked={OptionSelection === "No"}
                        onPress={() => setOptionSelection("No")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          OptionSelection === "No"
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                    </View>
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Pregunta 2.4 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question1}>
              {" "}
              PREGUNTA 2.4 ( SELECCIÓN ÚNICA ){" "}
            </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.pregunta}>
              De acuerdo a sus costumbres y tradiciones, usted se considera:
            </Text>
            <CheckBox
              title="Indígena"
              checked={etnia === "Indígena"}
              onPress={() => setEtnia("Indígena")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                etnia === "Indígena"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="ROM (Gitanos)"
              checked={etnia === "ROM (Gitanos)"}
              onPress={() => setEtnia("ROM (Gitanos)")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                etnia === "ROM (Gitanos)"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="Raizal del Archipiélago de San Andrés y Providencia"
              checked={
                etnia === "Raizal del Archipiélago de San Andrés y Providencia"
              }
              onPress={() =>
                setEtnia("Raizal del Archipiélago de San Andrés y Providencia")
              }
              containerStyle={styles.checkBoxContainer}
              textStyle={
                etnia === "Raizal del Archipiélago de San Andrés y Providencia"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="Palenquero de San Basilio"
              checked={etnia === "Palenquero de San Basilio"}
              onPress={() => setEtnia("Palenquero de San Basilio")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                etnia === "Palenquero de San Basilio"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="Negro(a), Mulato(a), Afrocolombiano(a) o Afrodescendiente"
              checked={
                etnia ===
                "Negro(a), Mulato(a), Afrocolombiano(a) o Afrodescendiente"
              }
              onPress={() =>
                setEtnia(
                  "Negro(a), Mulato(a), Afrocolombiano(a) o Afrodescendiente"
                )
              }
              containerStyle={styles.checkBoxContainer}
              textStyle={
                etnia ===
                  "Negro(a), Mulato(a), Afrocolombiano(a) o Afrodescendiente"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            <CheckBox
              title="Ninguno de los anteriores"
              checked={etnia === "Ninguno de los anteriores"}
              onPress={() => setEtnia("Ninguno de los anteriores")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                etnia === "Ninguno de los anteriores"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />
            {etnia == "Indígena" && (
              <View>
                <Text style={styles.preguntas}>
                  Indique el nombre del pueblo indígena al que pertenece:
                </Text>
                <TextInput
                  placeholder="Pueblo indígena"
                  style={styles.inputLabels}
                  underlineColorAndroid="transparent"
                  selectionColor="#efefef"
                  value={indigena}
                  onChangeText={setIndigena}
                />
              </View>
            )}
          </View>
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question1}>
              {" "}
              PREGUNTA 2.5 ( SELECCIÓN ÚNICA ){" "}
            </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.pregunta}>
              Indique cuál es el último nivel educativo alcanzado por usted:{" "}
            </Text>
            <View style={styles.inputDate}>
              <CheckBox
                title="Preescolar"
                checked={educativo === "Preescolar"}
                onPress={() => handleEducacion("Preescolar")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  educativo === "Preescolar"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />

              <CheckBox
                title="Educación básica primaria (1 a 5 grado)"
                checked={
                  educativo === "Educación básica primaria (1 a 5 grado)"
                }
                onPress={() =>
                  handleEducacion("Educación básica primaria (1 a 5 grado)")
                }
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  educativo === "Educación básica primaria (1 a 5 grado)"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Educación básica secundaria (6 a 9 grado)"
                checked={
                  educativo === "Educación básica secundaria (6 a 9 grado)"
                }
                onPress={() =>
                  handleEducacion("Educación básica secundaria (6 a 9 grado)")
                }
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  educativo === "Educación básica secundaria (6 a 9 grado)"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Educación media (10 a 11 grado)"
                checked={educativo === "Educación media (10 a 11 grado)"}
                onPress={() => handleEducacion("Educación media (10 a 11 grado)")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  educativo === "Educación media (10 a 11 grado)"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Educación Superior"
                checked={educativo === "Educación Superior"}
                onPress={() => handleEducacion("Educación Superior")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  educativo === "Educación Superior"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />

              {educativo === "Educación Superior" && (
                <View style={styles.questionContainer}>
                  <Text style={styles.preguntas}>
                    Seleccione el tipo de nivel educativo que tiene
                  </Text>
                  <CheckBox
                    title="Técnico"
                    checked={educacionSuperior === "Técnico"}
                    onPress={() => setEducacionSuperior("Técnico")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      educacionSuperior === "Técnico"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Técnologica"
                    checked={educacionSuperior === "Técnologica"}
                    onPress={() => setEducacionSuperior("Técnologica")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      educacionSuperior === "Técnologica"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Profesional"
                    checked={educacionSuperior === "Profesional"}
                    onPress={() => setEducacionSuperior("Profesional")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      educacionSuperior === "Profesional"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <View style={styles.linea} />
                </View>
              )}

              <CheckBox
                title="Postgrado"
                checked={educativo === "Postgrado"}
                onPress={() => handleEducacion("Postgrado")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  educativo === "Postgrado"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />

              <CheckBox
                title="Ninguno"
                checked={educativo === "Ninguno"}
                onPress={() => handleEducacion("Ninguno")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  educativo === "Ninguno"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question1}>
              {" "}
              PREGUNTA 2.6 ( SELECCIÓN ÚNICA ){" "}
            </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.pregunta}>
              Durante los últimos 6 meses, ha estado principalmente:{" "}
            </Text>

            <View style={styles.inputDate}>
              <CheckBox
                title="Trabajando"
                checked={ocupacion === "Trabajando"}
                onPress={() => handleOcupacionSelect("Trabajando")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  ocupacion === "Trabajando"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              {ocupacion === "Trabajando" && (
                <View style={styles.questionContainer}>
                  <Text style={styles.preguntas}>
                    Seleccione el tipo de trabajo
                  </Text>
                  <CheckBox
                    title="Urbano"
                    checked={poblacion === "Urbano"}
                    onPress={() => setPoblacion("Urbano")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      poblacion === "Urbano"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Rural"
                    checked={poblacion === "Rural"}
                    onPress={() => setPoblacion("Rural")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      poblacion === "Rural"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />


                  <View style={styles.linea} />
                </View>
              )}
            </View>

            <CheckBox
              title="En búsqueda de empleo (cesante)"
              checked={ocupacion === "En búsqueda de empleo (cesante)"}
              onPress={() => handleOcupacionSelect("En búsqueda de empleo (cesante)")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                ocupacion === "En búsqueda de empleo (cesante)"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />

            <CheckBox
              title="Con incapacidad permanente para trabajar"
              checked={ocupacion === "Con incapacidad permanente para trabajar"}
              onPress={() =>
                handleOcupacionSelect("Con incapacidad permanente para trabajar")
              }
              containerStyle={styles.checkBoxContainer}
              textStyle={
                ocupacion === "Con incapacidad permanente para trabajar"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />

            <CheckBox
              title="Estudiando"
              checked={ocupacion === "Estudiando"}
              onPress={() => handleOcupacionSelect("Estudiando")}
              containerStyle={styles.checkBoxContainer}
              textStyle={
                ocupacion === "Estudiando"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />

            <CheckBox
              title="Actividades del hogar (sin ingresos)"
              checked={ocupacion === "Actividades del hogar (sin ingresos)"}
              onPress={() =>
                handleOcupacionSelect("Actividades del hogar (sin ingresos)")
              }
              containerStyle={styles.checkBoxContainer}
              textStyle={
                ocupacion === "Actividades del hogar (sin ingresos)"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />

            <CheckBox
              title="Ninguna de las anteriores / Otras Actividades (pensionado, percibiendo renta, beneficiario de ayudas monetarias)"
              checked={
                ocupacion ===
                "Ninguna de las anteriores / Otras Actividades (pensionado, percibiendo renta, beneficiario de ayudas monetarias)"
              }
              onPress={() =>
                handleOcupacionSelect(
                  "Ninguna de las anteriores / Otras Actividades (pensionado, percibiendo renta, beneficiario de ayudas monetarias)"
                )
              }
              containerStyle={styles.checkBoxContainer}
              textStyle={
                ocupacion ===
                  "Ninguna de las anteriores / Otras Actividades (pensionado, percibiendo renta, beneficiario de ayudas monetarias)"
                  ? styles.selectedOptionText
                  : styles.checkBoxText
              }
              checkedColor="#BA0C2F"
            />

            {ocupacion === "Trabajando" && (
              <View style={styles.questionContainer}>
                <Text style={styles.question2}>
                  {" "}
                  PREGUNTA 2.7 ( SELECCIÓN ÚNICA ){" "}
                </Text>
                <View style={styles.linea1} />
                <Text style={styles.preguntas}>
                  La actividad económica (formal o informal) en la que trabaja
                  en la actualidad se relaciona con:
                </Text>
                <CheckBox
                  title="Industria"
                  checked={trabajo === "Industria"}
                  onPress={() => setTrabajo("Industria")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    trabajo === "Industria"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Comercio"
                  checked={trabajo === "Comercio"}
                  onPress={() => setTrabajo("Comercio")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    trabajo === "Comercio"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Agrícola"
                  checked={trabajo === "Agrícola"}
                  onPress={() => setTrabajo("Agrícola")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    trabajo === "Agrícola"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Pecuaria"
                  checked={trabajo === "Pecuaria"}
                  onPress={() => setTrabajo("Pecuaria")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    trabajo === "Pecuaria"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Servicios ó intangibles"
                  checked={trabajo === "Servicios ó intangibles"}
                  onPress={() => setTrabajo("Servicios ó intangibles")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    trabajo === "Servicios ó intangibles"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Otra actividad"
                  checked={trabajo === "Otra actividad"}
                  onPress={() => setTrabajo("Otra actividad")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    trabajo === "Otra actividad"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
              </View>
            )}

            {(ocupacion.includes("Trabajando") ||
              ocupacion.includes(
                "Ninguna de las anteriores / Otras Actividades (pensionado, percibiendo renta, beneficiario de ayudas monetarias)"
              )) && (
                <View style={styles.questionContainer}>
                  <Text style={styles.question2}>
                    {" "}
                    PREGUNTA 2.8 ( SELECCIÓN ÚNICA ){" "}
                  </Text>
                  <View style={styles.linea1} />
                  <Text style={styles.preguntas}>
                    ¿Cuál es su ingreso mensual promedio?
                  </Text>
                  <View style={styles.inputDate}>
                    <CheckBox
                      title="Entre $332.000 y $653.781 (De 0 a < 1 SMMLV)"
                      checked={
                        salario === "Entre $332.000 y $653.781 (De 0 a < 1 SMMLV)"
                      }
                      onPress={() =>
                        handleSalario("Entre $332.000 y $653.781 (De 0 a < 1 SMMLV)")
                      }
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        salario === "Entre $332.000 y $653.781 (De 0 a < 1 SMMLV)"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />

                    {salario ===
                      "Entre $332.000 y $653.781 (De 0 a < 1 SMMLV)" && (
                        <View style={styles.questionContainer}>
                          <Text style={styles.preguntas}>*Seleccione*</Text>
                          <Text style={styles.preguntas}>
                            Linea de pobreza extrema
                          </Text>
                          <View>
                            <CheckBox
                              title="Entre $0.000 y $145.004"
                              checked={promedio === "Entre $0.000 y $145.004"}
                              onPress={() => setPromedio("Entre $0.000 y $145.004")}
                              containerStyle={styles.checkBoxContainer}
                              textStyle={
                                promedio === "Entre $0.000 y $145.004"
                                  ? styles.selectedOptionText
                                  : styles.checkBoxText
                              }
                              checkedColor="#BA0C2F"
                            />
                          </View>

                          <Text style={styles.preguntas}>
                            Linea de pobreza monetaria
                          </Text>

                          <View>
                            <CheckBox
                              title="Entre $146.000 y $331.688"
                              checked={promedio === "Entre $146.000 y $331.688"}
                              onPress={() =>
                                setPromedio("Entre $146.000 y $331.688")
                              }
                              containerStyle={styles.checkBoxContainer}
                              textStyle={
                                promedio === "Entre $146.000 y $331.688"
                                  ? styles.selectedOptionText
                                  : styles.checkBoxText
                              }
                              checkedColor="#BA0C2F"
                            />
                          </View>

                          <Text style={styles.preguntas}>
                            Condiciones de Vulnerabilidad
                          </Text>

                          <View>
                            <CheckBox
                              title="Entre $332.000 y $653.781"
                              checked={promedio === "Entre $332.000 y $653.781"}
                              onPress={() =>
                                setPromedio("Entre $332.000 y $653.781")
                              }
                              containerStyle={styles.checkBoxContainer}
                              textStyle={
                                promedio === "Entre $332.000 y $653.781"
                                  ? styles.selectedOptionText
                                  : styles.checkBoxText
                              }
                              checkedColor="#BA0C2F"
                            />

                            <View style={styles.linea} />
                          </View>
                        </View>
                      )}

                    <CheckBox
                      title="Entre $654.000 y $908.000 1 SMMLV"
                      checked={salario === "Entre $654.000 y $908.000 1 SMMLV"}
                      onPress={() =>
                        handleSalario("Entre $654.000 y $908.000 1 SMMLV")
                      }
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        salario === "Entre $654.000 y $908.000 1 SMMLV"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />

                    <CheckBox
                      title="Más de 1 y ≤1.5 SMMLV ($910.000 - $1.362.000)"
                      checked={
                        salario ===
                        "Más de 1 y ≤1.5 SMMLV ($910.000 - $1.362.000)"
                      }
                      onPress={() =>
                        handleSalario(
                          "Más de 1 y ≤1.5 SMMLV ($910.000 - $1.362.000)"
                        )
                      }
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        salario ===
                          "Más de 1 y ≤1.5 SMMLV ($910.000 - $1.362.000)"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />

                    <CheckBox
                      title="Mayor a 1.5 SMMLV ( ≥$1.365.000)"
                      checked={salario === "Mayor a 1.5 SMMLV ( ≥$1.365.000)"}
                      onPress={() =>
                        handleSalario("Mayor a 1.5 SMMLV ( ≥$1.365.000)")
                      }
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        salario === "Mayor a 1.5 SMMLV ( ≥$1.365.000)"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                  </View>
                </View>
              )}
            {/* Botón */}
            <TouchableOpacity
              style={styles.boton}
              onPress={() => {
                goToPreguntaTres();
                SaveComponente2();
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

  inputLabels: {
    backgroundColor: "white",
    height: 40,
    borderBottomWidth: 1, // Añadimos el borde inferior
    borderBottomColor: "#35669a", // Color del borde inferior
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 10,
  },
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
  checkBoxText: {
    fontSize: 16,
  },

  inputDate: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
  },

  // Estilo para el texto de las opciones seleccionadas
  selectedOptionText: {
    color: "#BA0C2F", // Color de texto para la opción seleccionada
    fontWeight: "bold", // Puedes ajustar el peso del texto si lo deseas
    fontSize: 16,
  },

  questionContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});
