import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default function PreCinScreen(props) {

  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption2, setSelectedOption2] = useState([]);

  const [selectedOption222, setSelectedOption222] = useState("");
  const [selectedOptions2, setSelectedOptions2] = useState([]);

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selected1Option, setSelected1Option] = useState([]);

  const [selectedOptions1, setSelectedOptions1] = useState([]);

  const [selectedOptions4, setSelectedOptions4] = useState([]);
  const [selectedOption9, setSelectedOption9] = useState(null);
  const [selectedOption8, setSelectedOption8] = useState(null);

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [selectedOption0, setSelectedOption0] = useState("");
  const [selectedOptions0, setSelectedOptions0] = useState([]);

  const [selectedOption22, setSelectedOption22] = useState("");
  const [selectedOption11, setSelectedOption11] = useState([]);
  //Constantes para campos de texto municipios
  const [municipio, setMunicipio] = useState('');
  const [nombre, setNombre] = useState('');
  const [lugar, setLugar] = useState('');

  //Constantes para campos de texto, Otros
  const [motivo, setMotivo] = useState('');
  const [motivo1, setMotivo1] = useState('');
  const [motivo2, setMotivo2] = useState('');
  const [motivo3, setMotivo3] = useState('');

  //Constante para pregunta 5.12
  const [selectedCell, setSelectedCell] = useState(null);
  //Metodo para pregunta 5.12
  const handleCellSelection = (row, col) => {
    setSelectedCell({ row, col });
  }
  //Constante para pregunta 5.13
  const [selectedCell1, setSelectedCell1] = useState(null);
  //Metodo para pregunta 5.13
  const handleCellSelection1 = (row, col) => {
    setSelectedCell1({ row, col });
  }

  const [opcionOtro, setOpcionOtro] = useState(false);
  const [otroTexto, setOtroTexto] = useState('');
  const [selecteOptions, setSelecteOptions] = useState([]);
  const opciones = [
    'A pie',
    'Terrestre (Carro, moto, bus)',
    'Aéreo',
    'Fluvial',
    'Animales de tiro/ de montar',
    'Otro ¿Cuál?',
  ];

  useEffect(() => {
    // Check if the "Otro" option is selected and show/hide the text input accordingly
    if (selecteOptions.includes(5)) {
      setOpcionOtro(true);
    } else {
      setOpcionOtro(false);
      setOtroTexto('');
    }
  }, [selecteOptions]);

  const handleCheckboxChange = (index) => {
    // Check if the "Otro" option is selected and limit the selection to two options
    if (index === 5) {
      if (selecteOptions.includes(5)) {
        setSelecteOptions(selecteOptions.filter((option) => option !== 5));
      } else if (selectedOptions.length < 2) {
        setSelecteOptions([...selectedOptions, index]);
      }
    } else {
      setSelecteOptions((prevOptions) => {
        if (prevOptions.includes(5)) {
          return prevOptions.filter((option) => option !== 5);
        }
        if (prevOptions.includes(index)) {
          return prevOptions.filter((option) => option !== index);
        }
        if (prevOptions.length < 2) {
          return [...prevOptions, index];
        }
        return prevOptions;
      });
    }
  }

  const handleOtroTextoChange = (text) => {
    setOtroTexto(text);
  }

  const { navigation } = props;

  const goToPreguntaSeis = () => {
    navigation.navigate("Pregunta 2.4")
    console.log("Opción seleccionada:", selectedOption);
    console.log("Opciones seleccionadas:", selectedOptions);
    console.log("Opción seleccionada:", selectedOption0);
    console.log("Opciones seleccionadas:", selectedOptions0);

  }

  const handleOption3Select = (option) => {
    setSelectedOption3(option);

  }
  const handleMunicipioChange = (text) => {
    setMunicipio(text);
  }
  const handleOption2Select = (option) => {

    setSelectedOption2(option);
    setMunicipio('');
    if (selectedOption2.includes(option)) {
      setSelectedOption2(selectedOption2.filter((item) => item !== option));
    } else {
      if (selectedOption3 === "Si" && selectedOption2.length < 3) {
        setSelectedOption2([...selectedOption2, option]);
      } else if (selectedOption3 === "No" && selectedOption2.length < 1) {
        setSelectedOption2([...selectedOption2, option]);
      }
    }
  }
  const handleOption8Select = (option) => {
    setSelectedOption8(option);
    setNombre('');
    setLugar('');
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
  const handleOption4Select = (option) => {
    // Check if the option is already selected
    const isOptionSelected = selectedOptions4.includes(option);

    if (isOptionSelected) {
      // If the option is already selected, remove it from the selected options
      setSelectedOptions4((prevSelectedOptions) =>
        prevSelectedOptions.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      // If the option is not selected, add it to the selected options (limit to two options)
      if (selectedOptions4.length < 2) {
        setSelectedOptions4((prevSelectedOptions) => [...prevSelectedOptions, option]);
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
      if (selectedOption222.length < 3) { // Limitar a 3 selecciones
        setSelectedOption222([...selectedOption222, option]);
      }
    }
  };
  //Metodo para campo de texto 5.1 Segundo-Otro servicio de salud
  const handleMotivo1Change = (text) => {
    setMotivo1(text);
  }

  //Metodo General checkBox 5.1 opciones que desglosan al presionar SI
  const handleOptionChange = (option) => {
    setSelectedOptions(option);
    setMotivo1('');


    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      if (selectedOption === "Si" && selectedOptions.length < 3) {
        setSelectedOptions([...selectedOptions, option]);
      } else if (selectedOption === "No" && selectedOptions.length < 2) {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
  }
  //Metodo para campo de texto 5.10 Segundo-Otro motivo
  const handleMotivoChange = (text) => {
    setMotivo(text);
  }
  //Metodo General checkBox 5.10 opciones que desglosan

  const handleOptionChange0 = (option) => {
    setSelectedOptions0(option);
    setMotivo('');

    if (selectedOptions0.includes(option)) {
      setSelectedOptions0(selectedOptions0.filter((item) => item !== option));
    } else {
      if (selectedOption0 === "Si" && selectedOptions0.length < 3) {
        setSelectedOptions0([...selectedOptions0, option]);
      } else if (selectedOption0 === "No" && selectedOptions0.length < 2) {
        setSelectedOptions0([...selectedOptions0, option]);
      }
    }
  };

  //Metodo para campo de texto 5.3 Segundo-Otro motivo
  const handleMotivo2Change = (text) => {
    setMotivo2(text);
  }
  //Metodo para 5.3 para las opciones al precionar otros servicios de salud
  const handleOptionChange2 = (option) => {
    setSelectedOptions1(option);
    setMotivo2('');
    if (selectedOptions1.includes(option)) {
      setSelectedOptions1(selectedOptions1.filter((item) => item !== option));
    } else {
      if (selectedOptions === "Si" && selectedOptions1.length < 3) {
        setSelectedOptions1([...selectedOptions1, option]);
      } else if (selectedOptions === "No" && selectedOptions1.length < 2) {
        setSelectedOptions1([...selectedOptions1, option]);
      }
    }
  };


  //Metodo para campo de texto 5.6 Segundo-Otro motivo
  const handleMotivo3Change = (text) => {
    setMotivo3(text);
  }
  //Metodo para 5.6 para las opciones al precionar otros servicios de salud
  const handleOptionChange22 = (option) => {
    setSelectedOption11(option);
    setMotivo3('');
    if (selectedOption11.includes(option)) {
      setSelectedOption11(selectedOption11.filter((item) => item !== option));
    } else {
      if (selectedOption22 === "Si" && selectedOption11.length < 3) {
        setSelectedOption11([...selectedOption11, option]);
      } else if (selectedOption22 === "No" && selectedOption11.length < 2) {
        setSelectedOption11([...selectedOption11, option]);
      }
    }
  }
  return (
    <ScrollView>


      <View style={styles.contenedorPadre}>

        <View style={styles.tarjeta}>

          <View style={styles.contenedor}>



            <Text style={styles.titulo}> PRESTACIÓN DE SERVICIOS</Text>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>PREGUNTA 5.1 (Selección Múltiple 3 Máximo 3 opciones)</Text>
              <Text style={styles.recuadroTitulo}>   !Nota: Ver respuesta a la pregunta 2.1 Tipo de Población</Text>

              <Text style={styles.recuadroTitulo}>De acuerdo al tipo de población con la que se identifica, ¿considera usted que requiere ser atendido en algún sevicio de rehabilitación?</Text>
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
                />

              </View>
              {selectedOption === "Si" && (
                <View style={styles.questionContainer}>
                  <Text style={styles.pregunta}>
                    {" "}
                    SELECCIONE{" "}
                  </Text>

                  <CheckBox
                    title="Fisioterapia"
                    checked={selectedOptions.includes("Fisioterapia")}
                    onPress={() => handleOptionChange("Fisioterapia")}
                    containerStyle={styles.checkBoxContainer}

                    textStyle={
                      selectedOptions === "Fisioterapia"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />

                  <CheckBox
                    title="	Fonoaudiología"
                    checked={selectedOptions.includes("Fonoaudiología")}
                    onPress={() => handleOptionChange("Fonoaudiología")}
                    containerStyle={styles.checkBoxContainer}


                    textStyle={
                      selectedOptions === "Fonoaudiología"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Terapia ocupacional"
                    checked={selectedOptions.includes("Terapia ocupacional")}
                    onPress={() => handleOptionChange("Terapia ocupacional")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions === "Terapia ocupacional"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Terapia Respiratoria"
                    checked={selectedOptions.includes("Terapia Respiratoria")}
                    onPress={() => handleOptionChange("Terapia Respiratoria")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions === "Terapia Respiratoria"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Optometría"
                    checked={selectedOptions.includes("Optometría")}
                    onPress={() => handleOptionChange("Optometría")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions === "Optometría"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title=" Psicología"
                    checked={selectedOptions.includes("Psicología")}
                    onPress={() => handleOptionChange("Psicología")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions === "Psicología"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Trabajo social"
                    checked={selectedOptions.includes("Trabajo social")}
                    onPress={() => handleOptionChange("Trabajo social")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions === "Trabajo social"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Fisiatría"
                    checked={selectedOptions.includes("Fisiatría")}
                    onPress={() => handleOptionChange("Fisiatría")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions === "Fisiatría"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Otros servicios de salud:"
                    checked={selectedOptions.includes(
                      "Otros servicios de salud")}
                    onPress={() => handleOptionChange("Otros servicios de salud")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions === "Otros servicios de salud"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />

                  {(selectedOptions === 'Otros servicios de salud' ||
                    selectedOptions === 'Consultorio Particular u otro servicio fuera del Municipio') && (
                      <View style={styles.preguntaContainer}>
                        <Text style={styles.recuadroTitulo}>Especifique otro:</Text>
                        <TextInput
                          style={styles.input}
                          value={motivo1}
                          onChangeText={handleMotivo1Change}
                          placeholder="Ingrese otro servicio:"
                        />
                      </View>
                    )}
                </View>
              )}

            </View>



            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>  PREGUNTA 5.2 (Selección Única)</Text>

              <Text style={styles.recuadroTitulo}>Sabe usted si ¿en el hospital del municipio se ha puesto en funcionamiento algún servicio de rehabilitación durante el último año?</Text>
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
                />
              </View>
              {selectedOption3 === "Si" && (
                <View style={styles.questionContainer}>
                  <Text style={styles.pregunta}>PREGUNTA 5.3 (Selección Múltiple - Máximo 3 opciones)</Text>
                  <Text style={styles.recuadroTitulo}>Si conoce acerca de los servicios de rehabilitación instalados en el Hospital del muncipio, indique sobre cuáles de los siguientes ha tenido algún tipo de información:</Text>
                  <CheckBox
                    title="Fisioterapia"
                    checked={selectedOption2.includes("Fisioterapia")}
                    onPress={() => handleOptionChange("Fisioterapia")}
                    containerStyle={styles.checkBoxContainer}

                    textStyle={
                      selectedOption2 === "Fisioterapia"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />

                  <CheckBox
                    title="	Fonoaudiología"
                    checked={selectedOption2.includes("Fonoaudiología")}
                    onPress={() => handleOptionChange("Fonoaudiología")}
                    containerStyle={styles.checkBoxContainer}


                    textStyle={
                      selectedOption2 === "Fonoaudiología"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Terapia ocupacional"
                    checked={selectedOption2.includes("Terapia ocupacional")}
                    onPress={() => handleOptionChange("Terapia ocupacional")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2 === "Terapia ocupacional"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Terapia Respiratoria"
                    checked={selectedOption2.includes("Terapia Respiratoria")}
                    onPress={() => handleOptionChange("Terapia Respiratoria")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2 === "Terapia Respiratoria"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Optometría"
                    checked={selectedOption2.includes("Optometría")}
                    onPress={() => handleOptionChange("Optometría")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2 === "Optometría"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title=" Psicología"
                    checked={selectedOption2.includes("Psicología")}
                    onPress={() => handleOptionChange("Psicología")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2 === "Psicología"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Trabajo social"
                    checked={selectedOption2.includes("Trabajo social")}
                    onPress={() => handleOptionChange("Trabajo social")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2 === "Trabajo social"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Fisiatría"
                    checked={selectedOption2.includes("Fisiatría")}
                    onPress={() => handleOptionChange("Fisiatría")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2 === "Fisiatría"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="  Otros servicios de salud"
                    checked={selectedOptions === "No"}
                    onPress={() => setSelectedOptions("No")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={styles.checkBoxText}
                  />


                  {selectedOptions === "No" && (
                    <View style={styles.questionContainer}>
                      <Text>
                        {" "}
                        SELECCIONE
                      </Text>

                      <CheckBox
                        title="Medicina General"
                        checked={selectedOptions1.includes("Medicina General")}
                        onPress={() => handleOptionChange2("Medicina General")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1 === "Medicina General"
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                      />
                      <CheckBox
                        title="Odontología"
                        checked={selectedOptions1.includes("Odontología")}
                        onPress={() => handleOptionChange2("Odontología")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1 === "Odontología"
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                      />
                      <CheckBox
                        title="Enfermería"
                        checked={selectedOptions1.includes("Enfermería")}
                        onPress={() => handleOptionChange2("Enfermería")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1 === "Enfermería"
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                      />
                      <CheckBox
                        title="Nutrición"
                        checked={selectedOptions1.includes("Nutrición")}
                        onPress={() => handleOptionChange2("Nutrición")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1 === "Nutrición"
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                      />
                      <CheckBox
                        title="Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero"
                        checked={selectedOptions1.includes("Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero")}
                        onPress={() => handleOptionChange2("Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1 === "Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero"
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                      />
                      <CheckBox
                        title="Hospitalización"
                        checked={selectedOptions1.includes("Hospitalización")}
                        onPress={() => handleOptionChange2("Hospitalización")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1 === "Hospitalización"
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                      />
                      <CheckBox
                        title="Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología"
                        checked={selectedOptions1.includes("Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología")}
                        onPress={() => handleOptionChange2("Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología")}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={
                          selectedOptions1 === "Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología"
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }
                      />
                      <CheckBox
                        title="Otro ¿Cuál?"
                        checked={selectedOptions1.includes("Otro motivo ¿Cuál?")}
                        onPress={() => handleOptionChange2("Otro motivo ¿Cuál?")}
                        containerStyle={styles.checkBoxContainer}

                        textStyle={
                          selectedOptions1 === "Otro motivo ¿Cuál?"
                            ? styles.selectedOptionText
                            : styles.checkBoxText
                        }

                      />
                      {(selectedOptions1 === 'Otro motivo ¿Cuál?' ||
                        selectedOptions1 === 'Consultorio Particular u otro servicio fuera del Municipio') && (
                          <View style={styles.preguntaContainer}>
                            <Text style={styles.preguntaText}>Especifique otro:</Text>
                            <TextInput
                              style={styles.input}
                              value={motivo2}
                              onChangeText={handleMotivo2Change}
                              placeholder="Ingrese otro"
                            />
                          </View>
                        )}
                    </View>
                  )}
                </View>
              )}

              {selectedOption3 === "No" && (
                <View style={styles.questionContainer}>
                  <Text style={styles.pregunta}>PREGUNTA 5.4 (Selección Única)</Text>
                  <Text style={styles.recuadroTitulo}>Sabe usted si ¿existen servicios de rehabilitación ubicados en otro municipio cercano que se encuentren en funcionamiento?</Text>
                  <CheckBox
                    title="SI hay servicios"
                    checked={selectedOption2 === 'SI hay servicios'}
                    onPress={() => handleOption2Select('SI hay servicios')}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2 === "SI hay servicios"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="NO hay servicios"
                    checked={selectedOption2 === 'NO hay servicios'}
                    onPress={() => handleOption2Select('NO hay servicios')}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2 === "SI hay servicios"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }

                  />
                  <CheckBox
                    title="NO sabe"
                    checked={selectedOption2 === 'NO sabe'}
                    onPress={() => handleOption2Select('NO sabe')}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption2 === "NO sabe"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />

                  {(selectedOption2 === 'SI hay servicios' ||
                    selectedOption2 === '') && (
                      <View style={styles.preguntaContainer}>
                        <Text style={styles.preguntaText}>Nombre del municipio:</Text>
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

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>  PREGUNTA 5.5 (Selección Única)</Text>

              <Text style={styles.recuadroTitulo}>Como consecuencia de su condición de salud, ¿recibió usted atención en rehabilitación (FISIOTERAPIA / TERAPIA FÍSICA, TERAPIA OCUPACIONAL,
                FONOAUDIOLOGÍA/ TERAPIA DEL LENGUAJE, PSICOLOGÍA, TERAPIA RESPIRATORIA, OPTOMETRÍA, TRABAJO SOCIAL) durante el último año?</Text>
              <View style={styles.optionContainer}>
                <CheckBox
                  title="Sí"
                  checked={selectedOption1 === 'Sí'}
                  onPress={() => setSelectedOption1('Sí')}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={"Sí"
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                  }
                />

                <CheckBox
                  title="No)"
                  checked={selectedOption1 === "No"}
                  onPress={() => setSelectedOption1("No")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption1 === "No"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
              </View>

              {selectedOption1 === "No" && (
                <View style={styles.questionContainer}>
                  <Text style={styles.pregunta}>PREGUNTA 5.11 (Selección Única)</Text>
                  <Text style={styles.recuadroTitulo}>Si ha presentado una condición de salud o enfermedad durante el último año
                    y no recibió atención por parte de los servicios de salud /rehabilitación, indique cuál fue la razón:</Text>

                  <CheckBox
                    title="Cree que ya no lo necesita"
                    checked={selected1Option.includes("Cree que ya no lo necesita")}
                    onPress={() => handleOption1Select("Cree que ya no lo necesita")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selected1Option === "Cree que ya no lo necesita"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />

                  <CheckBox
                    title="No le gusta, no le interesa"
                    checked={selected1Option.includes("No le gusta, no le interesa")}
                    onPress={() => handleOption1Select("No le gusta, no le interesa")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selected1Option === "No le gusta, no le interesa"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Falta de dinero"
                    checked={selected1Option.includes("Falta de dinero")}
                    onPress={() => handleOption1Select("Falta de dinero")}
                    containerStyle={styles.checkBoxContainer}

                    textStyle={
                      selected1Option === "Fakta de dinero"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="El centro de atención queda muy lejos"
                    checked={selected1Option.includes("El centro de atención queda muy lejos")}
                    onPress={() => handleOption1Select("El centro de atención queda muy lejos")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selected1Option === "El centro de atención queda muy lejos"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="No hay quién lo lleve"
                    checked={selected1Option.includes("No hay quién lo lleve")}
                    onPress={() => handleOption1Select("No hay quién lo lleve")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selected1Option === "No hay quién lo lleve"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="No ha sido autorizado por el asegurador "
                    checked={selected1Option.includes("No ha sido autorizado por el asegurador ")}
                    onPress={() => handleOption1Select("No ha sido autorizado por el asegurador ")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selected1Option === "No ha sido autorizado por el asegurador "
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="No ha sido remitido por el médico tratante"
                    checked={selected1Option.includes("No ha sido remitido por el médico tratante")}
                    onPress={() =>
                      handleOption1Select("No ha sido remitido por el médico tratante")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selected1Option === "No ha sido remitido por el médico tratante"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="No sabe"
                    checked={selected1Option.includes("No sabe")} onPress={() => handleOption1Select("No sabe")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selected1Option === "No sabe"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Cierre del servicio por pandemia COVID-19"
                    checked={selected1Option.includes("Cierre del servicio por pandemia COVID-19")}
                    onPress={() => handleOption1Select("Cierre del servicio por pandemia COVID-19")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selected1Option === "Cierre del servicio por pandemia COVID-19"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                </View>
              )}



            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>PREGUNTA 5.6 (Selección Múltiple - Máximo 3 opciones)</Text>

              <Text style={styles.recuadroTitulo}>Indique cuál fue el servicio de rehabilitación que le prestaron para atender su condición de salud o enfermedad:</Text>
              <Text style={styles.pregunta}>Verificar coherencia con PREGUNTAS 4.1 - 4.3.</Text>
              <View style={styles.optionContainer}>
                <CheckBox
                  title="	Fisioterapia"
                  checked={selectedOption222.includes("Fisioterapia")}
                  onPress={() => handleOptionChange5("Fisioterapia")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption222 === "Fisioterapia"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />

                <CheckBox
                  title="	Fonoaudiología"
                  checked={selectedOption222.includes("Fonoaudiología")}
                  onPress={() => handleOptionChange5("Fonoaudiología")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption222 === "Fonoaudiología"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
                <CheckBox
                  title="Terapia ocupacional"
                  checked={selectedOption222.includes("Terapia ocupacional")}
                  onPress={() => handleOptionChange5("Terapia ocupacional")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption222 === "Terapia ocupacional"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
                <CheckBox
                  title="Terapia Respiratoria"
                  checked={selectedOption222.includes("Terapia Respiratoria")}
                  onPress={() => handleOptionChange5("Terapia Respiratoria")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption222 === "Terapia Respiratoria"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
                <CheckBox
                  title="Optometría"
                  checked={selectedOption222.includes("Optometría")}
                  onPress={() => handleOptionChange5("Optometría")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption222 === "Optometría"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
                <CheckBox
                  title=" Psicología"
                  checked={selectedOption222.includes("Psicología")}
                  onPress={() => handleOptionChange5("Psicología")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption222 === "Psicología"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
                <CheckBox
                  title="Trabajo social"
                  checked={selectedOption222.includes(
                    "Trabajo social"
                  )}
                  onPress={() => handleOptionChange5("Trabajo social")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption222 === "Trabajo social"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
                <CheckBox
                  title="Fisiatría"
                  checked={selectedOption222.includes("Fisiatría")}
                  onPress={() => handleOptionChange5("Fisiatría")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption222 === "Fisiatría"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />

                <CheckBox
                  title="  Otros servicios de salud"
                  checked={selectedOption222 === "No"}
                  onPress={() => setSelectedOption22("No")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption222 === "No"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />

              </View>
              {selectedOption22 === "No" && (
                <View style={styles.questionContainer}>
                  <Text>
                    {" "}
                    SELECCIONE
                  </Text>

                  <CheckBox
                    title="Medicina General"
                    checked={selectedOption11.includes("Medicina General")}
                    onPress={() => handleOptionChange22("Medicina General")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption11 === "Medicina General"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Odontología"
                    checked={selectedOption11.includes("Odontología")}
                    onPress={() =>
                      handleOptionChange22("Odontología")
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption11 === "Odontología"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Enfermería"
                    checked={selectedOption11.includes("Enfermería")}
                    onPress={() =>
                      handleOptionChange22("Enfermería")
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption11 === "Enfermería"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Nutrición"
                    checked={selectedOption11.includes("Nutrición")}
                    onPress={() =>
                      handleOptionChange22("Nutrición")
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption11 === "Nutrición"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero"
                    checked={selectedOption11.includes("Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero")}
                    onPress={() =>
                      handleOptionChange22("Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero")
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption11 === "Medicina Tradicional Ej: Chamán, Taita, Hierbas, Ungüentos, Sobandero"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Hospitalización"
                    checked={selectedOption11.includes("Hospitalización")}
                    onPress={() =>
                      handleOptionChange22("Hospitalización")
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption11 === "Hospitalización"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología"
                    checked={selectedOption11.includes("Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología")}
                    onPress={() =>
                      handleOptionChange22("Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología")
                    }
                    containerStyle={styles.checkBoxContainer}

                    textStyle={
                      selectedOption11 === "Medicina Especializada Ej: cirugía, cardiología, psiquiatría, neurología"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Otro ¿Cuál?"
                    checked={selectedOption11.includes("Otro motivo ¿Cuál?")}
                    onPress={() =>
                      handleOptionChange22("Otro motivo ¿Cuál?")
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOption11 === "Otro motivo ¿Cuál?"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />

                  {(selectedOption11 === 'Otro motivo ¿Cuál?' ||
                    selectedOption11 === 'Consultorio Particular u otro servicio fuera del Municipio') && (
                      <View style={styles.preguntaContainer}>
                        <Text style={styles.preguntaText}>Especifique otro:</Text>
                        <TextInput
                          style={styles.input}
                          value={motivo3}
                          onChangeText={handleMotivo3Change}
                          placeholder="Indique otro"
                        />
                      </View>
                    )}
                </View>

              )}

            </View>


            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>PREGUNTA 5.7 (Selección Múltiple - Máximo 2 opciones)</Text>

              <Text style={styles.recuadroTitulo}>Indique quién pagó por su atención para la prestación de los servicios de salud /rehabilitación</Text>
              <View style={styles.optionContainer}>
                <CheckBox
                  title="El sistema general de salud (ARL, EAPB)"
                  checked={selectedOptions4.includes('El sistema general de salud (ARL, EAPB)')}
                  onPress={() => handleOption4Select('El sistema general de salud (ARL, EAPB)')}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions4 === "El sistema general de salud (ARL, EAPB)"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
                <CheckBox
                  title="La familia"
                  checked={selectedOptions4.includes('La familia')}
                  onPress={() => handleOption4Select('La familia')}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions4 === "La familia"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
                <CheckBox
                  title="Personalmente (usted mismo)"
                  checked={selectedOptions4.includes('Personalmente (usted mismo)')}
                  onPress={() => handleOption4Select('Personalmente (usted mismo)')}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions4 === "Personalmente (usted mismo)"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
                <CheckBox
                  title="Una ONG"
                  checked={selectedOptions4.includes('Una ONG')}
                  onPress={() => handleOption4Select('Una ONG')}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions4 === "Una ONG"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
                <CheckBox
                  title="El empleador"
                  checked={selectedOptions4.includes('El empleador')}
                  onPress={() => handleOption4Select('El empleador')}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions4 === "El empleador"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
                <CheckBox
                  title="Otro"
                  checked={selectedOptions4.includes('Otro')}
                  onPress={() => handleOption4Select('Otro')}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions4 === "Otro"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
              </View>

            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>   PREGUNTA 5.8 (Selección Única)</Text>

              <Text style={styles.recuadroTitulo}>Indique si el establecimiento donde recibió la atención es: </Text>
              <View style={styles.optionContainer}>
                <CheckBox
                  title="Público"
                  checked={selectedOption8 === 'Público'}
                  onPress={() => handleOption8Select('Público')}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption8 === "Público"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
                <CheckBox
                  title="Privado"
                  checked={selectedOption8 === 'Privado'}
                  onPress={() => handleOption8Select('Privado')}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption8 === "Privado"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
                <CheckBox
                  title="No sabe"
                  checked={selectedOption8 === 'No sabe'}
                  onPress={() => handleOption8Select('No sabe')}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption8 === "No sabe"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }

                />
              </View>
              {selectedOption8 === 'Privado' && (
                <View style={styles.preguntaContainer}>
                  <Text style={styles.preguntaText}>Nombre de la institución /consultorio:</Text>
                  <TextInput
                    style={styles.input}
                    value={nombre}
                    onChangeText={handleNombreChange}
                    placeholder="Ingrese el Nombre"
                  />
                  <Text style={styles.preguntaText}>Lugar en el que se ubica la institución /consultorio (Ciudad/ Municipio):</Text>
                  <TextInput
                    style={styles.input}
                    value={lugar}
                    onChangeText={handleLugarChange}
                    placeholder="Ingrese el Lugar"
                  />
                </View>
              )}

            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>   PREGUNTA 5.9 (Selección Única)</Text>
              <Text style={styles.recuadroTitulo}>      ! Validar con la respuesta 4.3 </Text>

              <Text style={styles.recuadroTitulo}>Como consecuencia de su condición de salud ¿ha requerido productos de apoyo durante el último año? (ej.: sillas de ruedas, bastones de orientación
                visual, muletas, caminadores, audífonos, gafas, prótesis, etc.) </Text>
              <View style={styles.optionContainer}>
                <CheckBox
                  title="Sí"
                  checked={selectedOption9 === 'Sí'}
                  onPress={() => handleOption9Select('Sí')}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption9 === "Sí"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                />
                <CheckBox
                  title="No"
                  checked={selectedOption9 === 'No'}
                  onPress={() => handleOption9Select('No')}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption8 === "No"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }

                />
              </View>

            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>  PREGUNTA 5.10 (Selección Múltiple - Máximo 3 opcio)</Text>

              <Text style={styles.recuadroTitulo}>Como parte de la atención de su condición de salud ¿ha recibido productos de apoyo durante el último año? (ej.: sillas de ruedas, bastones de orientación visual, muletas, caminadores, audífonos, gafas, prótesis, etc.)</Text>
              <View style={styles.optionContainer}>

                <CheckBox
                  title="Si"
                  checked={selectedOption0 === "Si"}
                  onPress={() => setSelectedOption0("Si")}
                  containerStyle={styles.checkBoxContainer}

                  textStyle={
                    selectedOption0 === "Sí"
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
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
                />

              </View>
              {selectedOption0 === "No" && (
                <View style={styles.questionContainer}>
                  <Text style={styles.pregunta}>
                    {" "}
                    SELECCIONE
                  </Text>

                  <CheckBox
                    title="Múltiples desplazamientos para gestionar autorización"
                    checked={selectedOptions0.includes("Múltiples desplazamientos para gestionar autorización")}
                    onPress={() => handleOptionChange0("Múltiples desplazamientos para gestionar autorización")}
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions0 === "Múltiples desplazamientos para gestionar autorización"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
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
                      selectedOptions0 === "Historia Clínica exigida para la autorización"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Tiempos largos de espera para la autorización, congestión en
           el servicio de salud"
                    checked={selectedOptions0.includes(
                      "Tiempos largos de espera para la autorización, congestión en el servicio de salud"
                    )}
                    onPress={() =>
                      handleOptionChange0("Tiempos largos de espera para la autorización, congestión en el servicio de salud")
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions0 === "Tiempos largos de espera para la autorización, congestión en el servicio de salud"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Remisiones a IPS sin convenio"
                    checked={selectedOptions0.includes("Remisiones a IPS sin convenio")}
                    onPress={() =>
                      handleOptionChange0("Remisiones a IPS sin convenio")
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions0 === "Remisiones a IPS sin convenio"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Vencimiento de la autorización por no agenda del profesional,
           requiere nuevamente cita con medicina general"
                    checked={selectedOptions0.includes("Vencimiento de la autorización por no agenda del profesional,requiere nuevamente cita con medicina general")}
                    onPress={() =>
                      handleOptionChange0("Vencimiento de la autorización por no agenda del profesional, requiere nuevamente cita con medicina general")
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions0 === "Vencimiento de la autorización por no agenda del profesional,requiere nuevamente cita con medicina general"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Considera que no lo necesita "
                    checked={selectedOptions0.includes("Considera que no lo necesita ")}
                    onPress={() =>
                      handleOptionChange0("Considera que no lo necesita ")
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions0 === "Considera que no lo necesita "
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  <CheckBox
                    title="Déficit Intelectual / Disminución de la Capacidad Mental"
                    checked={selectedOptions0.includes(
                      "Déficit Intelectual / Disminución de la Capacidad Mental"
                    )}
                    onPress={() =>
                      handleOptionChange0(
                        "Déficit Intelectual / Disminución de la Capacidad Mental"
                      )
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions0 === "Déficit Intelectual / Disminución de la Capacidad Mental"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                    
                  />
                  <CheckBox
                    title="Otro motivo ¿Cuál?"
                    checked={selectedOptions0.includes("Otro motivo ¿Cuál?")} onPress={() => handleOptionChange0(
                      "Otro motivo ¿Cuál?"
                    )
                    }
                    containerStyle={styles.checkBoxContainer}
                    textStyle={
                      selectedOptions0 === "Otro motivo ¿Cuál?"
                        ? styles.selectedOptionText
                        : styles.checkBoxText
                    }
                  />
                  {(selectedOptions0 === 'Otro motivo ¿Cuál?' ||
                    selectedOptions0 === 'Consultorio Particular u otro servicio fuera del Municipio') && (
                      <View style={styles.preguntaContainer}>
                        <Text style={styles.preguntaText}>Especifique otro:</Text>
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

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>  PREGUNTA 5.12 (Selección Única)</Text>

              <Text style={styles.recuadroTitulo}>! Validar con la respuesta a a pregunta 5.5</Text>
              <Text style={styles.pregunta}>Según su experiencia de atención en los servicios de rehabilitación durante el último año califique:</Text>
              {/* Info row */}
              <View style={styles.row}>
                <View style={styles.cell}></View>

                <View style={styles.cell}>
                  <Text>Costo en dinero de la atención</Text>
                </View>
                <View style={styles.cell}>
                  <Text>Costo en dinero del transporte</Text>
                </View>
                <View style={styles.cell}>
                  <Text>Tiempo de desplazamiento</Text>
                </View>
              </View>

              {/* row baja */}
              <View style={styles.row}>
                <View style={styles.cell}>
                  <Text>BAJA</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    selectedCell?.row === 0 && selectedCell?.col === 1 && styles.selectedCell,
                  ]}
                  onTouchStart={() => handleCellSelection(0, 1)}
                >
                  <Text>$0
                    $2.900</Text>
                  <CheckBox
                    checked={selectedCell?.row === 0 && selectedCell?.col === 1}
                    onPress={() => handleCellSelection(0, 1)}
                  />
                </View>
                <View
                  style={[
                    styles.cell,
                    selectedCell?.row === 0 && selectedCell?.col === 2 && styles.selectedCell,
                  ]}
                  onTouchStart={() => handleCellSelection(0, 2)}
                >
                  <Text>$0
                    $2.900</Text>
                  <CheckBox
                    checked={selectedCell?.row === 0 && selectedCell?.col === 2}
                    onPress={() => handleCellSelection(0, 2)}
                  />
                </View>
                <View
                  style={[
                    styles.cell,
                    selectedCell?.row === 0 && selectedCell?.col === 3 && styles.selectedCell,
                  ]}
                  onTouchStart={() => handleCellSelection(0, 3)}
                >
                  <Text>15 min
                    30 min</Text>
                  <CheckBox
                    checked={selectedCell?.row === 0 && selectedCell?.col === 3}
                    onPress={() => handleCellSelection(0, 3)}
                  />
                </View>
              </View>

              {/*row media */}
              <View style={styles.row}>
                <View style={styles.cell}>
                  <Text>MEDIA</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    selectedCell?.row === 1 && selectedCell?.col === 1 && styles.selectedCell,
                  ]}
                  onTouchStart={() => handleCellSelection(1, 1)}
                >
                  <Text>$3.000
                    $14.900</Text>
                  <CheckBox
                    checked={selectedCell?.row === 1 && selectedCell?.col === 1}
                    onPress={() => handleCellSelection(1, 1)}
                  />
                </View>
                <View
                  style={[
                    styles.cell,
                    selectedCell?.row === 1 && selectedCell?.col === 2 && styles.selectedCell,
                  ]}
                  onTouchStart={() => handleCellSelection(1, 2)}
                >
                  <Text>$3.000
                    $9.900</Text>
                  <CheckBox
                    checked={selectedCell?.row === 1 && selectedCell?.col === 2}
                    onPress={() => handleCellSelection(1, 2)}
                  />
                </View>
                <View
                  style={[
                    styles.cell,
                    selectedCell?.row === 1 && selectedCell?.col === 3 && styles.selectedCell,
                  ]}
                  onTouchStart={() => handleCellSelection(1, 3)}
                >
                  <Text>30 min
                    60 min</Text>
                  <CheckBox
                    checked={selectedCell?.row === 1 && selectedCell?.col === 3}
                    onPress={() => handleCellSelection(1, 3)}
                  />
                </View>
              </View>


              {/*row alta */}
              <View style={styles.row}>
                <View style={styles.cell}>
                  <Text>ALTA</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    selectedCell?.row === 2 && selectedCell?.col === 1 && styles.selectedCell,
                  ]}
                  onTouchStart={() => handleCellSelection(2, 1)}
                >
                  <Text>$15.000
                    $29.900</Text>
                  <CheckBox
                    checked={selectedCell?.row === 2 && selectedCell?.col === 1}
                    onPress={() => handleCellSelection(2, 1)}
                  />
                </View>
                <View
                  style={[
                    styles.cell,
                    selectedCell?.row === 2 && selectedCell?.col === 2 && styles.selectedCell,
                  ]}
                  onTouchStart={() => handleCellSelection(2, 2)}
                >
                  <Text>$10.000
                    $29.900</Text>
                  <CheckBox
                    checked={selectedCell?.row === 2 && selectedCell?.col === 2}
                    onPress={() => handleCellSelection(2, 2)}
                  />
                </View>
                <View
                  style={[
                    styles.cell,
                    selectedCell?.row === 2 && selectedCell?.col === 3 && styles.selectedCell,
                  ]}
                  onTouchStart={() => handleCellSelection(2, 3)}
                >
                  <Text>60 min
                    90 min</Text>
                  <CheckBox
                    checked={selectedCell?.row === 2 && selectedCell?.col === 3}
                    onPress={() => handleCellSelection(2, 3)}
                  />
                </View>
              </View>

              {/*row muy alta */}
              <View style={styles.row}>
                <View style={styles.cell}>
                  <Text>Muy Alta</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    selectedCell?.row === 3 && selectedCell?.col === 1 && styles.selectedCell,
                  ]}
                  onTouchStart={() => handleCellSelection(3, 1)}
                >
                  <Text>$30.000
                    $60.000</Text>
                  <CheckBox
                    checked={selectedCell?.row === 3 && selectedCell?.col === 1}
                    onPress={() => handleCellSelection(3, 1)}
                  />
                </View>
                <View
                  style={[
                    styles.cell,
                    selectedCell?.row === 3 && selectedCell?.col === 2 && styles.selectedCell,
                  ]}
                  onTouchStart={() => handleCellSelection(3, 2)}
                >
                  <Text>$29.900
                    $60.000</Text>
                  <CheckBox
                    checked={selectedCell?.row === 3 && selectedCell?.col === 2}
                    onPress={() => handleCellSelection(3, 2)}
                  />
                </View>
                <View
                  style={[
                    styles.cell,
                    selectedCell?.row === 3 && selectedCell?.col === 3 && styles.selectedCell,
                  ]}
                  onTouchStart={() => handleCellSelection(3, 3)}
                >
                  <Text> 90 min</Text>
                  <CheckBox
                    checked={selectedCell?.row === 3 && selectedCell?.col === 3}
                    onPress={() => handleCellSelection(3, 3)}
                  />
                </View>
              </View>
            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>  PREGUNTA 5.13 (Selección Única)</Text>
              <Text style={styles.recuadroTitulo}> Validar con la respuesta a a pregunta 5.5</Text>
              <Text style={styles.pregunta}> Según su experiencia de atención en los servicios de rehabilitación durante el último año califique:</Text>
              <View style={styles.optionContainer}>

                {/* Info row */}
                <View style={styles.row}>
                  <View style={styles.cell}></View>

                  <View style={styles.cell}>
                    <Text>Oportunidad en la asignación de la cita</Text>
                  </View>
                  <View style={styles.cell}>
                    <Text>Calidad en la atención por parte del profesional</Text>
                  </View>
                  <View style={styles.cell}>
                    <Text>Satisfacción de la atención recibida </Text>
                  </View>
                </View>

                {/*row alta */}
                <View style={styles.row}>
                  <View style={styles.cell}>
                    <Text>ALTA</Text>
                  </View>
                  <View
                    style={[
                      styles.cell,
                      selectedCell1?.row === 0 && selectedCell1?.col === 1 && styles.selectedCell,
                    ]}
                    onTouchStart={() => handleCellSelection1(0, 1)}
                  >
                    <Text>3 días</Text>
                    <CheckBox
                      checked={selectedCell1?.row === 0 && selectedCell1?.col === 1}
                      onPress={() => handleCellSelection1(0, 1)}
                    />
                  </View>
                  <View
                    style={[
                      styles.cell,
                      selectedCell1?.row === 0 && selectedCell1?.col === 2 && styles.selectedCell,
                    ]}
                    onTouchStart={() => handleCellSelection1(0, 2)}
                  >
                    <Text>8 – 10</Text>
                    <CheckBox
                      checked={selectedCell1?.row === 0 && selectedCell1?.col === 2}
                      onPress={() => handleCellSelection1(0, 2)}
                    />
                  </View>
                  <View
                    style={[
                      styles.cell,
                      selectedCell1?.row === 0 && selectedCell1?.col === 3 && styles.selectedCell,
                    ]}
                    onTouchStart={() => handleCellSelection1(0, 3)}
                  >
                    <Text>8 – 10</Text>
                    <CheckBox
                      checked={selectedCell1?.row === 0 && selectedCell1?.col === 3}
                      onPress={() => handleCellSelection1(0, 3)}
                    />
                  </View>
                </View>

                {/* row media */}
                <View style={styles.row}>
                  <View style={styles.cell}>
                    <Text>MEDIA</Text>
                  </View>
                  <View
                    style={[
                      styles.cell,
                      selectedCell1?.row === 1 && selectedCell1?.col === 1 && styles.selectedCell,
                    ]}
                    onTouchStart={() => handleCellSelection1(1, 1)}
                  >
                    <Text>3 – 5 días</Text>
                    <CheckBox
                      checked={selectedCell1?.row === 1 && selectedCell1?.col === 1}
                      onPress={() => handleCellSelection1(1, 1)}
                    />
                  </View>
                  <View
                    style={[
                      styles.cell,
                      selectedCell1?.row === 1 && selectedCell1?.col === 2 && styles.selectedCell,
                    ]}
                    onTouchStart={() => handleCellSelection1(1, 2)}
                  >
                    <Text>4 - 7</Text>
                    <CheckBox
                      checked={selectedCell1?.row === 1 && selectedCell1?.col === 2}
                      onPress={() => handleCellSelection1(1, 2)}
                    />
                  </View>
                  <View
                    style={[
                      styles.cell,
                      selectedCell1?.row === 1 && selectedCell1?.col === 3 && styles.selectedCell,
                    ]}
                    onTouchStart={() => handleCellSelection1(1, 3)}
                  >
                    <Text>4 - 7</Text>
                    <CheckBox
                      checked={selectedCell1?.row === 1 && selectedCell1?.col === 3}
                      onPress={() => handleCellSelection1(1, 3)}
                    />
                  </View>
                </View>


                {/* row baja */}
                <View style={styles.row}>
                  <View style={styles.cell}>
                    <Text>BAJA</Text>
                  </View>
                  <View
                    style={[
                      styles.cell,
                      selectedCell1?.row === 2 && selectedCell1?.col === 1 && styles.selectedCell,
                    ]}
                    onTouchStart={() => handleCellSelection1(2, 1)}
                  >
                    <Text> 5 días</Text>
                    <CheckBox
                      checked={selectedCell1?.row === 2 && selectedCell1?.col === 1}
                      onPress={() => handleCellSelection1(2, 1)}
                    />
                  </View>
                  <View
                    style={[
                      styles.cell,
                      selectedCell1?.row === 2 && selectedCell1?.col === 2 && styles.selectedCell,
                    ]}
                    onTouchStart={() => handleCellSelection1(2, 2)}
                  >
                    <Text>1 - 3</Text>
                    <CheckBox
                      checked={selectedCell1?.row === 2 && selectedCell1?.col === 2}
                      onPress={() => handleCellSelection1(2, 2)}
                    />
                  </View>
                  <View
                    style={[
                      styles.cell,
                      selectedCell1?.row === 2 && selectedCell1?.col === 3 && styles.selectedCell,
                    ]}
                    onTouchStart={() => handleCellSelection1(2, 3)}
                  >
                    <Text>1 - 3</Text>
                    <CheckBox
                      checked={selectedCell1?.row === 2 && selectedCell1?.col === 3}
                      onPress={() => handleCellSelection1(2, 3)}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>  PREGUNTA 5.14 (Selección MÚLTIPLE - MÁXIMO 2 OPCIONES)</Text>

              <Text style={styles.recuadroTitulo}>Indique el medio de transporte utilizado para asistir al servicio de salud / rehabilitación:</Text>
              <View style={styles.optionContainer}>

                {opciones.map((opcion, index) => (
                  <CheckBox
                    key={index}
                    title={opcion}
                    checked={selecteOptions.includes(index)}
                    onPress={() => handleCheckboxChange(index)}
                    containerStyle={styles.checkBoxContainer}
                textStyle={
                  selectedOption === opcion
                    ? styles.selectedOptionText
                    : styles.checkBoxText}                    
                    
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

            <TouchableOpacity style={styles.boton} onPress={goToPreguntaSeis}>
              <Text style={styles.textoBoton}>Siguiente</Text>
            </TouchableOpacity>





          </View>
        </View>
      </View>


    </ScrollView>

  )
}
const styles = StyleSheet.create({
  preguntaText: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  container: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    alignItems: "center",
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
    borderColor: 'black',
    borderRadius: 5,
    padding: 8,
    alignSelf: 'stretch',
    marginHorizontal: 8,
  },
  recuadroTitulo: {
    fontWeight: "bold",
    marginBottom: 10,
    color: "#35669a",
    fontSize: 14,
  },
  opcionesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
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
  errorMsg: {
    color: "red",
    fontSize: 14,
    marginTop: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  tablaContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 8,
    alignSelf: 'stretch',
    marginHorizontal: 8,
  },
  fila: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  celda: {
    flex: 1,
    padding: 8,
    borderRightWidth: 1,
    borderColor: 'black',
  },
  tituloSeccion: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedCell: {
    backgroundColor: 'white',
    color: '#fff',
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