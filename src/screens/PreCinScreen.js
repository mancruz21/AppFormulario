import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Button, CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import appFirebase from "../components/firebase-config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const db = getFirestore(appFirebase);
import { RealmConfigContext } from "./../../utils/models/context";
const { useRealm } = RealmConfigContext;
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PreCinScreen(props) {
  const realm = useRealm();
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption2, setSelectedOption2] = useState([]);

  const [selectedOption222, setSelectedOption222] = useState([]);

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selected1Option, setSelected1Option] = useState([]);
  const [selected1Option2, setSelected1Option2] = useState([]);

  const [selectedOptions1, setSelectedOptions1] = useState([]);

  const [selectedOptions4, setSelectedOptions4] = useState([]);
  const [selectedOption9, setSelectedOption9] = useState(null);
  const [selectedOption8, setSelectedOption8] = useState(null);

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions5, setSelectedOptions5] = useState([]);

  const [selectedOption0, setSelectedOption0] = useState("");
  const [selectedOptions0, setSelectedOptions0] = useState([]);

  const [selectedOption22, setSelectedOption22] = useState("");
  const [selectedOption11, setSelectedOption11] = useState([]);
  //Constantes para campos de texto municipios
  const [municipio, setMunicipio] = useState("");
  const [otro, setOtro] = useState("");
  const [otro1, setOtro1] = useState("");
  const [otro2, setOtro2] = useState("");
  const [otro3, setOtro3] = useState("");
  const [nombre, setNombre] = useState("");
  const [lugar, setLugar] = useState("");
  const [showTextInput, setShowTextInput] = useState(false);
  const [showTextInput1, setShowTextInput1] = useState(false);
  const [showTextInput2, setShowTextInput2] = useState(false);
  const [showTextInput3, setShowTextInput3] = useState(false);
  const [transporte, setTransporte] = useState([]);

  //Constantes para campos de texto, Otros
  const [motivo, setMotivo] = useState("");
  const [motivo1, setMotivo1] = useState("");
  const [motivo2, setMotivo2] = useState("");
  const [motivo3, setMotivo3] = useState("");

  //Constante para pregunta 5.12
  const [selectedColumns, setSelectedColumns] = useState(Array(4).fill(-1));

  const handleCellSelection = (row, col) => {
    if (row === 0 || col === 0) {
      // Evitar selección en la primera fila y la primera columna
      return;
    }

    const newSelectedColumns = [...selectedColumns];
    if (newSelectedColumns[col] === row) {
      // Deseleccionar la celda si ya está seleccionada
      newSelectedColumns[col] = -1;
    } else {
      // Seleccionar la celda si no está seleccionada
      newSelectedColumns[col] = row;
    }
    setSelectedColumns(newSelectedColumns);
  };

  const cellColors = Array(5)
    .fill(null)
    .map((_, rowIndex) =>
      Array(4)
        .fill("white")
        .map((color, colIndex) =>
          colIndex === 0
            ? "white"
            : selectedColumns[colIndex] === rowIndex
              ? "#BA0C2F"
              : "white"
        )
    );

  const cellTexts = [
    [
      "",
      "Costo en dinero de la atención",
      "Costo en dinero del transporte",
      "Tiempo de desplazamiento hasta el servicio de rehabilitación",
    ],
    ["BAJA", "Entre $0  $2.900", "Entre $0  $2.900", "Entre 15m  30m"],
    [
      "MEDIA",
      "Entre $3.000  $14.900",
      "Entre $3.000  $9.900",
      "Entre 30m  60m",
    ],
    [
      "ALTA",
      "Entre $15.000  $29.900",
      "Entre $10.000  $29.900",
      "Entre 60m  90m",
    ],
    ["MUY ALTA", "Entre $30.000  $60.000", "Entre $29.900  $60.000", "> 90m"],
  ];

  //Constante para pregunta 5.13

  const [selectedColumns1, setSelectedColumns1] = useState(Array(3).fill(-1));

  const handleCellSelection1 = (row, col) => {
    if (row === 0 || col === 0) {
      // Evitar selección en la primera fila y la primera columna
      return;
    }

    const newSelectedColumns1 = [...selectedColumns1];
    if (newSelectedColumns1[col] === row) {
      // Deseleccionar la celda si ya está seleccionada
      newSelectedColumns1[col] = -1;
    } else {
      // Seleccionar la celda si no está seleccionada
      newSelectedColumns1[col] = row;
    }
    setSelectedColumns1(newSelectedColumns1);
  };

  const cellColors1 = Array(4)
    .fill(null)
    .map((_, rowIndex) =>
      Array(4)
        .fill("white")
        .map((color, colIndex) =>
          colIndex === 0
            ? "white"
            : selectedColumns1[colIndex] === rowIndex
              ? "#BA0C2F"
              : "white"
        )
    );

  const cellTexts1 = [
    [
      "",
      "Oportunidad en la asignación de la cita",
      "Calidad en la atención por parte del profesional",
      "Satisfacción de la atención recibida",
    ],
    ["ALTA", "< 3 días", "8 - 10 ", "8 - 10 "],
    ["MEDIA", "3 - 5 días", "4 - 7 ", "4 - 7 "],
    ["BAJA", "> 5 días", "1 - 3 ", "1 - 3 "],
  ];
  const [opcionOtro, setOpcionOtro] = useState(false);
  const [otroTexto, setOtroTexto] = useState("");
  const [selecteOptions, setSelecteOptions] = useState([]);

  useEffect(() => {
    // Check if the "Otro" option is selected and show/hide the text input accordingly
    if (selecteOptions.includes(5)) {
      setOpcionOtro(true);
    } else {
      setOpcionOtro(false);
      setOtroTexto("");
    }
  }, [selecteOptions]);
  const { navigation } = props;

  const goToPreguntaSeis = () => {
    if (
      selectedOption !== "" &&
      (selectedOption === "Si" ? selectedOptions.length !== 0 : true) &&
      selectedOption3 !== "" &&
      (selectedOption3 === "Si" ? selectedOption2.length !== 0 : true) &&
      (selectedOption3 === "No" ? selectedOption22.length !== 0 : true) &&
      selectedOption1 !== "" &&
      (selectedOption1 === "No" ? (selected1Option.length !== 0) : true)


    ) {
      navigation.navigate("Pregunta 2.4");
      console.log("Opcion 1:", selectedOption11);
    } else {
      Alert.alert("Error", "Por favor completa todos los campos.");
    }
    try {
      realm.write(() => {
        const personaToUpdate = realm
          .objects("Persona")
          .filtered("id_document = 1002965852");
        if (personaToUpdate.length > 0) {
          const persona = personaToUpdate[0];
          persona.component5 = {
            pregunta5_1: "string",
            pregunta5_1_SI: "string",
            pregunta5_1_OtrosServi: "string",
            pregunta5_1_Otro: "string",
            pregunta5_2: "string",
            pregunta5_3: "string",
            pregunta5_3_1_OtrosServ: "string",
            pregunta5_3_2_Otro: "string",
            pregunta5_4: "string",
            pregunta5_4_1: "string",
            pregunta5_5: "string",
            pregunta5_6: "string",
            pregunta5_6_1_OtroServ: "string",
            pregunta5_6_2_Otro: "string",
            pregunta5_7: "string",
            pregunta5_8: "string",
            pregunta5_8_1: "string",
            pregunta5_8_2: "string",
            pregunta5_9: "string",
            pregunta5_10: "string",
            pregunta5_10_1: "string",
            pregunta5_10_2: "string",
            pregunta5_11: "string",
            pregunta5_12: "string",
            pregunta5_13: "string",
            pregunta5_14: "string",
            pregunta5_14_1: "string",
          };
        }
      });
      console.log("Los datos se han guardado correctamente en Realm.");
    } catch (error) {
      console.error("Error al guardar datos en Realm:", error);
    }
  };
  const handleMunicipioChange = (text) => {
    setMunicipio(text);
  };
  const handleOtro = (text) => {
    setOtro(text);
  };
  const handleOtro1 = (text) => {
    setOtro1(text);
  };
  const handleOtro2 = (text) => {
    setOtro2(text);
  };
  const handleOtro3 = (text) => {
    setOtro3(text);
  };
  const handleOption2Select = (option) => {
    setSelectedOption2(option);
    setMunicipio("");
    if (selectedOption2.includes(option)) {
      setSelectedOption2(selectedOption2.filter((item) => item !== option));
    } else {
      if (selectedOption3 === "Si" && selectedOption2.length < 3) {
        setSelectedOption2([...selectedOption2, option]);
      } else if (selectedOption3 === "No" && selectedOption2.length < 1) {
        setSelectedOption2([...selectedOption2, option]);
      }
    }
  };
  const handleOption8Select = (option) => {
    setSelectedOption8(option);
    setNombre("");
    setLugar("");
  };

  const handleOption9Select = (option) => {
    setSelectedOption9(option);
  };
  //Metodo general de opciones SI y NO 5.5
  const handleOption1Select = (option) => {
    if (selected1Option.includes(option)) {
      setSelected1Option(selected1Option.filter((item) => item !== option));
    } else {
      if (selectedOption1 === "Si" && selected1Option.length < 3) {
        setSelected1Option([...selected1Option, option]);
      } else if (selectedOption1 === "No" && selected1Option.length < 1) {
        setSelected1Option([...selected1Option, option]);
      }
    }
  };
  const handleOption1Select2 = (option) => {
    // Deselecciona todas las opciones
    setSelected1Option2([]);

    // Luego selecciona la opción actual
    setSelected1Option2([option]);
  };
  const handleOption4Select = (option) => {
    // Check if the option is already selected
    const isOptionSelected = selectedOptions4.includes(option);

    if (isOptionSelected) {
      // If the option is already selected, remove it from the selected options
      setSelectedOptions4((prevSelectedOptions) =>
        prevSelectedOptions.filter(
          (selectedOption) => selectedOption !== option
        )
      );
    } else {
      // If the option is not selected, add it to the selected options (limit to two options)
      if (selectedOptions4.length < 2) {
        setSelectedOptions4((prevSelectedOptions) => [
          ...prevSelectedOptions,
          option,
        ]);
      }
    }
  };
  const handleNombreChange = (text) => {
    setNombre(text);
  };

  const handleLugarChange = (text) => {
    setLugar(text);
  };
  //Funcion Opciones pregunta 5.6
  const handleOptionChange5 = (option) => {
    if (selectedOption222.includes(option)) {
      setSelectedOption222(selectedOption222.filter((item) => item !== option));
    } else {
      if (selectedOption222.length < 3) {
        setSelectedOption222([...selectedOption222, option]);
        if (option === "Otros servicios de salud") {
          setShowOtherServices1Text(true);
        }
      }
    }
  };

  SaveComponente5 = async () => {
    try {
      const dataToSave = {
        pregunta5_1: selectedOption,
        pregunta5_1_SI: selectedOptions,
        pregunta5_1_OtrosServi: selectedOptions5,
        pregunta5_1_Otro: otro,
        pregunta5_2: selectedOption3,
        pregunta5_3: selectedOption2,
        pregunta5_3_1_OtrosServ: selectedOptions1,
        pregunta5_3_2_Otro: otro1,
        pregunta5_4: selectedOption22,
        pregunta5_4_1: municipio,
        pregunta5_5: selectedOption1,
        pregunta5_6: selectedOption222,
        pregunta5_6_1_OtroServ: selectedOption11,
        pregunta5_6_2_Otro: otro2,
        pregunta5_7: selectedOptions4,
        pregunta5_8: selectedOption8,
        pregunta5_8_1: nombre,
        pregunta5_8_2: lugar,
        pregunta5_9: selectedOption9,
        pregunta5_10: selectedOption0,
        pregunta5_10_1: selectedOptions0,
        pregunta5_10_2: motivo,
        pregunta5_11: selected1Option,
        pregunta5_12: handleCellSelection,
        pregunta5_13: handleCellSelection1,
        pregunta5_14: transporte,
        pregunta5_14_1: otro3,
      };

      // Agregar un nuevo documento a la colección "respuestas"
      /* await addDoc(respuestasCollectionRef, dataToSave); */

      Alert.alert("Alerta", "Sus respuestas fueron guardadas con éxito");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Hubo un error al guardar sus respuestas");
    }
  };

  //Metodo General checkBox 5.1 opciones que desglosan al presionar SI
  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      if (selectedOptions.length < 3) {
        setSelectedOptions([...selectedOptions, option]);
        if (option === "Otros servicios de salud") {
          setShowOtherServicesText(true);
        }
      }
    }
  };

  const handleOptionChangedos = (option) => {
    if (selectedOption2.includes(option)) {
      setSelectedOption2(selectedOption2.filter((item) => item !== option));
    } else {
      if (selectedOption2.length < 3) {
        setSelectedOption2([...selectedOption2, option]);
        if (option === "Otros servicios de salud") {
          setShowOtherServices1Text(true);
        }
      }
    }
  };

  const handleOptionChangecinco = (option) => {
    if (selectedOptions5.includes(option)) {
      setSelectedOptions5(selectedOptions5.filter((item) => item !== option));

      if (option === "Otro") {
        setShowTextInput(false);
      }
    } else {
      if (selectedOptions5.length < 3) {
        setSelectedOptions5([...selectedOptions5, option]);

        if (option === "Otro") {
          setShowTextInput(true);
        }
      }
    }
  };

  //Metodo para campo de texto 5.10 Segundo-Otro motivo
  const handleMotivoChange = (text) => {
    setMotivo(text);
  };
  const [showOtherServicesText, setShowOtherServicesText] = useState(false);
  const [showOtherServices1Text, setShowOtherServices1Text] = useState(false);
  const [showOtherServices2Text, setShowOtherServices2Text] = useState(false);

  //Metodo General checkBox 5.10 opciones que desglosan

  const handleOptionChange0 = (option) => {
    if (selectedOptions0.includes(option)) {
      setSelectedOptions0(selectedOptions0.filter((item) => item !== option));
    } else {
      if (selectedOptions0.length < 3) {
        setSelectedOptions0([...selectedOptions0, option]);
      }
    }
  };

  const handleOptionTransporte = (option) => {
    if (transporte.includes(option)) {
      setTransporte(transporte.filter((item) => item !== option));
    } else {
      if (transporte.length < 2) {
        setTransporte([...transporte, option]);
      }

    }
  };

  //Metodo para campo de texto 5.3 Segundo-Otro motivo
  const handleMotivo2Change = (text) => {
    setMotivo2(text);
  };
  //Metodo para 5.3 para las opciones al precionar otros servicios de salud
  const handleOptionChange2 = (option) => {
    if (selectedOptions1.includes(option)) {
      setSelectedOptions1(selectedOptions1.filter((item) => item !== option));

      if (option === "Otro motivo ¿Cuál?") {
        setShowTextInput1(false);
      }
    } else {
      if (selectedOptions1.length < 3) {
        setSelectedOptions1([...selectedOptions1, option]);

        if (option === "Otro motivo ¿Cuál?") {
          setShowTextInput1(true);
        }
      }
    }
  };

  //Metodo para 5.6 para las opciones al precionar otros servicios de salud
  const handleOptionChange22 = (option) => {
    if (selectedOption11.includes(option)) {
      setSelectedOption11(selectedOption11.filter((item) => item !== option));

      if (option === "Otro motivo ¿Cuál?") {
        setShowTextInput2(false);
      }
    } else {
      if (selectedOption11.length < 3) {
        setSelectedOption11([...selectedOption11, option]);

        if (option === "Otro motivo ¿Cuál?") {
          setShowTextInput2(true);
        }
      }
    }
  };

  //Guardar en asyncstorage
  useEffect(() => {
    // Recuperar los datos guardados de AsyncStorage cuando la pantalla se carga
    const restoreData = async () => {
      try {
        const savedData = await AsyncStorage.getItem("datosGuardados5");
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setSelectedOption(parsedData.selectedOption);
          setSelectedOption1(parsedData.selectedOption1);
          setSelectedOption2(parsedData.selectedOption2);
          setSelectedOption3(parsedData.selectedOption3);
          setSelectedOption222(parsedData.selectedOption222);
          setSelected1Option(parsedData.selected1Option);
          setSelected1Option2(parsedData.selected1Option2);
          setSelectedOptions(parsedData.selectedOptions);
          setSelectedOptions1(parsedData.selectedOptions1);
          setSelectedOptions4(parsedData.selectedOptions4);
          setSelectedOptions5(parsedData.selectedOptions5);
          setSelectedOption9(parsedData.selectedOption9);
          setSelectedOption8(parsedData.selectedOption8);
          setSelectedOption0(parsedData.selectedOption0);
          setSelectedOptions0(parsedData.selectedOptions0);
          setSelectedOption22(parsedData.selectedOption22);
          setSelectedOption11(parsedData.selectedOption11);
          setMunicipio(parsedData.municipio);
          setOtro(parsedData.otro);
          setOtro1(parsedData.otro1);
          setOtro2(parsedData.otro2);
          setOtro3(parsedData.otro3);
          setNombre(parsedData.nombre);
          setLugar(parsedData.lugar);
          setShowOtherServices1Text(parsedData.showOtherServices1Text);
          setShowOtherServices2Text(parsedData.showOtherServices2Text);

          setShowTextInput(parsedData.showTextInput);
          setShowTextInput1(parsedData.showTextInput1);
          setShowTextInput2(parsedData.showTextInput2);
          setShowTextInput3(parsedData.showTextInput3);
          setTransporte(parsedData.transporte);
          setMotivo(parsedData.motivo);
          setMotivo1(parsedData.motivo1);
          setMotivo2(parsedData.motivo2);
          setMotivo3(parsedData.motivo3);
          setSelectedColumns(parsedData.selectedColumns);
          setSelectedColumns1(parsedData.selectedColumns1);

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
        const dataToSave5 = JSON.stringify({
          selectedOption, selectedOption1, selectedOption2, selectedOption3,
          selectedOption222, selected1Option, selected1Option2, selectedOptions,
          selectedOptions1, selectedOptions4, selectedOptions5, selectedOption9,
          selectedOption8, selectedOption0, selectedOptions0, selectedOption22,
          selectedOption11, municipio, otro, otro1, otro2, otro3, nombre, lugar,
          showOtherServices1Text, showOtherServices2Text,
          showTextInput, showTextInput1, showTextInput2, showTextInput3, transporte,
          motivo, motivo1, motivo2, motivo3, selectedColumns, selectedColumns1,


        });
        await AsyncStorage.setItem("datosGuardados5", dataToSave5);
      } catch (error) {
        console.error("Error al guardar los datos:", error);
      }
    };

    saveData();
  }, [selectedOption, selectedOption1, selectedOption2, selectedOption3,
    selectedOption222, selected1Option, selected1Option2, selectedOptions,
    selectedOptions1, selectedOptions4, selectedOptions5, selectedOption9,
    selectedOption8, selectedOption0, selectedOptions0, selectedOption22,
    selectedOption11, municipio, otro, otro1, otro2, otro3, nombre, lugar,
    showOtherServices1Text, showOtherServices2Text,
    showTextInput, showTextInput1, showTextInput2, showTextInput3, transporte,
    motivo, motivo1, motivo2, motivo3, selectedColumns, selectedColumns1,]);


  const [showQuestion5_6, setShowQuestion5_6] = useState(true);

  return (
    <ScrollView>
      {/* Pregunta 5.1 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>PRESTACIÓN DE SERVICIOS</Text>

            <Text style={styles.question}>
              {" "}
              PREGUNTA 5.1 ( SELECCIÓN MÚLTIPLE - MÁXIMO 3 OPCIONES){" "}
            </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <View style={styles.preguntaContainer}>
              <Text style={styles.advertencia}>
                Nota: Ver respuesta a la pregunta 2.1 Tipo de Población
              </Text>

              <Text style={styles.preguntas}>
                De acuerdo al tipo de población con la que se identifica,
                ¿considera usted que requiere ser atendido en algún sevicio de
                rehabilitación?
              </Text>
              <View style={styles.optionContainer}>
                <CheckBox
                  title="Si (indique cuál)"
                  checked={selectedOption === "Si"}
                  onPress={() => setSelectedOption("Si")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption === "Si"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="No"
                  checked={selectedOption === "No"}
                  onPress={() => setSelectedOption("No")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption === "No"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
              </View>
              {selectedOption === "Si" && (
                <View style={styles.questionContainer}>
                  <Text style={styles.preguntas}> SELECCIONE </Text>

                  <CheckBox
                    title="Fisioterapia"
                    checked={selectedOptions.includes("Fisioterapia")}
                    onPress={() => handleOptionChange("Fisioterapia")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions.includes("Fisioterapia")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />

                  <CheckBox
                    title="	Fonoaudiología"
                    checked={selectedOptions.includes("Fonoaudiología")}
                    onPress={() => handleOptionChange("Fonoaudiología")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions.includes("Fonoaudiología")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Terapia ocupacional"
                    checked={selectedOptions.includes("Terapia ocupacional")}
                    onPress={() => handleOptionChange("Terapia ocupacional")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions.includes("Terapia ocupacional")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Terapia Respiratoria"
                    checked={selectedOptions.includes("Terapia Respiratoria")}
                    onPress={() => handleOptionChange("Terapia Respiratoria")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions.includes("Terapia Respiratoria")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Optometría"
                    checked={selectedOptions.includes("Optometría")}
                    onPress={() => handleOptionChange("Optometría")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions.includes("Optometría")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title=" Psicología"
                    checked={selectedOptions.includes("Psicología")}
                    onPress={() => handleOptionChange("Psicología")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions.includes("Psicología")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Trabajo social"
                    checked={selectedOptions.includes("Trabajo social")}
                    onPress={() => handleOptionChange("Trabajo social")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions.includes("Trabajo social")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Fisiatría"
                    checked={selectedOptions.includes("Fisiatría")}
                    onPress={() => handleOptionChange("Fisiatría")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions.includes("Fisiatría")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Otros servicios de salud:"
                    checked={selectedOptions.includes(
                      "Otros servicios de salud"
                    )}
                    onPress={() =>
                      handleOptionChange("Otros servicios de salud")
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions.includes("Otros servicios de salud")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />

                  {selectedOptions.includes("Otros servicios de salud") && (
                    <View style={styles.preguntaContainer}>
                      <Text style={styles.preguntas}>Especifique otros:</Text>
                      <CheckBox
                        title="Medicina General"
                        checked={selectedOptions5.includes("Medicina General")}
                        onPress={() =>
                          handleOptionChangecinco("Medicina General")
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions5.includes("Medicina General")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />

                      <CheckBox
                        title="Odontología"
                        checked={selectedOptions5.includes("Odontología")}
                        onPress={() => handleOptionChangecinco("Odontología")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions5.includes("Odontología")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Enfermería"
                        checked={selectedOptions5.includes("Enfermería")}
                        onPress={() => handleOptionChangecinco("Enfermería")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions5.includes("Enfermería")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Nutrición"
                        checked={selectedOptions5.includes("Nutrición")}
                        onPress={() => handleOptionChangecinco("Nutrición")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions5.includes("Nutrición")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüen- tos, Sobandero"
                        checked={selectedOptions5.includes(
                          "Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüen- tos, Sobandero"
                        )}
                        onPress={() =>
                          handleOptionChangecinco(
                            "Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüen- tos, Sobandero"
                          )
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions5.includes(
                            "Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüen- tos, Sobandero"
                          )
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Hospitalización"
                        checked={selectedOptions5.includes("Hospitalización")}
                        onPress={() =>
                          handleOptionChangecinco("Hospitalización")
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions5.includes("Hospitalización")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Medicina Especializada Ej: cirugía, cardiología, psiquia- tría, neurología"
                        checked={selectedOptions5.includes(
                          "Medicina Especializada Ej: cirugía, cardiología, psiquia- tría, neurología"
                        )}
                        onPress={() =>
                          handleOptionChangecinco(
                            "Medicina Especializada Ej: cirugía, cardiología, psiquia- tría, neurología"
                          )
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions5.includes(
                            "Medicina Especializada Ej: cirugía, cardiología, psiquia- tría, neurología"
                          )
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Otro"
                        checked={selectedOptions5.includes("Otro")}
                        onPress={() => handleOptionChangecinco("Otro")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions5.includes("Otro")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />

                      {showTextInput && (
                        <View style={styles.preguntaContainer}>
                          <Text style={styles.preguntas}>¿Cuál?</Text>
                          <TextInput
                            style={styles.input}
                            value={otro}
                            onChangeText={handleOtro}
                            placeholder="Indique cuál"
                          />
                        </View>
                      )}
                    </View>
                  )}
                </View>
              )}
            </View>
          </View>
        </View>
      </View>

      {/* Pregunta 5.2 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question}>
              {" "}
              PREGUNTA 5.2 ( SELECCIÓN ÚNICA ){" "}
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
                Sabe usted si ¿en el hospital del municipio se ha puesto en
                funcionamiento algún servicio de rehabilitación durante el
                último año?
              </Text>
              <View style={styles.optionContainer}>
                <CheckBox
                  title="Si sabe"
                  checked={selectedOption3 === "Si"}
                  onPress={() => setSelectedOption3("Si")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption3 === "Si"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="No sabe"
                  checked={selectedOption3 === "No"}
                  onPress={() => setSelectedOption3("No")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption3 === "No"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
              </View>
              {selectedOption3 === "Si" && (
                <View style={styles.questionContainer}>
                  <Text style={styles.question2}>
                    PREGUNTA 5.3 (SELECCIÓN MÚLTIPLE - MÁXIMO 3 OPCIONES)
                  </Text>
                  <View style={styles.linea1} />
                  <Text style={styles.pregunta}>
                    Si conoce acerca de los servicios de rehabilitación
                    instalados en el Hospital del muncipio, indique sobre cuáles
                    de los siguientes ha tenido algún tipo de información:
                  </Text>
                  <CheckBox
                    title="Fisioterapia"
                    checked={selectedOption2.includes("Fisioterapia")}
                    onPress={() => handleOptionChangedos("Fisioterapia")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2.includes("Fisioterapia")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />

                  <CheckBox
                    title="	Fonoaudiología"
                    checked={selectedOption2.includes("Fonoaudiología")}
                    onPress={() => handleOptionChangedos("Fonoaudiología")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2.includes("Fonoaudiología")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Terapia ocupacional"
                    checked={selectedOption2.includes("Terapia ocupacional")}
                    onPress={() => handleOptionChangedos("Terapia ocupacional")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2.includes("Terapia ocupacional")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Terapia Respiratoria"
                    checked={selectedOption2.includes("Terapia Respiratoria")}
                    onPress={() =>
                      handleOptionChangedos("Terapia Respiratoria")
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2.includes("Terapia Respiratoria")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Optometría"
                    checked={selectedOption2.includes("Optometría")}
                    onPress={() => handleOptionChangedos("Optometría")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2.includes("Optometría")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title=" Psicología"
                    checked={selectedOption2.includes("Psicología")}
                    onPress={() => handleOptionChangedos("Psicología")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2.includes("Psicología")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Trabajo social"
                    checked={selectedOption2.includes("Trabajo social")}
                    onPress={() => handleOptionChangedos("Trabajo social")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2.includes("Trabajo social")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Fisiatría"
                    checked={selectedOption2.includes("Fisiatría")}
                    onPress={() => handleOptionChangedos("Fisiatría")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2.includes("Fisiatría")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="Otros servicios de salud"
                    checked={selectedOption2.includes(
                      "Otros servicios de salud"
                    )}
                    onPress={() =>
                      handleOptionChangedos("Otros servicios de salud")
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2.includes("Otros servicios de salud")
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />

                  {selectedOption2.includes("Otros servicios de salud") && (
                    <View style={styles.questionContainer}>
                      <Text style={styles.preguntas}> SELECCIONE</Text>

                      <CheckBox
                        title="Medicina General"
                        checked={selectedOptions1.includes("Medicina General")}
                        onPress={() => handleOptionChange2("Medicina General")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1.includes("Medicina General")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Odontología"
                        checked={selectedOptions1.includes("Odontología")}
                        onPress={() => handleOptionChange2("Odontología")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1.includes("Odontología")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Enfermería"
                        checked={selectedOptions1.includes("Enfermería")}
                        onPress={() => handleOptionChange2("Enfermería")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1.includes("Enfermería")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Nutrición"
                        checked={selectedOptions1.includes("Nutrición")}
                        onPress={() => handleOptionChange2("Nutrición")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1.includes("Nutrición")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero"
                        checked={selectedOptions1.includes(
                          "Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero"
                        )}
                        onPress={() =>
                          handleOptionChange2(
                            "Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero"
                          )
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1.includes(
                            "Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero"
                          )
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Hospitalización"
                        checked={selectedOptions1.includes("Hospitalización")}
                        onPress={() => handleOptionChange2("Hospitalización")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1.includes("Hospitalización")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología"
                        checked={selectedOptions1.includes(
                          "Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología"
                        )}
                        onPress={() =>
                          handleOptionChange2(
                            "Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología"
                          )
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1.includes(
                            "Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología"
                          )
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Otro ¿Cuál?"
                        checked={selectedOptions1.includes(
                          "Otro motivo ¿Cuál?"
                        )}
                        onPress={() =>
                          handleOptionChange2("Otro motivo ¿Cuál?")
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1.includes("Otro motivo ¿Cuál?")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      {showTextInput1 && (
                        <View style={styles.preguntaContainer}>
                          <Text style={styles.preguntas}>¿Cuál?</Text>
                          <TextInput
                            style={styles.input}
                            value={otro}
                            onChangeText={handleOtro1}
                            placeholder="Indique cuál"
                          />
                        </View>
                      )}
                    </View>
                  )}

                  <View style={styles.questionContainer}>
                    <Text style={styles.question2}>
                      PREGUNTA 5.4 (SELECCIÓN ÚNICA)
                    </Text>
                    <View style={styles.linea1} />
                    <Text style={styles.preguntas}>
                      Sabe usted si ¿existen servicios de rehabilitación
                      ubicados en otro municipio cercano que se encuentren en
                      funcionamiento?
                    </Text>
                    <CheckBox
                      title="SI hay servicios"
                      checked={selectedOption22 === "SI hay servicios"}
                      onPress={() => setSelectedOption22("SI hay servicios")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption22 === "SI hay servicios"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="NO hay servicios"
                      checked={selectedOption22 === "NO hay servicios"}
                      onPress={() => setSelectedOption22("NO hay servicios")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption22 === "NO hay servicios"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="NO sabe"
                      checked={selectedOption22 === "NO sabe"}
                      onPress={() => setSelectedOption22("NO sabe")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption22 === "NO sabe"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />

                    {selectedOption22 === "SI hay servicios" && (
                      <View style={styles.preguntaContainer}>
                        <Text style={styles.preguntas}>
                          Nombre del municipio:
                        </Text>
                        <TextInput
                          style={styles.input}
                          value={municipio}
                          onChangeText={handleMunicipioChange}
                          placeholder="Indique el nombre del municipio"
                        />
                      </View>
                    )}
                  </View>
                </View>
              )}

              {selectedOption3 === "No" && (
                <View style={styles.questionContainer}>
                  <Text style={styles.question2}>
                    PREGUNTA 5.4 (SELECCIÓN ÚNICA)
                  </Text>
                  <View style={styles.linea1} />
                  <Text style={styles.preguntas}>
                    Sabe usted si ¿existen servicios de rehabilitación ubicados
                    en otro municipio cercano que se encuentren en
                    funcionamiento?
                  </Text>
                  <CheckBox
                    title="SI hay servicios"
                    checked={selectedOption22 === "SI hay servicios"}
                    onPress={() => setSelectedOption22("SI hay servicios")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption22 === "SI hay servicios"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="NO hay servicios"
                    checked={selectedOption22 === "NO hay servicios"}
                    onPress={() => setSelectedOption22("NO hay servicios")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption22 === "NO hay servicios"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />
                  <CheckBox
                    title="NO sabe"
                    checked={selectedOption22 === "NO sabe"}
                    onPress={() => setSelectedOption22("NO sabe")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption22 === "NO sabe"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    checkedColor="#BA0C2F"
                  />

                  {selectedOption22 === "SI hay servicios" && (
                    <View style={styles.preguntaContainer}>
                      <Text style={styles.preguntas}>
                        Nombre del municipio:
                      </Text>
                      <TextInput
                        style={styles.input}
                        value={municipio}
                        onChangeText={handleMunicipioChange}
                        placeholder="Indique el nombre del municipio"
                      />
                    </View>
                  )}
                </View>
              )}
            </View>
          </View>
        </View>
      </View>

      {/* Pregunta 5.5 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.question}>
              {" "}
              PREGUNTA 5.5 ( SELECCIÓN ÚNICA ){" "}
            </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.pregunta}>
              Como consecuencia de su condición de salud, ¿recibió usted
              atención en rehabilitación (FISIOTERAPIA / TERAPIA FÍSICA, TERAPIA
              OCUPACIONAL, FONOAUDIOLOGÍA/ TERAPIA DEL LENGUAJE, PSICOLOGÍA,
              TERAPIA RESPIRATORIA, OPTOMETRÍA, TRABAJO SOCIAL) durante el
              último año?
            </Text>
            <View style={styles.optionContainer}>
              <Text style={styles.advertencia}>
                *Sí* Verificar coherencia con PREGUNTAS 4.1 - 4.3.{" "}
              </Text>
              <CheckBox
                title="Sí"
                checked={selectedOption1 === "Sí"}
                onPress={() => setSelectedOption1("Sí")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  selectedOption1 === "Sí"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />

              <CheckBox
                title="No"
                checked={selectedOption1 === "No"}
                onPress={() => setSelectedOption1("No")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  selectedOption1 === "No"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
            </View>

            {selectedOption1 === "No" && (
              <View style={styles.questionContainer}>
                <Text style={styles.question2}>
                  PREGUNTA 5.11 (SELECCIÓN ÚNICA)
                </Text>
                <View style={styles.linea1} />
                <Text style={styles.preguntas}>
                  Si ha presentado una condición de salud o enfermedad durante
                  el último año y no recibió atención por parte de los servicios
                  de salud /rehabilitación, indique cuál fue la razón:
                </Text>

                <CheckBox
                  title="Cree que ya no lo necesita"
                  checked={selected1Option.includes(
                    "Cree que ya no lo necesita"
                  )}
                  onPress={() =>
                    handleOption1Select("Cree que ya no lo necesita")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option.includes("Cree que ya no lo necesita")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="No le gusta, no le interesa"
                  checked={selected1Option.includes(
                    "No le gusta, no le interesa"
                  )}
                  onPress={() =>
                    handleOption1Select("No le gusta, no le interesa")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option.includes("No le gusta, no le interesa")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Falta de dinero"
                  checked={selected1Option.includes("Falta de dinero")}
                  onPress={() => handleOption1Select("Falta de dinero")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option.includes("Falta de dinero")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="El centro de atención queda muy lejos"
                  checked={selected1Option.includes(
                    "El centro de atención queda muy lejos"
                  )}
                  onPress={() =>
                    handleOption1Select("El centro de atención queda muy lejos")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option.includes(
                      "El centro de atención queda muy lejos"
                    )
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="No hay quién lo lleve"
                  checked={selected1Option.includes("No hay quién lo lleve")}
                  onPress={() => handleOption1Select("No hay quién lo lleve")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option.includes("No hay quién lo lleve")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="No ha sido autorizado por el asegurador "
                  checked={selected1Option.includes(
                    "No ha sido autorizado por el asegurador "
                  )}
                  onPress={() =>
                    handleOption1Select(
                      "No ha sido autorizado por el asegurador "
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option.includes(
                      "No ha sido autorizado por el asegurador "
                    )
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="No ha sido remitido por el médico tratante"
                  checked={selected1Option.includes(
                    "No ha sido remitido por el médico tratante"
                  )}
                  onPress={() =>
                    handleOption1Select(
                      "No ha sido remitido por el médico tratante"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option.includes(
                      "No ha sido remitido por el médico tratante"
                    )
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="No sabe"
                  checked={selected1Option.includes("No sabe")}
                  onPress={() => handleOption1Select("No sabe")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option.includes("No sabe")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Cierre del servicio por pandemia COVID-19"
                  checked={selected1Option.includes(
                    "Cierre del servicio por pandemia COVID-19"
                  )}
                  onPress={() =>
                    handleOption1Select(
                      "Cierre del servicio por pandemia COVID-19"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option.includes(
                      "Cierre del servicio por pandemia COVID-19"
                    )
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
              </View>
            )}
          </View>
        </View>
      </View>
      {selectedOption1 === "No" && showQuestion5_6 && (
        <View>
          {/* Pregunta 5.12 */}
          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <Text style={styles.question}>
                  {" "}
                  PREGUNTA 5.12 (SELECCIÓN ÚNICA)
                </Text>
              </View>
              <View style={styles.linea} />
            </View>
          </View>

          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <View style={styles.container}>
                  <Text style={styles.advertencia}>
                    Validar con la respuesta a pregunta 5.5
                  </Text>

                  <Text style={styles.preguntas}>
                    Según su experiencia de atención en los servicios de
                    rehabilitación durante el último año califique:{" "}
                  </Text>

                  {cellColors.map((rowColors, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                      {rowColors.map((color, colIndex) => (
                        <TouchableOpacity
                          key={colIndex}
                          style={[styles.cell, { backgroundColor: color }]}
                          onPress={() =>
                            handleCellSelection(rowIndex, colIndex)
                          }
                        >
                          <Text
                            style={{
                              color:
                                colIndex === 0
                                  ? "black"
                                  : selectedColumns[colIndex] === rowIndex
                                    ? "white"
                                    : "black",
                              fontWeight: colIndex === 0 ? "bold" : "normal",
                            }}
                          >
                            {colIndex === 0 && rowIndex === 0
                              ? "  ACCESO\n\n\n DIFICULTAD"
                              : cellTexts[rowIndex][colIndex]}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {/* Pregunta 5.13 */}
          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <Text style={styles.question}>
                  {" "}
                  PREGUNTA 5.13 (SELECCIÓN ÚNICA)
                </Text>
              </View>
              <View style={styles.linea} />
            </View>
          </View>

          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <View style={styles.container}>
                  <Text style={styles.advertencia}>
                    Validar con la respuesta a pregunta 5.5
                  </Text>
                  <Text style={styles.preguntas}>
                    Según su experiencia de atención en los servicios de
                    rehabilitación durante el último año califique:{" "}
                  </Text>

                  {cellColors1.map((rowColors, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                      {rowColors.map((color, colIndex) => (
                        <TouchableOpacity
                          key={colIndex}
                          style={[styles.cell, { backgroundColor: color }]}
                          onPress={() =>
                            handleCellSelection1(rowIndex, colIndex)
                          }
                        >
                          <Text
                            style={{
                              color:
                                colIndex === 0
                                  ? "black"
                                  : selectedColumns1[colIndex] === rowIndex
                                    ? "white"
                                    : "black",
                              fontWeight:
                                colIndex === 0 || rowIndex === 0
                                  ? "bold"
                                  : "normal",
                            }}
                          >
                            {colIndex === 0 && rowIndex === 0
                              ? "  USO\n\n\n SATISFACCIÓN"
                              : cellTexts1[rowIndex][colIndex]}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {/* Pregunta 5.14 */}
          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <Text style={styles.question}>
                  {" "}
                  PREGUNTA 5.14 (SELECCIÓN MÚLTIPLE - MÁXIMO 2 OPCIONES)
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
                    Indique el medio de transporte utilizado para asistir al
                    servicio de salud / rehabilitación:
                  </Text>
                  <View style={styles.optionContainer}>
                    <CheckBox
                      title="A pie"
                      checked={transporte.includes("A pie")}
                      onPress={() => handleOptionTransporte("A pie")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        (checked = transporte.includes("A pie")
                          ? styles.selectedOptionText
                          : styles.checkBoxText)
                      }
                      checkedColor="#BA0C2F"
                    />

                    <CheckBox
                      title="Terrestre"
                      checked={transporte.includes("Terrestre")}
                      onPress={() => handleOptionTransporte("Terrestre")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        (checked = transporte.includes("Terrestre")
                          ? styles.selectedOptionText
                          : styles.checkBoxText)
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Aéreo"
                      checked={transporte.includes("Aéreo")}
                      onPress={() => handleOptionTransporte("Aéreo")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        (checked = transporte.includes("Aéreo")
                          ? styles.selectedOptionText
                          : styles.checkBoxText)
                      }
                      checkedColor="#BA0C2F"
                    />

                    <CheckBox
                      title="Fluvial"
                      checked={transporte.includes("Fluvial")}
                      onPress={() => handleOptionTransporte("Fluvial")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        (checked = transporte.includes("Fluvial")
                          ? styles.selectedOptionText
                          : styles.checkBoxText)
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Animales de tiro/ de montar"
                      checked={transporte.includes(
                        "Animales de tiro/ de montar"
                      )}
                      onPress={() =>
                        handleOptionTransporte("Animales de tiro/ de montar")
                      }
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        (checked = transporte.includes(
                          "Animales de tiro/ de montar"
                        )
                          ? styles.selectedOptionText
                          : styles.checkBoxText)
                      }
                      checkedColor="#BA0C2F"
                    />

                    <CheckBox
                      title="Otro ¿Cuál?"
                      checked={transporte.includes("Otro ¿Cuál?")}
                      onPress={() => handleOptionTransporte("Otro ¿Cuál?")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        (checked = transporte.includes("Otro ¿Cuál?")
                          ? styles.selectedOptionText
                          : styles.checkBoxText)
                      }
                      checkedColor="#BA0C2F"
                    />

                    {(transporte.includes("Otro ¿Cuál?")) && (
                      <View style={styles.preguntaContainer}>
                        <Text style={styles.preguntas}>Especifique otro:</Text>
                        <TextInput
                          style={styles.input}
                          value={otro3}
                          onChangeText={handleOtro3}
                          placeholder="Indique cuál"
                        />
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
      {/* Pregunta 5.6 */}

      {selectedOption1 === "Sí" && (
        <View>
          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <Text style={styles.question}>
                  {" "}
                  PREGUNTA 5.6 ( SELECCIÓN MÚLTIPLE - MÁXIMO 3 OPCIONES ){" "}
                </Text>
              </View>
              <View style={styles.linea} />
            </View>
          </View>

          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <View style={styles.preguntaContainer}>
                  <Text style={styles.advertencia}>
                    Verificar coherencia con PREGUNTAS 4.1 - 4.3.{" "}
                  </Text>

                  <Text style={styles.preguntas}>
                    Indique cuál fue el servicio de rehabilitación que le
                    prestaron para atender su condición de salud o enfermedad:
                  </Text>

                  <View style={styles.optionContainer}>
                    <CheckBox
                      title="	Fisioterapia"
                      checked={selectedOption222.includes("Fisioterapia")}
                      onPress={() => handleOptionChange5("Fisioterapia")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption222.includes("Fisioterapia")
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />

                    <CheckBox
                      title="	Fonoaudiología"
                      checked={selectedOption222.includes("Fonoaudiología")}
                      onPress={() => handleOptionChange5("Fonoaudiología")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption222.includes("Fonoaudiología")
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Terapia ocupacional"
                      checked={selectedOption222.includes(
                        "Terapia ocupacional"
                      )}
                      onPress={() => handleOptionChange5("Terapia ocupacional")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption222.includes("Terapia ocupacional")
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Terapia Respiratoria"
                      checked={selectedOption222.includes(
                        "Terapia Respiratoria"
                      )}
                      onPress={() =>
                        handleOptionChange5("Terapia Respiratoria")
                      }
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption222.includes("Terapia Respiratoria")
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Optometría"
                      checked={selectedOption222.includes("Optometría")}
                      onPress={() => handleOptionChange5("Optometría")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption222.includes("Optometría")
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title=" Psicología"
                      checked={selectedOption222.includes("Psicología")}
                      onPress={() => handleOptionChange5("Psicología")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption222.includes("Psicología")
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Trabajo social"
                      checked={selectedOption222.includes("Trabajo social")}
                      onPress={() => handleOptionChange5("Trabajo social")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption222.includes("Trabajo social")
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Fisiatría"
                      checked={selectedOption222.includes("Fisiatría")}
                      onPress={() => handleOptionChange5("Fisiatría")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption222.includes("Fisiatría")
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />

                    <CheckBox
                      title="Otros servicios de salud"
                      checked={selectedOption222.includes(
                        "Otros servicios de salud"
                      )}
                      onPress={() =>
                        handleOptionChange5("Otros servicios de salud")
                      }
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption222.includes("Otros servicios de salud")
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                  </View>
                  {selectedOption222.includes("Otros servicios de salud") && (
                    <View style={styles.questionContainer}>
                      <Text style={styles.preguntas}>SELECCIONE</Text>

                      <CheckBox
                        title="Medicina General"
                        checked={selectedOption11.includes("Medicina General")}
                        onPress={() => handleOptionChange22("Medicina General")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOption11.includes("Medicina General")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Odontología"
                        checked={selectedOption11.includes("Odontología")}
                        onPress={() => handleOptionChange22("Odontología")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOption11.includes("Odontología")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Enfermería"
                        checked={selectedOption11.includes("Enfermería")}
                        onPress={() => handleOptionChange22("Enfermería")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOption11.includes("Enfermería")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Nutrición"
                        checked={selectedOption11.includes("Nutrición")}
                        onPress={() => handleOptionChange22("Nutrición")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOption11.includes("Nutrición")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero"
                        checked={selectedOption11.includes(
                          "Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero"
                        )}
                        onPress={() =>
                          handleOptionChange22(
                            "Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero"
                          )
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOption11.includes(
                            "Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero"
                          )
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Hospitalización"
                        checked={selectedOption11.includes("Hospitalización")}
                        onPress={() => handleOptionChange22("Hospitalización")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOption11.includes("Hospitalización")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología"
                        checked={selectedOption11.includes(
                          "Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología"
                        )}
                        onPress={() =>
                          handleOptionChange22(
                            "Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología"
                          )
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOption11.includes(
                            "Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología"
                          )
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Otro ¿Cuál?"
                        checked={selectedOption11.includes(
                          "Otro motivo ¿Cuál?"
                        )}
                        onPress={() =>
                          handleOptionChange22("Otro motivo ¿Cuál?")
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOption11.includes("Otro motivo ¿Cuál?")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />



                      {showTextInput2 && (
                        <View style={styles.preguntaContainer}>
                          <Text style={styles.preguntas}>¿Cuál?</Text>
                          <TextInput
                            style={styles.input}
                            value={otro2}
                            onChangeText={handleOtro2}
                            placeholder="Indique cuál"
                          />
                        </View>
                      )}
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>

          {/* Pregunta 5.7 */}
          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <Text style={styles.question}>
                  {" "}
                  PREGUNTA 5.7 SELECCIÓN MÚLTIPLE - MÁXIMO 2 OPCIONES
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
                    Indique quién pagó por su atención para la prestación de los
                    servicios de salud /rehabilitación
                  </Text>
                  <View style={styles.optionContainer}>
                    <CheckBox
                      title="El sistema general de salud (ARL, EAPB)"
                      checked={selectedOptions4.includes(
                        "El sistema general de salud (ARL, EAPB)"
                      )}
                      onPress={() =>
                        handleOption4Select(
                          "El sistema general de salud (ARL, EAPB)"
                        )
                      }
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOptions4.includes(
                          "El sistema general de salud (ARL, EAPB)"
                        )
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="La familia"
                      checked={selectedOptions4.includes("La familia")}
                      onPress={() => handleOption4Select("La familia")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOptions4.includes("La familia")
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Personalmente (usted mismo)"
                      checked={selectedOptions4.includes(
                        "Personalmente (usted mismo)"
                      )}
                      onPress={() =>
                        handleOption4Select("Personalmente (usted mismo)")
                      }
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOptions4.includes("Personalmente (usted mismo)")
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Una ONG"
                      checked={selectedOptions4.includes("Una ONG")}
                      onPress={() => handleOption4Select("Una ONG")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOptions4.includes("Una ONG")
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="El empleador"
                      checked={selectedOptions4.includes("El empleador")}
                      onPress={() => handleOption4Select("El empleador")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOptions4.includes("El empleador")
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Otro"
                      checked={selectedOptions4.includes("Otro")}
                      onPress={() => handleOption4Select("Otro")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOptions4.includes("Otro")
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

          {/* Pregunta 5.8 */}
          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <Text style={styles.question}>
                  {" "}
                  PREGUNTA 5.8 SELECCIÓN ÚNICA
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
                    Indique si el establecimiento donde recibió la atención es:{" "}
                  </Text>
                  <View style={styles.optionContainer}>
                    <CheckBox
                      title="Público"
                      checked={selectedOption8 === "Público"}
                      onPress={() => handleOption8Select("Público")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption8 === "Público"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Privado"
                      checked={selectedOption8 === "Privado"}
                      onPress={() => handleOption8Select("Privado")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption8 === "Privado"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="No sabe"
                      checked={selectedOption8 === "No sabe"}
                      onPress={() => handleOption8Select("No sabe")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption8 === "No sabe"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                  </View>
                  {selectedOption8 === "Privado" && (
                    <View style={styles.preguntaContainer}>
                      <Text style={styles.preguntas}>
                        Nombre de la institución /consultorio:
                      </Text>
                      <TextInput
                        style={styles.input}
                        value={nombre}
                        onChangeText={handleNombreChange}
                        placeholder="Ingrese el Nombre"
                      />
                      <Text style={styles.preguntas}>
                        Lugar en el que se ubica la institución /consultorio
                        (Ciudad/ Municipio):
                      </Text>
                      <TextInput
                        style={styles.input}
                        value={lugar}
                        onChangeText={handleLugarChange}
                        placeholder="Ingrese el Lugar"
                      />
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>

          {/* Pregunta 5.9 */}
          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <Text style={styles.question}>
                  {" "}
                  PREGUNTA 5.9 SELECCIÓN ÚNICA
                </Text>
              </View>
              <View style={styles.linea} />
            </View>
          </View>

          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <View style={styles.preguntaContainer}>
                  <Text style={styles.advertencia}>
                    Validar con la respuesta 4.3
                  </Text>

                  <Text style={styles.preguntas}>
                    Como consecuencia de su condición de salud ¿ha requerido
                    productos de apoyo durante el último año? (ej.: sillas de
                    ruedas, bastones de orientación visual, muletas,
                    caminadores, audífonos, gafas, prótesis, etc.){" "}
                  </Text>
                  <View style={styles.optionContainer}>
                    <CheckBox
                      title="Sí"
                      checked={selectedOption9 === "Sí"}
                      onPress={() => handleOption9Select("Sí")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption9 === "Sí"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="No"
                      checked={selectedOption9 === "No"}
                      onPress={() => handleOption9Select("No")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption9 === "No"
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

          {/* Pregunta 5.10 */}
          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <Text style={styles.question}>
                  {" "}
                  PREGUNTA 5.10 (SELECCIÓN MÚLTIPLE - MÁXIMO 3 OPCIONES)
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
                    Como parte de la atención de su condición de salud ¿ha
                    recibido productos de apoyo durante el último año? (ej.:
                    sillas de ruedas, bastones de orientación visual, muletas,
                    caminadores, audífonos, gafas, prótesis, etc.)
                  </Text>
                  <View style={styles.optionContainer}>
                    <CheckBox
                      title="Si"
                      checked={selectedOption0 === "Sí"}
                      onPress={() => setSelectedOption0("Sí")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption0 === "Sí"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="No (indique el motivo)"
                      checked={selectedOption0 === "No"}
                      onPress={() => setSelectedOption0("No")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        selectedOption0 === "No"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                  </View>
                  {selectedOption0 === "No" && (
                    <View style={styles.questionContainer}>
                      <Text style={styles.preguntas}>SELECCIONE</Text>

                      <CheckBox
                        title="Múltiples desplazamientos para gestionar autorización"
                        checked={selectedOptions0.includes(
                          "Múltiples desplazamientos para gestionar autorización"
                        )}
                        onPress={() =>
                          handleOptionChange0(
                            "Múltiples desplazamientos para gestionar autorización"
                          )
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions0.includes(
                            "Múltiples desplazamientos para gestionar autorización"
                          )
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />

                      <CheckBox
                        title="Historia Clínica exigida para la autorización"
                        checked={selectedOptions0.includes(
                          "Historia Clínica exigida para la autorización"
                        )}
                        onPress={() =>
                          handleOptionChange0(
                            "Historia Clínica exigida para la autorización"
                          )
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions0.includes(
                            "Historia Clínica exigida para la autorización"
                          )
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Tiempos largos de espera para la autorización, 
                    congestión en el servicio de salud"
                        checked={selectedOptions0.includes(
                          "Tiempos largos de espera para la autorización, congestión en el servicio de salud"
                        )}
                        onPress={() =>
                          handleOptionChange0(
                            "Tiempos largos de espera para la autorización, congestión en el servicio de salud"
                          )
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions0.includes(
                            "Tiempos largos de espera para la autorización, congestión en el servicio de salud"
                          )
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Remisiones a IPS sin convenio"
                        checked={selectedOptions0.includes(
                          "Remisiones a IPS sin convenio"
                        )}
                        onPress={() =>
                          handleOptionChange0("Remisiones a IPS sin convenio")
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions0.includes(
                            "Remisiones a IPS sin convenio"
                          )
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Vencimiento de la autorización por no agenda del profesional,
                    requiere nuevamente cita con medicina general"
                        checked={selectedOptions0.includes(
                          "Vencimiento de la autorización por no agenda del profesional, requiere nuevamente cita con medicina general"
                        )}
                        onPress={() =>
                          handleOptionChange0(
                            "Vencimiento de la autorización por no agenda del profesional, requiere nuevamente cita con medicina general"
                          )
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions0.includes(
                            "Vencimiento de la autorización por no agenda del profesional, requiere nuevamente cita con medicina general"
                          )
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      <CheckBox
                        title="Considera que no lo necesita "
                        checked={selectedOptions0.includes(
                          "Considera que no lo necesita "
                        )}
                        onPress={() =>
                          handleOptionChange0("Considera que no lo necesita ")
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions0 === "Considera que no lo necesita "
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />

                      <CheckBox
                        title="Otro motivo ¿Cuál?"
                        checked={selectedOptions0.includes(
                          "Otro motivo ¿Cuál?"
                        )}
                        onPress={() =>
                          handleOptionChange0("Otro motivo ¿Cuál?")
                        }
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions0.includes("Otro motivo ¿Cuál?")
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                        checkedColor="#BA0C2F"
                      />
                      {selectedOptions0.includes("Otro motivo ¿Cuál?") && (
                        <View style={styles.preguntaContainer}>
                          <Text style={styles.preguntas}>
                            Especifique otro:
                          </Text>
                          <TextInput
                            style={styles.input}
                            value={motivo}
                            onChangeText={handleMotivoChange}
                            placeholder="Ingrese otro"
                          />
                        </View>
                      )}
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>

          {/* Pregunta 5.11 */}
          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <Text style={styles.question}>
                  {" "}
                  PREGUNTA 5.11 SELECCIÓN ÚNICA
                </Text>
              </View>
              <View style={styles.linea} />
            </View>
          </View>

          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <Text style={styles.preguntas}>
                  Si ha presentado una condición de salud o enfermedad durante
                  el último año y no recibió atención por parte de los servicios
                  de salud /rehabilitación, indique cuál fue la razón:
                </Text>

                <CheckBox
                  title="Cree que ya no lo necesita"
                  checked={selected1Option2.includes(
                    "Cree que ya no lo necesita"
                  )}
                  onPress={() =>
                    handleOption1Select2("Cree que ya no lo necesita")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option2.includes("Cree que ya no lo necesita")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="No le gusta, no le interesa"
                  checked={selected1Option2.includes(
                    "No le gusta, no le interesa"
                  )}
                  onPress={() =>
                    handleOption1Select2("No le gusta, no le interesa")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option2.includes("No le gusta, no le interesa")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Falta de dinero"
                  checked={selected1Option2.includes("Falta de dinero")}
                  onPress={() => handleOption1Select2("Falta de dinero")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option2.includes("Falta de dinero")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="El centro de atención queda muy lejos"
                  checked={selected1Option2.includes(
                    "El centro de atención queda muy lejos"
                  )}
                  onPress={() =>
                    handleOption1Select2(
                      "El centro de atención queda muy lejos"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option2.includes(
                      "El centro de atención queda muy lejos"
                    )
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="No hay quién lo lleve"
                  checked={selected1Option2.includes("No hay quién lo lleve")}
                  onPress={() => handleOption1Select2("No hay quién lo lleve")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option2.includes("No hay quién lo lleve")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="No ha sido autorizado por el asegurador "
                  checked={selected1Option2.includes(
                    "No ha sido autorizado por el asegurador "
                  )}
                  onPress={() =>
                    handleOption1Select2(
                      "No ha sido autorizado por el asegurador "
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option2.includes(
                      "No ha sido autorizado por el asegurador "
                    )
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="No ha sido remitido por el médico tratante"
                  checked={selected1Option2.includes(
                    "No ha sido remitido por el médico tratante"
                  )}
                  onPress={() =>
                    handleOption1Select2(
                      "No ha sido remitido por el médico tratante"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option2.includes(
                      "No ha sido remitido por el médico tratante"
                    )
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="No sabe"
                  checked={selected1Option2.includes("No sabe")}
                  onPress={() => handleOption1Select("No sabe")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option2.includes("No sabe")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Cierre del servicio por pandemia COVID-19"
                  checked={selected1Option2.includes(
                    "Cierre del servicio por pandemia COVID-19"
                  )}
                  onPress={() =>
                    handleOption1Select2(
                      "Cierre del servicio por pandemia COVID-19"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selected1Option2.includes(
                      "Cierre del servicio por pandemia COVID-19"
                    )
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
              </View>
            </View>
          </View>

          {/* Pregunta 5.12 */}
          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <Text style={styles.question}>
                  {" "}
                  PREGUNTA 5.12 (SELECCIÓN ÚNICA)
                </Text>
              </View>
              <View style={styles.linea} />
            </View>
          </View>

          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <View style={styles.container}>
                  <Text style={styles.advertencia}>
                    Validar con la respuesta a pregunta 5.5
                  </Text>

                  <Text style={styles.preguntas}>
                    Según su experiencia de atención en los servicios de
                    rehabilitación durante el último año califique:{" "}
                  </Text>

                  {cellColors.map((rowColors, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                      {rowColors.map((color, colIndex) => (
                        <TouchableOpacity
                          key={colIndex}
                          style={[styles.cell, { backgroundColor: color }]}
                          onPress={() =>
                            handleCellSelection(rowIndex, colIndex)
                          }
                        >
                          <Text
                            style={{
                              color:
                                colIndex === 0
                                  ? "black"
                                  : selectedColumns[colIndex] === rowIndex
                                    ? "white"
                                    : "black",
                              fontWeight: colIndex === 0 ? "bold" : "normal",
                            }}
                          >
                            {colIndex === 0 && rowIndex === 0
                              ? "  ACCESO\n\n\n DIFICULTAD"
                              : cellTexts[rowIndex][colIndex]}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {/* Pregunta 5.13 */}
          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <Text style={styles.question}>
                  {" "}
                  PREGUNTA 5.13 (SELECCIÓN ÚNICA)
                </Text>
              </View>
              <View style={styles.linea} />
            </View>
          </View>

          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <View style={styles.container}>
                  <Text style={styles.advertencia}>
                    Validar con la respuesta a pregunta 5.5
                  </Text>
                  <Text style={styles.preguntas}>
                    Según su experiencia de atención en los servicios de
                    rehabilitación durante el último año califique:{" "}
                  </Text>

                  {cellColors1.map((rowColors, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                      {rowColors.map((color, colIndex) => (
                        <TouchableOpacity
                          key={colIndex}
                          style={[styles.cell, { backgroundColor: color }]}
                          onPress={() =>
                            handleCellSelection1(rowIndex, colIndex)
                          }
                        >
                          <Text
                            style={{
                              color:
                                colIndex === 0
                                  ? "black"
                                  : selectedColumns1[colIndex] === rowIndex
                                    ? "white"
                                    : "black",
                              fontWeight:
                                colIndex === 0 || rowIndex === 0
                                  ? "bold"
                                  : "normal",
                            }}
                          >
                            {colIndex === 0 && rowIndex === 0
                              ? "  USO\n\n\n SATISFACCIÓN"
                              : cellTexts1[rowIndex][colIndex]}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {/* Pregunta 5.14 */}
          <View style={styles.contenedorPadre}>
            <View style={styles.tarjeta}>
              <View style={styles.contenedor}>
                <Text style={styles.question}>
                  {" "}
                  PREGUNTA 5.14 (SELECCIÓN MÚLTIPLE - MÁXIMO 2 OPCIONES)
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
                    Indique el medio de transporte utilizado para asistir al
                    servicio de salud / rehabilitación:
                  </Text>
                  <View style={styles.optionContainer}>
                    <CheckBox
                      title="A pie"
                      checked={transporte.includes("A pie")}
                      onPress={() => handleOptionTransporte("A pie")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        (checked = transporte.includes("A pie")
                          ? styles.selectedOptionText
                          : styles.checkBoxText)
                      }
                      checkedColor="#BA0C2F"
                    />

                    <CheckBox
                      title="Terrestre"
                      checked={transporte.includes("Terrestre")}
                      onPress={() => handleOptionTransporte("Terrestre")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        (checked = transporte.includes("Terrestre")
                          ? styles.selectedOptionText
                          : styles.checkBoxText)
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Aéreo"
                      checked={transporte.includes("Aéreo")}
                      onPress={() => handleOptionTransporte("Aéreo")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        (checked = transporte.includes("Aéreo")
                          ? styles.selectedOptionText
                          : styles.checkBoxText)
                      }
                      checkedColor="#BA0C2F"
                    />

                    <CheckBox
                      title="Fluvial"
                      checked={transporte.includes("Fluvial")}
                      onPress={() => handleOptionTransporte("Fluvial")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        (checked = transporte.includes("Fluvial")
                          ? styles.selectedOptionText
                          : styles.checkBoxText)
                      }
                      checkedColor="#BA0C2F"
                    />
                    <CheckBox
                      title="Animales de tiro/ de montar"
                      checked={transporte.includes(
                        "Animales de tiro/ de montar"
                      )}
                      onPress={() =>
                        handleOptionTransporte("Animales de tiro/ de montar")
                      }
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        (checked = transporte.includes(
                          "Animales de tiro/ de montar"
                        )
                          ? styles.selectedOptionText
                          : styles.checkBoxText)
                      }
                      checkedColor="#BA0C2F"
                    />

                    <CheckBox
                      title="Otro ¿Cuál?"
                      checked={transporte.includes("Otro ¿Cuál?")}
                      onPress={() => handleOptionTransporte("Otro ¿Cuál?")}
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        (checked = transporte.includes("Otro ¿Cuál?")
                          ? styles.selectedOptionText
                          : styles.checkBoxText)
                      }
                      checkedColor="#BA0C2F"
                    />
                    {(transporte.includes("Otro ¿Cuál?")) && (
                      <View style={styles.preguntaContainer}>
                        <Text style={styles.preguntas}>Especifique otro:</Text>
                        <TextInput
                          style={styles.input}
                          value={otro3}
                          onChangeText={handleOtro3}
                          placeholder="Indique cuál"
                        />
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <TouchableOpacity style={styles.boton} onPress={goToPreguntaSeis}>
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

  opcionesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
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

  tituloSeccion: {
    fontWeight: "bold",
    marginBottom: 8,
  },

  /* Estilo Formulario*/

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

  // Estilo Tabla
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  cell: {
    width: 80,
    height: 110,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  advertencia: {
    marginBottom: 5,
    textAlign: "justify",
    marginTop: 5,
    fontWeight: "bold",
    color: "#BA0C2F",
    fontSize: 16,
  },
});
