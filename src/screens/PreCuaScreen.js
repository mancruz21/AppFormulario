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

export default function PreCuaScreen(props) {
  const { navigation } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [saludMental, setsaludMental] = useState("");

  const goToPreguntaCin = () => {
    navigation.navigate("Pregunta 2.3");
    console.log("Opción seleccionada:", selectedOption);
    console.log("Opciones seleccionadas:", selectedOptions);
  };

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      if (selectedOption === "Si" && selectedOptions.length < 3) {
        setSelectedOptions([...selectedOptions, option]);
      } else if (selectedOption === "No" && selectedOptions.length < 2) {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
  };
  return (
    <ScrollView>
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>Condiciones de salud</Text>

            <Text>PREGUNTA 4.1 (SELECCIÓN ÚNICA) </Text>
            <Text>
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
                textStyle={styles.checkBoxText}
              />
              <CheckBox
                title="No"
                checked={selectedOption === "No"}
                onPress={() => setSelectedOption("No")}
                containerStyle={styles.checkBoxContainer}
                textStyle={styles.checkBoxText}
              />
            </View>

            {selectedOption === "Si" && (
              <View style={styles.questionContainer}>
                <Text>
                  {" "}
                  PREGUNTA 4.2 (SELECCIÓN MÚLTIPLE - MÁXIMO 3 OPCIONES){" "}
                </Text>
                <Text>
                  Indique en cuál(es) de las siguientes “actividades de la vida
                  diaria” ha presenta- do mayor dificultad durante el último año
                  como consecuencia de su condición de salud:{" "}
                </Text>
                <CheckBox
                  title="Oír la voz o los sonidos"
                  checked={selectedOptions.includes("Oír la voz o los sonidos")}
                  onPress={() => handleOptionChange("Oír la voz o los sonidos")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />

                <CheckBox
                  title="	Hablar o conversar"
                  checked={selectedOptions.includes("Hablar o conversar")}
                  onPress={() => handleOptionChange("Hablar o conversar")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
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
                  textStyle={styles.checkBoxText}
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
                  textStyle={styles.checkBoxText}
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
                  textStyle={styles.checkBoxText}
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
                  textStyle={styles.checkBoxText}
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
                  textStyle={styles.checkBoxText}
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
                  textStyle={styles.checkBoxText}
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
                  textStyle={styles.checkBoxText}
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
                  textStyle={styles.checkBoxText}
                />
              </View>
            )}

            {selectedOption === "No" && (
              <View style={styles.questionContainer}>
                <Text>
                  {" "}
                  PREGUNTA 4.3 (SELECCIÓN MÚLTIPLE - MÁXIMO 2 OPCIONES)
                </Text>
                <Text>
                  {" "}
                  Indique cuál de las siguientes condiciones de salud ha
                  presentado durante el último año:{" "}
                </Text>
                <Text>
                  {" "}
                  1. Circunstancias relacionadas con alteraciones de la salud
                  mental (incluye: trastornos mentales, del comportamiento y del
                  desarrollo neurológico)
                </Text>

                <CheckBox
                  title="Trastornos de ansiedad"
                  checked={selectedOptions.includes("Trastornos de ansiedad")}
                  onPress={() => handleOptionChange("Trastornos de ansiedad")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />

                <CheckBox
                  title="Trastornos del estado de ánimo o afectivos"
                  checked={selectedOptions.includes(
                    "Trastornos del estado de ánimo o afectivos"
                  )}
                  onPress={() =>
                    handleOptionChange(
                      "Trastornos del estado de ánimo o afectivos"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Trastornos de la alimentación"
                  checked={selectedOptions.includes(
                    "Trastornos de la alimentación"
                  )}
                  onPress={() =>
                    handleOptionChange("Trastornos de la alimentación")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Trastornos relacionados con sustancias"
                  checked={selectedOptions.includes(
                    "Trastornos relacionados con sustancias"
                  )}
                  onPress={() =>
                    handleOptionChange("Trastornos relacionados con sustancias")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Trastorno de la personalidad"
                  checked={selectedOptions.includes(
                    "Trastorno de la personalidad"
                  )}
                  onPress={() =>
                    handleOptionChange("Trastorno de la personalidad")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Trastorno por estrés postraumático"
                  checked={selectedOptions.includes(
                    "Trastorno por estrés postraumático"
                  )}
                  onPress={() =>
                    handleOptionChange("Trastorno por estrés postraumático")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Déficit Intelectual / Disminución de la Capacidad Mental"
                  checked={selectedOptions.includes(
                    "Déficit Intelectual / Disminución de la Capacidad Mental"
                  )}
                  onPress={() =>
                    handleOptionChange(
                      "Déficit Intelectual / Disminución de la Capacidad Mental"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Otras circunstancias relacionadas con alteraciones de la salud mental"
                  checked={selectedOptions.includes(
                    "Otras circunstancias relacionadas con alteraciones de la salud mental"
                  )}
                  onPress={() =>
                    handleOptionChange(
                      "Otras circunstancias relacionadas con alteraciones de la salud mental "
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />

                <Text> 2. Enfermedades Crónicas No Transmisibles</Text>

                <CheckBox
                  title="Trastornos de ansiedad"
                  checked={selectedOptions.includes("Trastornos de ansiedad")}
                  onPress={() => handleOptionChange("Trastornos de ansiedad")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />

                <CheckBox
                  title="Cáncer y Neoplasias en órganos y/o Tejidos"
                  checked={selectedOptions.includes(
                    "Cáncer y Neoplasias en órganos y/o Tejidos"
                  )}
                  onPress={() =>
                    handleOptionChange(
                      "Cáncer y Neoplasias en órganos y/o Tejidos"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Cardiovasculares (corazón y sistema circulatorio)"
                  checked={selectedOptions.includes(
                    "Cardiovasculares (corazón y sistema circulatorio)"
                  )}
                  onPress={() =>
                    handleOptionChange(
                      "Cardiovasculares (corazón y sistema circulatorio)"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Endocrinas, Nutricionales, Digestivas y Metabólicas"
                  checked={selectedOptions.includes(
                    "Endocrinas, Nutricionales, Digestivas y Metabólicas"
                  )}
                  onPress={() =>
                    handleOptionChange(
                      "Endocrinas, Nutricionales, Digestivas y Metabólicas"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Sistema Musculoesquelético"
                  checked={selectedOptions.includes(
                    "Sistema Musculoesquelético"
                  )}
                  onPress={() =>
                    handleOptionChange("Sistema Musculoesquelético")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Sistema Nervioso"
                  checked={selectedOptions.includes("Sistema Nervioso")}
                  onPress={() => handleOptionChange("Sistema Nervioso ")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Vías respiratorias "
                  checked={selectedOptions.includes("Vías respiratorias ")}
                  onPress={() => handleOptionChange("Vías respiratorias ")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Otras enfermedades crónicas no transmisibles"
                  checked={selectedOptions.includes(
                    "Otras enfermedades crónicas no transmisibles"
                  )}
                  onPress={() =>
                    handleOptionChange(
                      "Otras enfermedades crónicas no transmisibles"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />

                <Text>3. Enfermedades Transmisibles o Infecciosas</Text>

                <CheckBox
                  title="Sistema Inmune"
                  checked={selectedOptions.includes("Sistema Inmune")}
                  onPress={() => handleOptionChange("Sistema Inmune")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />

                <CheckBox
                  title="Sistema Respiratorio"
                  checked={selectedOptions.includes("Sistema Respiratorio")}
                  onPress={() => handleOptionChange("Sistema Respiratorio")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Transmitidas por vectores"
                  checked={selectedOptions.includes(
                    "Transmitidas por vectores"
                  )}
                  onPress={() =>
                    handleOptionChange("Transmitidas por vectores")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Otras enfermedades infecciosas"
                  checked={selectedOptions.includes(
                    "Otras enfermedades infecciosas"
                  )}
                  onPress={() =>
                    handleOptionChange("Otras enfermedades infecciosas")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />

                <Text>
                  4. Enfermedades Sensoriales o relacionadas con los órganos de
                  los sentidos{" "}
                </Text>

                <CheckBox
                  title="Alteraciones del oído"
                  checked={selectedOptions.includes("Alteraciones del oído")}
                  onPress={() => handleOptionChange("Alteraciones del oído")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />

                <CheckBox
                  title="Alteraciones visuales y ceguera"
                  checked={selectedOptions.includes(
                    "Alteraciones visuales y ceguera"
                  )}
                  onPress={() =>
                    handleOptionChange("Alteraciones visuales y ceguera")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Alteraciones de la piel y tejido subcutáneo"
                  checked={selectedOptions.includes(
                    "Alteraciones de la piel y tejido subcutáneo"
                  )}
                  onPress={() =>
                    handleOptionChange(
                      "Alteraciones de la piel y tejido subcutáneo"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Otras enfermedades sensoriales de los órganos de los sentidos"
                  checked={selectedOptions.includes(
                    "Otras enfermedades sensoriales de los órganos de los sentidos"
                  )}
                  onPress={() =>
                    handleOptionChange(
                      "Otras enfermedades sensoriales de los órganos de los sentidos"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />

                <Text>5. Lesiones de Causa Externa </Text>

                <CheckBox
                  title="Accidente de trabajo"
                  checked={selectedOptions.includes("Accidente de trabajo")}
                  onPress={() => handleOptionChange("Accidente de trabajo")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />

                <CheckBox
                  title="Accidente de Tránsito"
                  checked={selectedOptions.includes("Accidente de Tránsito")}
                  onPress={() => handleOptionChange("Accidente de Tránsito")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Desastre Natural / Evento Catastrófico"
                  checked={selectedOptions.includes(
                    "Desastre Natural / Evento Catastrófico"
                  )}
                  onPress={() =>
                    handleOptionChange("Desastre Natural / Evento Catastrófico")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Lesiones Autoinfligida"
                  checked={selectedOptions.includes("Lesiones Autoinfligida")}
                  onPress={() => handleOptionChange("Lesiones Autoinfligida")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />

                <CheckBox
                  title="Otras lesiones"
                  checked={selectedOptions.includes("Otras lesiones")}
                  onPress={() => handleOptionChange("Otras lesiones")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />

                <CheckBox
                  title="Conflicto Armado (guerra)"
                  checked={selectedOptions.includes(
                    "Conflicto Armado (guerra)"
                  )}
                  onPress={() =>
                    handleOptionChange("Conflicto Armado (guerra)")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Minas Antipersonal (MAP) / Municiones sin Explotar (MUSE)"
                  checked={selectedOptions.includes(
                    "Minas Antipersonal (MAP) / Municiones sin Explotar (MUSE)"
                  )}
                  onPress={() =>
                    handleOptionChange(
                      "Minas Antipersonal (MAP) / Municiones sin Explotar (MUSE)"
                    )
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />
                <CheckBox
                  title="Víctima de Violencia"
                  checked={selectedOptions.includes("Víctima de Violencia")}
                  onPress={() => handleOptionChange("Víctima de Violencia")}
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />

                <CheckBox
                  title="Otras causas de lesiones accidentales"
                  checked={selectedOptions.includes(
                    "Otras causas de lesiones accidentales"
                  )}
                  onPress={() =>
                    handleOptionChange("Otras causas de lesiones accidentales")
                  }
                  containerStyle={styles.checkBoxContainer}
                  textStyle={styles.checkBoxText}
                />


<Text>6.	Otras circunstancias</Text>

<CheckBox
  title="Envejecimiento"
  checked={selectedOptions.includes("Envejecimiento")}
  onPress={() => handleOptionChange("Envejecimiento")}
  containerStyle={styles.checkBoxContainer}
  textStyle={styles.checkBoxText}
/>

<CheckBox
  title="Complicaciones asociadas con el Embarazo, Parto y Posparto"
  checked={selectedOptions.includes("Complicaciones asociadas con el Embarazo, Parto y Posparto")}
  onPress={() => handleOptionChange("Complicaciones asociadas con el Embarazo, Parto y Posparto")}
  containerStyle={styles.checkBoxContainer}
  textStyle={styles.checkBoxText}
/>
<CheckBox
  title="Anomalías Congénitas"
  checked={selectedOptions.includes(
    "Anomalías Congénitas"
  )}
  onPress={() =>
    handleOptionChange("Anomalías Congénitas")
  }
  containerStyle={styles.checkBoxContainer}
  textStyle={styles.checkBoxText}
/>
<CheckBox
  title="Enfermedades Autoinmunes"
  checked={selectedOptions.includes("Enfermedades Autoinmunes")}
  onPress={() => handleOptionChange("Enfermedades Autoinmunes")}
  containerStyle={styles.checkBoxContainer}
  textStyle={styles.checkBoxText}
/>

<Text> 7.	Ninguna de las anteriores (Ir a 5.1) </Text>
<CheckBox
  title="Ninguna de las anteriores"
  checked={selectedOptions.includes("Ninguna de las anteriores")}
  onPress={() => handleOptionChange("Ninguna de las anteriores")}
  containerStyle={styles.checkBoxContainer}
  textStyle={styles.checkBoxText}
/>



              </View>
            )}

            {/* Boton */}
            <TouchableOpacity style={styles.boton} onPress={goToPreguntaCin}>
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

  questionContainer: {
    marginTop: 10,
    marginBottom: 10,
  },

  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
});
