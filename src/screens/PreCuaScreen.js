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
import { useState } from "react";
import { includes } from "lodash";
import appFirebase from "../components/firebase-config";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
const db = getFirestore(appFirebase)


export default function PreCuaScreen(props) {
  const { navigation } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [selectedOptions3, setSelectedOptions3] = useState([]);
  const [selectedOptions4, setSelectedOptions4] = useState([]);
  const [selectedOptions5, setSelectedOptions5] = useState([]);
  const [selectedOptions6, setSelectedOptions6] = useState([]);
  const [selectedOptions7, setSelectedOptions7] = useState([]);
  const [deficitOptions, setDeficitOptions] = useState(false); // Estado para mostrar/ocultar los CheckBox adicionales
  const [deficit, setDeficit] = useState("");
  const [cronicas, setCronicas] = useState("");
  const [infecciosas, setInfecciosas] = useState("");
  const [sensoriales, setSensoriales] = useState("");
  const [lesiones, setLesiones] = useState("");
  const [autoinmunes, setAutoinmunes] = useState("");
  const [mental, setMental] = useState(""); // Estado para capturar el texto del TextInput


  const goToPreguntaCin = () => {
    if (
      selectedOption !== "" &&
      (selectedOption === "No" ? (selectedOptions1.length !== 0) : true) &&
      selectedOptions.length !== 0 &&
      selectedOption1.length !== 0

    ) {
      navigation.navigate("Pregunta 2.3");

    } else {
      Alert.alert("Error", "Por favor completa todos los campos.");
    }


  };

  const SaveComponente4 = async () => {
    try {
      await addDoc(collection(db, 'componentecuatro'), {

        pregunta4_1: selectedOption,
        pregunta4_2: selectedOptions,
        pregunta4_3_1Transtornos: selectedOptions1,
        pregunta4_3_Def: deficit,
        pregunta4_3_Cronicas: selectedOptions2,
        pregunta4_3_Cron: cronicas,
        pregunta4_3_TransInfecio: selectedOptions3,
        pregunta4_3_Infec: infecciosas,
        pregunta4_3_4_Sensoriales: selectedOptions4,
        pregunta4_3_4_Sens: sensoriales,
        pregunta4_3_5Lesiones: selectedOptions5,
        pregunta4_3_5Less: lesiones,
        pregunta4_3_6OtrasCirc: selectedOptions6,
        pregunta4_3_7: selectedOptions7,
        pregunta4_3_6_Auto: autoinmunes,
        pregunta4_4: selectedOption1,


      });


    } catch (error) {
      console.error(error);

    }
  };

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      if (selectedOption === "Si" && selectedOptions.length < 3) {
        setSelectedOptions([...selectedOptions, option]);
      } else if (selectedOption === "No" && selectedOptions.length < 3) {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
  };

  const handleOptionChange1 = (option) => {
    if (selectedOptions1.includes(option)) {
      setSelectedOptions1(selectedOptions1.filter((item) => item !== option));
    } else {
      if (selectedOptions1.length < 2) {
        setSelectedOptions1([...selectedOptions1, option]);
      }
    }

    // Verificar si la opción seleccionada es "Déficit Intelectual / Disminución de la Capacidad Mental"
    if (option === "Déficit Intelectual / Disminución de la Capacidad Mental") {
      // Si ya estaba seleccionada, ocultar los CheckBox adicionales
      if (selectedOptions1.includes(option)) {
        setDeficitOptions(false);
      } else {
        // Si se selecciona, mostrar los CheckBox adicionales
        setDeficitOptions(true);
      }
    }

    // Si se deselecciona la opción "Otras circunstancias relacionadas con alteraciones de la salud mental", reiniciar el campo de texto
    if (
      option ===
      "Otras circunstancias relacionadas con alteraciones de la salud mental"
    ) {
      setMental("");
    }
  };

  // Función de manejo
  const handleOptionChange2 = (option) => {
    if (selectedOptions2.includes(option)) {
      setSelectedOptions2(selectedOptions2.filter((item) => item !== option));
    } else {
      if (selectedOptions2.length < 2) {
        setSelectedOptions2([...selectedOptions2, option]);
      }
    }
    if (option === "Otras enfermedades crónicas no transmisibles") {
      setCronicas("");
    }
  };

  // Función de manejo para la pregunta
  const handleOptionChange3 = (option) => {
    if (selectedOptions3.includes(option)) {
      setSelectedOptions3(selectedOptions3.filter((item) => item !== option));
    } else {
      if (selectedOptions3.length < 2) {
        setSelectedOptions3([...selectedOptions3, option]);
      }
    }

    if (option === "Otras enfermedades infecciosas") {
      setInfecciosas("");
    }
  };

  const handleOptionChange4 = (option) => {
    if (selectedOptions4.includes(option)) {
      setSelectedOptions4(selectedOptions4.filter((item) => item !== option));
    } else {
      if (selectedOptions4.length < 2) {
        setSelectedOptions4([...selectedOptions4, option]);
      }
    }
    if (
      option === "Otras enfermedades sensoriales de los órganos de los sentidos"
    ) {
      setSensoriales("");
    }
  };

  const handleOptionChange5 = (option) => {
    if (selectedOptions5.includes(option)) {
      setSelectedOptions5(selectedOptions5.filter((item) => item !== option));
    } else {
      if (selectedOptions5.length < 2) {
        setSelectedOptions5([...selectedOptions5, option]);
      }
    }

    if (option === "Otras causas de lesiones accidentales") {
      setLesiones("");
    }
  };
  const handleOptionChange6 = (option) => {
    if (selectedOptions6.includes(option)) {
      setSelectedOptions6(selectedOptions6.filter((item) => item !== option));
    } else {
      if (selectedOptions6.length < 2) {
        setSelectedOptions6([...selectedOptions6, option]);
      }
    }

    if (option === "Enfermedades Autoinmunes") {
      setCronicas("");
    }
  };

  const handleOptionChange7 = (option) => {
    if (selectedOptions7.includes(option)) {
      setSelectedOptions7(selectedOptions7.filter((item) => item !== option));
    } else {
      if (selectedOptions7.length < 2) {
        setSelectedOptions7([...selectedOptions7, option]);
      }
    }
  };

  const handleOptionChange8 = (option) => {
    if (selectedOption1.includes(option)) {
      setSelectedOption1(selectedOption1.filter((item) => item !== option));
    } else {
      if (selectedOption1.length < 2) {
        setSelectedOption1([...selectedOption1, option]);
      }
    }
  };
  const handleDeficitChange = (text) => {
    setDeficit(text);
  };

  return (
    <ScrollView>
      {/* Pregunta 4.1 */}
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>  CONDICIONES DE SALUD </Text>
            <Text style={styles.question}> PREGUNTA 4.1 ( SELECCIÓN ÚNICA) </Text>
          </View>
          <View style={styles.linea} />
        </View>
      </View>

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.pregunta}>
              {" "}
              ¿Ha presentado alguna condición, síntoma, dolencia o molestia
              durante el último año que le dificulte el desarrollo de sus
              actividades diarias? (ej. bañarse, moverse, realizar oficios del
              hogar, trabajar, etc.){" "}
            </Text>
            <View style={styles.inputDate}>
              <CheckBox
                title="Si"
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
          </View>
        </View>
      </View>

      

      {/* Pregunta 4.2 */}



      {selectedOption === "Si" && (
        <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
          <Text style={styles.question2}> PREGUNTA 4.2 (SELECCIÓN MÚLTIPLE - MÁXIMO 3 OPCIONES) </Text>
                <View style={styles.linea1} />
               

            <View style={styles.questionContainer}>

              <Text style={styles.pregunta}>
                Indique en cuál(es) de las siguientes “actividades de la vida
                diaria” ha presenta- do mayor dificultad durante el último año
                como consecuencia de su condición de salud:{" "}
              </Text>
              <CheckBox
                title="Oír la voz o los sonidos"
                checked={selectedOptions.includes("Oír la voz o los sonidos")}
                onPress={() => handleOptionChange("Oír la voz o los sonidos")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  selectedOptions.includes("Oír la voz o los sonidos")
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />


              <CheckBox
                title="	Hablar o conversar"
                checked={selectedOptions.includes("Hablar o conversar")}
                onPress={() => handleOptionChange("Hablar o conversar")}
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  selectedOptions.includes("Hablar o conversar")
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Ver de cerca, de lejos o alrededor"
                checked={selectedOptions.includes(
                  "Ver de cerca, de lejos o alrededor"
                )}
                onPress={() =>
                  handleOptionChange("Ver de cerca, de lejos o alrededor")
                }
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  selectedOptions.includes("Ver de cerca, de lejos o alrededor")
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Mover el cuerpo, caminar, subir o bajar escaleras"
                checked={selectedOptions.includes(
                  "Mover el cuerpo, caminar, subir o bajar escaleras"
                )}
                onPress={() =>
                  handleOptionChange(
                    "Mover el cuerpo, caminar, subir o bajar escaleras"
                  )
                }
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  selectedOptions.includes("Mover el cuerpo, caminar, subir o bajar escaleras")

                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Agarrar o mover objetos con las manos"
                checked={selectedOptions.includes(
                  "Agarrar o mover objetos con las manos"
                )}
                onPress={() =>
                  handleOptionChange("Agarrar o mover objetos con las manos")
                }
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  selectedOptions.includes("Agarrar o mover objetos con las manos")
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title=" Entender, recordar o tomar decisiones por sí mismo/a"
                checked={selectedOptions.includes(
                  "Entender, recordar o tomar decisiones por sí mismo/a"
                )}
                onPress={() =>
                  handleOptionChange(
                    "Entender, recordar o tomar decisiones por sí mismo/a"
                  )
                }
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  selectedOptions.includes("Entender, recordar o tomar decisiones por sí mismo/a")

                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Comer, vestirse o bañarse por sí mismo/a"
                checked={selectedOptions.includes(
                  "Comer, vestirse o bañarse por sí mismo/a"
                )}
                onPress={() =>
                  handleOptionChange(
                    "Comer, vestirse o bañarse por sí mismo/a"
                  )
                }
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  selectedOptions.includes("Comer, vestirse o bañarse por sí mismo/a")

                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Relacionarse o interactuar con los demás (salud mental)"
                checked={selectedOptions.includes(
                  "Relacionarse o interactuar con los demás (salud mental)"
                )}
                onPress={() =>
                  handleOptionChange(
                    "Relacionarse o interactuar con los demás (salud mental)"
                  )
                }
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  selectedOptions.includes("Relacionarse o interactuar con los demás (salud mental)")

                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Hacer las tareas diarias sin mostrar problemas cardiacos respiratorios o renales"
                checked={selectedOptions.includes(
                  "Hacer las tareas diarias sin mostrar problemas cardiacos respiratorios o renales"
                )}
                onPress={() =>
                  handleOptionChange(
                    "Hacer las tareas diarias sin mostrar problemas cardiacos respiratorios o renales"
                  )
                }
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  selectedOptions.includes("Hacer las tareas diarias sin mostrar problemas cardiacos respiratorios o renales")

                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />
              <CheckBox
                title="Ninguna de las anteriores"
                checked={selectedOptions.includes(
                  "Ninguna de las anteriores"
                )}
                onPress={() =>
                  handleOptionChange("Ninguna de las anteriores")
                }
                containerStyle={styles.checkBoxContainer}
                textStyle={
                  selectedOptions.includes("Ninguna de las anteriores")
                    ? styles.selectedOptionText
                    : styles.checkBoxText
                }
                checkedColor="#BA0C2F"
              />

              <Text style={styles.question2}>
                PREGUNTA 4.4 (SELECCIÓN MÚLTIPLE - MÁXIMO 2 OPCIONES)
              </Text>
              <View style={styles.linea1} />

              <Text style={styles.preguntas}>
                Su condición de salud en el último año está relacionada con mayor
                frecuencia con la alteración de:
              </Text>

              <View style={styles.inputDate}>
                <CheckBox
                  title="Funciones mentales"
                  checked={selectedOption1.includes("Funciones mentales")}
                  onPress={() => handleOptionChange8("Funciones mentales")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption1.includes("Funciones mentales")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Funciones sensoriales para la captación de estímulos"
                  checked={selectedOption1.includes(
                    "Funciones sensoriales para la captación de estímulos"
                  )}
                  onPress={() =>
                    handleOptionChange8(
                      "Funciones sensoriales para la captación de estímulos"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption1.includes("Funciones sensoriales para la captación de estímulos")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Funciones de la voz y el habla"
                  checked={selectedOption1.includes(
                    "Funciones de la voz y el habla"
                  )}
                  onPress={() =>
                    handleOptionChange8("Funciones de la voz y el habla")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption1.includes("Funciones de la voz y el habla")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Funciones de los sistemas cardiovascular, hematológico, inmunológico y respiratorio"
                  checked={selectedOption1.includes(
                    "Funciones de los sistemas cardiovascular, hematológico, inmunológico y respiratorio"
                  )}
                  onPress={() =>
                    handleOptionChange8(
                      "Funciones de los sistemas cardiovascular, hematológico, inmunológico y respiratorio"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption1.includes("Funciones de los sistemas cardiovascular, hematológico, inmunológico y respiratorio")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Funciones de los sistemas digestivos, metabólico y endocrino (las hormonas)"
                  checked={selectedOption1.includes(
                    "Funciones de los sistemas digestivos, metabólico y endocrino (las hormonas)"
                  )}
                  onPress={() =>
                    handleOptionChange8(
                      "Funciones de los sistemas digestivos, metabólico y endocrino (las hormonas)"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption1.includes("Funciones de los sistemas digestivos, metabólico y endocrino (las hormonas)")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Funciones genitourinarias y reproductoras"
                  checked={selectedOption1.includes(
                    "Funciones genitourinarias y reproductoras"
                  )}
                  onPress={() =>
                    handleOptionChange8(
                      "Funciones genitourinarias y reproductoras"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption1.includes("Funciones genitourinarias y reproductoras")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Funciones neuromusculoesqueléticas y relacionadas con el movimiento"
                  checked={selectedOption1.includes(
                    "Funciones neuromusculoesqueléticas y relacionadas con el movimiento"
                  )}
                  onPress={() =>
                    handleOptionChange8(
                      "Funciones neuromusculoesqueléticas y relacionadas con el movimiento"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption1.includes("Funciones neuromusculoesqueléticas y relacionadas con el movimiento")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Funciones de la piel y estructuras relacionadas (uñas, cabello)"
                  checked={selectedOption1.includes(
                    "Funciones de la piel y estructuras relacionadas (uñas, cabello)"
                  )}
                  onPress={() =>
                    handleOptionChange8(
                      "Funciones de la piel y estructuras relacionadas (uñas, cabello)"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption1.includes("Funciones de la piel y estructuras relacionadas (uñas, cabello)")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Ninguna de las anteriores"
                  checked={selectedOption1.includes("Ninguna de las anteriores")}
                  onPress={() => handleOptionChange8("Ninguna de las anteriores")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOption1.includes("Ninguna de las anteriores")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

              </View>
              <Text style={styles.advertencia}>Nota: (Validar con respuesta 4.3.) </Text>
            </View>

          </View>

        </View>
      </View>
       

      


)}
 
      
      

      {/* Pregunta 4.3 */}

      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>


            {selectedOption === "No" && (

              <View style={styles.questionContainer}>

                <Text style={styles.question2}> PREGUNTA 4.3 (SELECCIÓN MÚLTIPLE - MÁXIMO 2 OPCIONES) </Text>
                <View style={styles.linea1} />
                <Text style={styles.preguntas}>
                  {" "}
                  Indique cuál de las siguientes condiciones de salud ha
                  presentado durante el último año:{" "}
                </Text>
                <Text style={styles.preguntas}>
                  {" "}
                  1. Circunstancias relacionadas con alteraciones de la salud
                  mental (incluye: trastornos mentales, del comportamiento y del
                  desarrollo neurológico)
                </Text>

                <CheckBox
                  title="Trastornos de ansiedad"
                  checked={selectedOptions1.includes("Trastornos de ansiedad")}
                  onPress={() => handleOptionChange1("Trastornos de ansiedad")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions1.includes("Trastornos de ansiedad")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Trastornos del estado de ánimo o afectivos"
                  checked={selectedOptions1.includes(
                    "Trastornos del estado de ánimo o afectivos"
                  )}
                  onPress={() =>
                    handleOptionChange1(
                      "Trastornos del estado de ánimo o afectivos"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions1.includes("Trastornos del estado de ánimo o afectivos")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Trastornos de la alimentación"
                  checked={selectedOptions1.includes(
                    "Trastornos de la alimentación"
                  )}
                  onPress={() =>
                    handleOptionChange1("Trastornos de la alimentación")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions1.includes("Trastornos de la alimentación")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Trastornos relacionados con sustancias"
                  checked={selectedOptions1.includes(
                    "Trastornos relacionados con sustancias"
                  )}
                  onPress={() =>
                    handleOptionChange1(
                      "Trastornos relacionados con sustancias"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions1.includes("Trastornos relacionados con sustancias")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Trastorno de la personalidad"
                  checked={selectedOptions1.includes(
                    "Trastorno de la personalidad"
                  )}
                  onPress={() =>
                    handleOptionChange1("Trastorno de la personalidad")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions1.includes("Trastorno de la personalidad")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Trastorno por estrés postraumático"
                  checked={selectedOptions1.includes(
                    "Trastorno por estrés postraumático"
                  )}
                  onPress={() =>
                    handleOptionChange1("Trastorno por estrés postraumático")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions1.includes("Trastorno por estrés postraumático")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Déficit Intelectual / Disminución de la Capacidad Mental"
                  checked={selectedOptions1.includes(
                    "Déficit Intelectual / Disminución de la Capacidad Mental"
                  )}
                  onPress={() =>
                    handleOptionChange1(
                      "Déficit Intelectual / Disminución de la Capacidad Mental"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions1.includes("Déficit Intelectual / Disminución de la Capacidad Mental")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                {/* Mostrar los CheckBox adicionales cuando deficitOptions es verdadero */}
                {deficitOptions && (
                  <View style={styles.questionContainer}>
                    <Text style={styles.pregunta}>
                      *Leve del 50 a 69 de C.I*
                    </Text>
                    <CheckBox
                      title="(déficit de aprendizaje escolar )"
                      checked={deficit.includes(
                        "(déficit de aprendizaje escolar )"
                      )}
                      onPress={() =>
                        handleDeficitChange("(déficit de aprendizaje escolar )")
                      }
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        deficit === "(déficit de aprendizaje escolar )"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />

                    <Text style={styles.preguntas}>
                      *Moderado del 35 a 49 de C.I.*
                    </Text>
                    <CheckBox
                      title="(déficit en el desarrollo de la comprensión, el movimiento y el uso del lenguaje), con dependencia parcial de un cuidador"
                      checked={deficit.includes(
                        "(déficit en el desarrollo de la comprensión, el movimiento y el uso del lenguaje), con dependencia parcial de un cuidador"
                      )}
                      onPress={() =>
                        handleDeficitChange(
                          "(déficit en el desarrollo de la comprensión, el movimiento y el uso del lenguaje), con dependencia parcial de un cuidador"
                        )
                      }
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        deficit ===
                          "(déficit en el desarrollo de la comprensión, el movimiento y el uso del lenguaje), con dependencia parcial de un cuidador"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />

                    <Text style={styles.preguntas}>
                      *Profunda del 20 a 34 de C.I.*
                    </Text>
                    <CheckBox
                      title="(escaso o nulo nivel del desarrollo del lenguaje, marcado déficit motor) con dependencia de cuidador"
                      checked={deficit.includes(
                        "(escaso o nulo nivel del desarrollo del lenguaje, marcado déficit motor) con dependencia de cuidador"
                      )}
                      onPress={() =>
                        handleDeficitChange(
                          "(escaso o nulo nivel del desarrollo del lenguaje, marcado déficit motor) con dependencia de cuidador"
                        )
                      }
                      containerStyle={styles.checkBoxContainer}
                      textStyle={
                        deficit ===
                          "(escaso o nulo nivel del desarrollo del lenguaje, marcado déficit motor) con dependencia de cuidador"
                          ? styles.selectedOptionText
                          : styles.checkBoxText
                      }
                      checkedColor="#BA0C2F"
                    />
                    <View style={styles.linea} />
                  </View>

                )}

                <CheckBox
                  title="Otras circunstancias relacionadas con alteraciones de la salud mental"
                  checked={selectedOptions1.includes(
                    "Otras circunstancias relacionadas con alteraciones de la salud mental"
                  )}
                  onPress={() =>
                    handleOptionChange1(
                      "Otras circunstancias relacionadas con alteraciones de la salud mental"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions1.includes("Otras circunstancias relacionadas con alteraciones de la salud mental")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                {selectedOptions1.includes(
                  "Otras circunstancias relacionadas con alteraciones de la salud mental"
                ) && (
                    <View style={styles.preguntaContainer}>
                      <Text style={styles.preguntas}>Indique cuál</Text>
                      <TextInput
                        style={styles.input}
                        value={mental}
                        onChangeText={setMental}
                      />
                    </View>
                  )}

                <Text style={styles.preguntas}>
                  {" "}
                  2.Enfermedades Crónicas No Transmisibles
                </Text>

                <CheckBox
                  title="Trastornos de ansiedad"
                  checked={selectedOptions2.includes("Trastornos de ansiedad")}
                  onPress={() => handleOptionChange2("Trastornos de ansiedad")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions2.includes("Trastornos de ansiedad")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Cáncer y Neoplasias en órganos y/o Tejidos"
                  checked={selectedOptions2.includes(
                    "Cáncer y Neoplasias en órganos y/o Tejidos"
                  )}
                  onPress={() =>
                    handleOptionChange2(
                      "Cáncer y Neoplasias en órganos y/o Tejidos"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions2.includes("Cáncer y Neoplasias en órganos y/o Tejidos")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Cardiovasculares (corazón y sistema circulatorio)"
                  checked={selectedOptions2.includes(
                    "Cardiovasculares (corazón y sistema circulatorio)"
                  )}
                  onPress={() =>
                    handleOptionChange2(
                      "Cardiovasculares (corazón y sistema circulatorio)"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions2.includes("Cardiovasculares (corazón y sistema circulatorio)")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Endocrinas, Nutricionales, Digestivas y Metabólicas"
                  checked={selectedOptions2.includes(
                    "Endocrinas, Nutricionales, Digestivas y Metabólicas"
                  )}
                  onPress={() =>
                    handleOptionChange2(
                      "Endocrinas, Nutricionales, Digestivas y Metabólicas"
                    )
                  }

                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions2.includes("Endocrinas, Nutricionales, Digestivas y Metabólicas")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F" />
                <CheckBox
                  title="Sistema Musculoesquelético"
                  checked={selectedOptions2.includes(
                    "Sistema Musculoesquelético"
                  )}
                  onPress={() =>
                    handleOptionChange2("Sistema Musculoesquelético")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions2.includes("Sistema Musculoesquelético")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Sistema Nervioso"
                  checked={selectedOptions2.includes("Sistema Nervioso")}
                  onPress={() => handleOptionChange2("Sistema Nervioso")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions2.includes("Sistema Nervioso")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Vías respiratorias "
                  checked={selectedOptions2.includes("Vías respiratorias ")}
                  onPress={() => handleOptionChange2("Vías respiratorias ")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions2.includes("Vías respiratorias ")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Otras enfermedades crónicas no transmisibles"
                  checked={selectedOptions2.includes(
                    "Otras enfermedades crónicas no transmisibles"
                  )}
                  onPress={() =>
                    handleOptionChange2(
                      "Otras enfermedades crónicas no transmisibles"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions2.includes("Otras enfermedades crónicas no transmisibles")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                {selectedOptions2.includes(
                  "Otras enfermedades crónicas no transmisibles"
                ) && (
                    <View style={styles.preguntaContainer}>
                      <Text style={styles.preguntas}>Indique cuál</Text>
                      <TextInput
                        style={styles.input}
                        value={cronicas}
                        onChangeText={setCronicas}
                      />
                    </View>
                  )}

                <Text style={styles.preguntas}>
                  3. Enfermedades Transmisibles o Infecciosas
                </Text>

                <CheckBox
                  title="Sistema Inmune"
                  checked={selectedOptions3.includes("Sistema Inmune")}
                  onPress={() => handleOptionChange3("Sistema Inmune")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions3.includes("Sistema Inmune")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Sistema Respiratorio"
                  checked={selectedOptions3.includes("Sistema Respiratorio")}
                  onPress={() => handleOptionChange3("Sistema Respiratorio")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions3.includes("Sistema Respiratorio")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Transmitidas por vectores"
                  checked={selectedOptions3.includes("Transmitidas por vectores")}
                  onPress={() =>
                    handleOptionChange3("Transmitidas por vectores")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions3.includes("Transmitidas por vectores")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Otras enfermedades infecciosas"
                  checked={selectedOptions3.includes(
                    "Otras enfermedades infecciosas"
                  )}
                  onPress={() =>
                    handleOptionChange3("Otras enfermedades infecciosas")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions3.includes("Otras enfermedades infecciosas")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                {selectedOptions3.includes(
                  "Otras enfermedades infecciosas"
                ) && (
                    <View style={styles.preguntaContainer}>
                      <Text style={styles.preguntas}>Indique cuál</Text>
                      <TextInput
                        style={styles.input}
                        value={infecciosas}
                        onChangeText={setInfecciosas}
                      />
                    </View>
                  )}

                <Text style={styles.preguntas}>
                  4. Enfermedades Sensoriales o relacionadas con los órganos de
                  los sentidos{" "}
                </Text>

                <CheckBox
                  title="Alteraciones del oído"
                  checked={selectedOptions4.includes("Alteraciones del oído")}
                  onPress={() => handleOptionChange4("Alteraciones del oído")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions4.includes("Alteraciones del oído")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Alteraciones visuales y ceguera"
                  checked={selectedOptions4.includes(
                    "Alteraciones visuales y ceguera"
                  )}
                  onPress={() =>
                    handleOptionChange4("Alteraciones visuales y ceguera")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions4.includes("Alteraciones visuales y ceguera")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Alteraciones de la piel y tejido subcutáneo"
                  checked={selectedOptions4.includes(
                    "Alteraciones de la piel y tejido subcutáneo"
                  )}
                  onPress={() =>
                    handleOptionChange4(
                      "Alteraciones de la piel y tejido subcutáneo"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions4.includes("Alteraciones de la piel y tejido subcutáneo")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Otras enfermedades sensoriales de los órganos de los sentidos"
                  checked={selectedOptions4.includes(
                    "Otras enfermedades sensoriales de los órganos de los sentidos"
                  )}
                  onPress={() =>
                    handleOptionChange4(
                      "Otras enfermedades sensoriales de los órganos de los sentidos"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions4.includes("Otras enfermedades sensoriales de los órganos de los sentidos")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                {selectedOptions4.includes(
                  "Otras enfermedades sensoriales de los órganos de los sentidos"
                ) && (
                    <View style={styles.preguntaContainer}>
                      <Text style={styles.preguntas}>Indique cuál</Text>
                      <TextInput
                        style={styles.input}
                        value={sensoriales}
                        onChangeText={setSensoriales}
                      />
                    </View>
                  )}

                <Text style={styles.preguntas}>
                  5. Lesiones de Causa Externa{" "}
                </Text>

                <CheckBox
                  title="Accidente de trabajo"
                  checked={selectedOptions5.includes("Accidente de trabajo")}
                  onPress={() => handleOptionChange5("Accidente de trabajo")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions5.includes("Accidente de trabajo")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Accidente de Tránsito"
                  checked={selectedOptions5.includes("Accidente de Tránsito")}
                  onPress={() => handleOptionChange5("Accidente de Tránsito")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions5.includes("Accidente de Tránsito")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Desastre Natural / Evento Catastrófico"
                  checked={selectedOptions5.includes(
                    "Desastre Natural / Evento Catastrófico"
                  )}
                  onPress={() =>
                    handleOptionChange5(
                      "Desastre Natural / Evento Catastrófico"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions5.includes("Desastre Natural / Evento Catastrófico")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Lesiones Autoinfligida"
                  checked={selectedOptions5.includes("Lesiones Autoinfligida")}
                  onPress={() => handleOptionChange5("Lesiones Autoinfligida")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions5.includes("Lesiones Autoinfligida")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Otras lesiones"
                  checked={selectedOptions5.includes("Otras lesiones")}
                  onPress={() => handleOptionChange5("Otras lesiones")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions5.includes("Otras lesiones")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Conflicto Armado (guerra)"
                  checked={selectedOptions5.includes(
                    "Conflicto Armado (guerra)"
                  )}
                  onPress={() =>
                    handleOptionChange5("Conflicto Armado (guerra)")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions5.includes("Conflicto Armado (guerra)")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Minas Antipersonal (MAP) / Municiones sin Explotar (MUSE)"
                  checked={selectedOptions5.includes(
                    "Minas Antipersonal (MAP) / Municiones sin Explotar (MUSE)"
                  )}
                  onPress={() =>
                    handleOptionChange5(
                      "Minas Antipersonal (MAP) / Municiones sin Explotar (MUSE)"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions5.includes("Minas Antipersonal (MAP) / Municiones sin Explotar (MUSE)")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Víctima de Violencia"
                  checked={selectedOptions5.includes("Víctima de Violencia")}
                  onPress={() => handleOptionChange5("Víctima de Violencia")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions5.includes("Víctima de Violencia")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Otras causas de lesiones accidentales"
                  checked={selectedOptions5.includes(
                    "Otras causas de lesiones accidentales"
                  )}
                  onPress={() =>
                    handleOptionChange5("Otras causas de lesiones accidentales")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions5.includes("Otras causas de lesiones accidentales")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                {selectedOptions5.includes(
                  "Otras causas de lesiones accidentales"
                ) && (
                    <View style={styles.preguntaContainer}>
                      <Text style={styles.preguntas}>Indique cuál</Text>
                      <TextInput
                        style={styles.input}
                        value={lesiones}
                        onChangeText={setLesiones}
                      />
                    </View>
                  )}

                <Text style={styles.preguntas}>
                  6. Otras circunstancias
                </Text>

                <CheckBox
                  title="Envejecimiento"
                  checked={selectedOptions6.includes("Envejecimiento")}
                  onPress={() => handleOptionChange6("Envejecimiento")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions6.includes("Envejecimiento")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                <CheckBox
                  title="Complicaciones asociadas con el Embarazo, Parto y Posparto"
                  checked={selectedOptions6.includes(
                    "Complicaciones asociadas con el Embarazo, Parto y Posparto"
                  )}
                  onPress={() =>
                    handleOptionChange6(
                      "Complicaciones asociadas con el Embarazo, Parto y Posparto"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions6.includes("Complicaciones asociadas con el Embarazo, Parto y Posparto")

                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Anomalías Congénitas"
                  checked={selectedOptions6.includes("Anomalías Congénitas")}
                  onPress={() => handleOptionChange6("Anomalías Congénitas")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions6.includes("Anomalías Congénitas")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />
                <CheckBox
                  title="Enfermedades Autoinmunes"
                  checked={selectedOptions6.includes(
                    "Enfermedades Autoinmunes"
                  )}
                  onPress={() =>
                    handleOptionChange6("Enfermedades Autoinmunes")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions6.includes("Enfermedades Autoinmunes")
                      ? styles.selectedOptionText
                      : styles.checkBoxText
                  }
                  checkedColor="#BA0C2F"
                />

                {selectedOptions6.includes("Enfermedades Autoinmunes") && (
                  <View style={styles.preguntaContainer}>
                    <Text style={styles.preguntas}>Indique cuál</Text>
                    <TextInput
                      style={styles.input}
                      value={autoinmunes}
                      onChangeText={setAutoinmunes}
                    />
                  </View>
                )}

                <Text style={styles.preguntas}>
                  {" "}
                  7. Ninguna de las anteriores (Ir a 5.1){" "}
                </Text>
                <CheckBox
                  title="Ninguna de las anteriores"
                  checked={selectedOptions7.includes(
                    "Ninguna de las anteriores"
                  )}
                  onPress={() =>
                    handleOptionChange7("Ninguna de las anteriores")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={
                    selectedOptions7.includes("Ninguna de las anteriores")
                      ? styles.selectedOptionText
                      : styles.checkBoxText

                  }
                  checkedColor="#BA0C2F"


                />
              </View>
            )}





            {/* Boton */}
            <TouchableOpacity style={styles.boton} onPress={() => {
              goToPreguntaCin();
              SaveComponente4();
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
    textAlign: 'justify',
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
    height: 6,              // Altura de la línea
    backgroundColor: "#BA0C2F",  // Color de la línea (rojo en este caso)
    position: 'absolute',   // Posición absoluta para que se superponga al contenido
    bottom: 0,              // Se coloca en la parte inferior de la tarjeta
    left: 8,                // Alinear a la izquierda
    right: 8,               // Alinear a la derecha
  },
  linea1: {
    marginTop: 8,
    height: 6,              // Altura de la línea
    backgroundColor: "#BA0C2F",  // Color de la línea (rojo en este caso)
    position: 'relative',   // Posición absoluta para que se superponga al contenido
    bottom: 20,              // Se coloca en la parte inferior de la tarjeta
    left: 0,                // Alinear a la izquierda
    right: 0,               // Alinear a la derecha
  },

  /* Estilo Formulario*/

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
  // Estilo para el texto de las opciones seleccionadas
  selectedOptionText: {
    color: "#BA0C2F", // Color de texto para la opción seleccionada
    fontWeight: "bold", // Puedes ajustar el peso del texto si lo deseas
    fontSize: 16,
  },
  checkBoxText: {
    fontSize: 16,
  },


  botonDate: {
    backgroundColor: "#007bff",
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



  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
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




  preguntaContainer: {
    marginBottom: 16,
  },
  checkBoxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    margin: 5,
    marginBottom: 10,
  },



  advertencia: {
    marginBottom: 5,
    textAlign: 'justify',
    marginTop: 5,
    fontWeight: "bold",
    color: "#BA0C2F",
    fontSize: 16,

  },
});
