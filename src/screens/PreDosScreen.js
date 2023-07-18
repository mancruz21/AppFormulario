import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";

export default function PreDosScreen(props) {
  const { navigation } = props;

  const goToPreguntaTres = () => {
    navigation.navigate("Pregunta 2.1");
  };
  const [respuestas, setRespuestas] = useState({
    pregunta1: [],
    pregunta2: "",
    pregunta3: "",
    pregunta4: "",
    pregunta5: "",
    pregunta6: "",
    pregunta7: "",
    pregunta8: "",
  });

  const handleRespuesta = (pregunta, respuesta) => {
    setRespuestas((prevRespuestas) => {
      const respuestasSeleccionadas = prevRespuestas[pregunta];

      if (respuestasSeleccionadas.includes(respuesta)) {
        // Si la respuesta ya está seleccionada, la deseleccionamos
        return {
          ...prevRespuestas,
          [pregunta]: respuestasSeleccionadas.filter((r) => r !== respuesta),
        };
      } else {
        // Si la respuesta no está seleccionada, la seleccionamos si no se ha alcanzado el límite de 4 opciones
        if (respuestasSeleccionadas.length < 4) {
          return {
            ...prevRespuestas,
            [pregunta]: [...respuestasSeleccionadas, respuesta],
          };
        } else {
          return prevRespuestas;
        }
      }
    });
  };

  const handleSubmit = () => {
    // Aquí puedes realizar cualquier acción con las respuestas del formulario
    console.log(respuestas);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>
              {" "}
              CARACTERÍSTICAS SOCIODEMOGRÁFICAS
            </Text>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                PREGUNTA 2.1 (SELECCIÓN MÚLTIPLE - MÁXIMO 4 OPCIONES)
              </Text>
              <View style={styles.recuadro}>
                <Text style={styles.recuadroTitulo}>Opción 1</Text>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta1.includes(
                      "Población Migrante"
                    )}
                    onPress={() =>
                      handleRespuesta("pregunta1", "Población Migrante")
                    }
                  />

                  <Text style={styles.opcionTexto}>1. Población Migrante</Text>
                </View>

                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta1.includes(
                      "Población en proceso de reincorporación"
                    )}
                    onPress={() =>
                      handleRespuesta(
                        "pregunta1",
                        "Población en proceso de reincorporación"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    2. Población en proceso de reincorporación
                  </Text>
                </View>

                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta1.includes(
                      "Víctima de Conflicto Armado – Ley 1448"
                    )}
                    onPress={() =>
                      handleRespuesta(
                        "pregunta1",
                        "Víctima de Conflicto Armado – Ley 1448"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    3. Víctima de Conflicto Armado – Ley 1448
                  </Text>
                </View>
              </View>

              <View style={styles.recuadro}>
                <Text style={styles.recuadroTitulo}>Opción 2</Text>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta1.includes(
                      "Infancia (10 a 11 años)"
                    )}
                    onPress={() =>
                      handleRespuesta("pregunta1", "Infancia (10 a 11 años)")
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    4. Infancia (10 a 11 años)
                  </Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta1.includes(
                      "Adolescente (12 a 17 años)"
                    )}
                    onPress={() =>
                      handleRespuesta("pregunta1", "Adolescente (12 a 17 años)")
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    5. Adolescente (12 a 17 años)
                  </Text>
                  <Text></Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta1.includes(
                      "Juventud (18 a 28 años)"
                    )}
                    onPress={() =>
                      handleRespuesta("pregunta1", "Juventud (18 a 28 años)")
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    6. Juventud (18 a 28 años)
                  </Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta1.includes(
                      "Adultez (29 a 59 años)"
                    )}
                    onPress={() =>
                      handleRespuesta("pregunta1", "Adultez (29 a 59 años)")
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    7. Adultez (29 a 59 años)
                  </Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta1.includes("Vejez (60 y más)")}
                    onPress={() =>
                      handleRespuesta("pregunta1", "Vejez (60 y más)")
                    }
                  />
                  <Text style={styles.opcionTexto}>8. Vejez (60 y más)</Text>
                </View>
              </View>

              <View style={styles.recuadro}>
                <Text style={styles.recuadroTitulo}>Opción 3</Text>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta1.includes(
                      " Mujer embarazada y/o lactante"
                    )}
                    onPress={() =>
                      handleRespuesta(
                        "pregunta1",
                        " Mujer embarazada y/o lactante"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    9. Mujer embarazada y/o lactante
                  </Text>
                </View>

                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta1.includes(
                      " Cabeza de familia"
                    )}
                    onPress={() =>
                      handleRespuesta("pregunta1", " Cabeza de familia")
                    }
                  />
                  <Text style={styles.opcionTexto}>10. Cabeza de familia</Text>
                </View>
              </View>
              <View style={styles.recuadro}>
                <Text style={styles.recuadroTitulo}>Opción 4</Text>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta1.includes(
                      " Población con Discapacidad"
                    )}
                    onPress={() =>
                      handleRespuesta(
                        "pregunta1",
                        " Población con Discapacidad"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    11. Población con Discapacidad
                  </Text>
                </View>

                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta1.includes("  Población LGBTI")}
                    onPress={() =>
                      handleRespuesta("pregunta1", "  Población LGBTI")
                    }
                  />
                  <Text style={styles.opcionTexto}>12. Población LGBTI</Text>
                </View>
              </View>
            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                PREGUNTA 2.2 (SELECCIÓN ÚNICA)
              </Text>
              <View style={styles.recuadro}>
                <Text style={styles.recuadroTitulo}>
                  Si es una persona con discapacidad, indique la categoría de la
                  misma:
                </Text>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta2 === "Física"}
                    onPress={() => handleRespuesta("pregunta2", "Física")}
                  />
                  <Text style={styles.opcionTexto}>1. Física</Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta2 === "Visual"}
                    onPress={() => handleRespuesta("pregunta2", "Visual")}
                  />
                  <Text style={styles.opcionTexto}>2. Visual</Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta2 === "Auditiva"}
                    onPress={() => handleRespuesta("pregunta2", "Auditiva")}
                  />
                  <Text style={styles.opcionTexto}>3. Auditiva</Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta2 === "Intelectual"}
                    onPress={() => handleRespuesta("pregunta2", "Intelectual")}
                  />
                  <Text style={styles.opcionTexto}>4. Intelectual</Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta2 === "Psicosocial"}
                    onPress={() => handleRespuesta("pregunta2", "Psicosocial")}
                  />
                  <Text style={styles.opcionTexto}>5. Psicosocial</Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta2 === "Sordoceguera"}
                    onPress={() => handleRespuesta("pregunta2", "Sordoceguera")}
                  />
                  <Text style={styles.opcionTexto}>6. Sordoceguera</Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta2 === "Múltiple"}
                    onPress={() => handleRespuesta("pregunta2", "Múltiple")}
                  />
                  <Text style={styles.opcionTexto}>7. Múltiple</Text>
                </View>
              </View>
            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                PREGUNTA 2.3 (SELECCIÓN ÚNICA)
              </Text>
              <View style={styles.recuadro}>
                <Text style={styles.recuadroTitulo}>
                  Si es una persona con discapacidad,¿Cuenta en la actualidad
                  con el Certificado de Discapacidad a partir del procedimiento
                  de valoración clínica realizado por un equipo
                  multidisciplinario de salud**?
                </Text>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    title="Sí"
                    checked={respuestas.pregunta3 === "Sí"}
                    onPress={() => handleRespuesta("pregunta3", "Sí")}
                    containerStyle={styles.checkbox}
                  />
                  <CheckBox
                    title="No"
                    checked={respuestas.pregunta3 === "No"}
                    onPress={() => handleRespuesta("pregunta3", "No")}
                    containerStyle={styles.checkbox}
                  />
                </View>
              </View>
            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                PREGUNTA 2.4 (Selección Única)
              </Text>

              <View style={styles.recuadro}>
                <Text style={styles.recuadroTitulo}>
                  De acuerdo a sus constumbres y tradiciones, usted se
                  considera:
                </Text>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta4 === "Indígena"}
                    onPress={() => handleRespuesta("pregunta4", "Indígena")}
                  />
                  <Text style={styles.opcionTexto}>1. Indígena</Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta4 === "ROM (Gitanos)"}
                    onPress={() =>
                      handleRespuesta("pregunta4", "ROM (Gitanos)")
                    }
                  />
                  <Text style={styles.opcionTexto}>2. ROM (Gitanos)</Text>
                </View>

                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta4 ===
                      "Raizal del Archipiélago de San Andrés y P"
                    }
                    onPress={() =>
                      handleRespuesta(
                        "pregunta4",
                        "Raizal del Archipiélago de San Andrés y P"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    3. Raizal del Archipiélago de San Andrés y P
                  </Text>
                </View>

                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta4 === "Palenquero de San Basilio"
                    }
                    onPress={() =>
                      handleRespuesta("pregunta4", "Palenquero de San Basilio")
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    4. Palenquero de San Basilio
                  </Text>
                </View>

                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta4 ===
                      "Negro(a), Mulato(a), Afrocolombiano(a)"
                    }
                    onPress={() =>
                      handleRespuesta(
                        "pregunta4",
                        "Negro(a), Mulato(a), Afrocolombiano(a)"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    5. Negro(a), Mulato(a), Afrocolombiano(a)
                  </Text>
                </View>

                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta4 === "Ninguno de los anteriores"
                    }
                    onPress={() =>
                      handleRespuesta("pregunta4", "Ninguno de los anteriores")
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    6. Ninguno de los anteriores
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                PREGUNTA 2.5 (Selección Única)
              </Text>
              <View style={styles.recuadro}>
                <Text style={styles.recuadroTitulo}>
                  Indique cuál es el último nivel educativo alcanzado por usted:
                </Text>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta5 === "Preescolar"}
                    onPress={() => handleRespuesta("pregunta5", "Preescolar")}
                  />
                  <Text style={styles.opcionTexto}>1. Preescolar</Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta5 ===
                      "Educación básica primaria (1 a 5 grado)"
                    }
                    onPress={() =>
                      handleRespuesta(
                        "pregunta5",
                        "Educación básica primaria (1 a 5 grado)"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    2. Educación básica primaria (1 a 5 grado)
                  </Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta5 ===
                      "Educación básica secundaria (6 a 9 grado)"
                    }
                    onPress={() =>
                      handleRespuesta(
                        "pregunta5",
                        "Educación básica secundaria (6 a 9 grado)"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    3. Educación básica secundaria (6 a 9 grado)
                  </Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta5 === "Educación media (10 a 11 grado)"
                    }
                    onPress={() =>
                      handleRespuesta(
                        "pregunta5",
                        "Educación media (10 a 11 grado)"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    4. Educación media (10 a 11 grado)
                  </Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta5 === "Educación Superior"}
                    onPress={() =>
                      handleRespuesta("pregunta5", "Educación Superior")
                    }
                  />
                  <Text style={styles.opcionTexto}>5. Educación Superior</Text>
                </View>
                {respuestas.pregunta5 === "Educación Superior" && (
                  <View style={styles.subopcionesContainer}>
                    <View style={styles.opcionesContainer}>
                      <CheckBox
                        checked={respuestas.pregunta11 === "Técnica"}
                        onPress={() => handleRespuesta("pregunta11", "Técnica")}
                      />
                      <Text style={styles.subopcionTexto}>- Técnica</Text>
                    </View>
                    <View style={styles.opcionesContainer}>
                      <CheckBox
                        checked={respuestas.pregunta11 === "Tecnológica"}
                        onPress={() =>
                          handleRespuesta("pregunta11", "Tecnológica")
                        }
                      />
                      <Text style={styles.subopcionTexto}>- Tecnológica</Text>
                    </View>
                    <View style={styles.opcionesContainer}>
                      <CheckBox
                        checked={respuestas.pregunta11 === "Profesional"}
                        onPress={() =>
                          handleRespuesta("pregunta11", "Profesional")
                        }
                      />
                      <Text style={styles.subopcionTexto}>- Profesional</Text>
                    </View>
                  </View>
                )}
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta5 === "Postgrado"}
                    onPress={() => handleRespuesta("pregunta5", "Postgrado")}
                  />
                  <Text style={styles.opcionTexto}>6. Postgrado</Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta5 === "Ninguno"}
                    onPress={() => handleRespuesta("pregunta5", "Ninguno")}
                  />
                  <Text style={styles.opcionTexto}>7. Ninguno</Text>
                </View>
              </View>
            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                PREGUNTA 2.6 (Selección Única)
              </Text>
              <View style={styles.recuadro}>
                <Text style={styles.recuadroTitulo}>
                  Durante los últimos 6 meses, ha estado principalmente :
                </Text>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta6 === "Trabajando"}
                    onPress={() => handleRespuesta("pregunta6", "Trabajando")}
                  />
                  <Text style={styles.opcionTexto}>1. Trabajando</Text>
                </View>
                {respuestas.pregunta6 === "Trabajando" && (
                  <View style={styles.subopcionesContainer}>
                    <View style={styles.opcionesContainer}>
                      <CheckBox
                        checked={respuestas.pregunta12 === "Trabajador Urbano"}
                        onPress={() =>
                          handleRespuesta("pregunta12", "Trabajador Urbano")
                        }
                      />
                      <Text style={styles.subopcionTexto}>
                        - Trabajador Urbano
                      </Text>
                    </View>
                    <View style={styles.opcionesContainer}>
                      <CheckBox
                        checked={respuestas.pregunta12 === "Trabajador Rural"}
                        onPress={() =>
                          handleRespuesta("pregunta12", "Trabajador Rural")
                        }
                      />
                      <Text style={styles.subopcionTexto}>
                        - Trabajador Rural
                      </Text>
                    </View>
                  </View>
                )}
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta6 === "En búsqueda de empleo (cesante)"
                    }
                    onPress={() =>
                      handleRespuesta(
                        "pregunta6",
                        "En búsqueda de empleo (cesante)"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    2. En búsqueda de empleo (cesante)
                  </Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta6 ===
                      "Con incapacidad permanente para trabajar"
                    }
                    onPress={() =>
                      handleRespuesta(
                        "pregunta6",
                        "Con incapacidad permanente para trabajar"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    3. Con incapacidad permanente para trabajar
                  </Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta6 === "Estudiando"}
                    onPress={() => handleRespuesta("pregunta6", "Estudiando")}
                  />
                  <Text style={styles.opcionTexto}>4. Estudiando</Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta6 ===
                      "Actividades del hogar (sin ingresos)"
                    }
                    onPress={() =>
                      handleRespuesta(
                        "pregunta6",
                        "Actividades del hogar (sin ingresos)"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    5. Actividades del hogar (sin ingresos)
                  </Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta6 ===
                      "Ninguna de las anteriores / Otras Actividades (pensionado, percibiendo renta, beneficiario de ayudas monetarias)"
                    }
                    onPress={() =>
                      handleRespuesta(
                        "pregunta6",
                        "Ninguna de las anteriores / Otras Actividades (pensionado, percibiendo renta, beneficiario de ayudas monetarias)"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    6. Ninguna de las anteriores / Otras Actividades
                    (pensionado, percibiendo renta, beneficiario de ayudas
                    monetarias)
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                PREGUNTA 2.7 (Selección Única)
              </Text>
              <View style={styles.recuadro}>
                <Text style={styles.recuadroTitulo}>
                  La actividad económica (formal o informal) en la que trabaja
                  en la actualidad se relaciona con:
                </Text>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta7 === "Industria"}
                    onPress={() => handleRespuesta("pregunta7", "Industria")}
                  />
                  <Text style={styles.opcionTexto}>1. Industria</Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta7 === "Comercio"}
                    onPress={() => handleRespuesta("pregunta7", "Comercio")}
                  />
                  <Text style={styles.opcionTexto}>2. Comercio</Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta7 === "Agrícola"}
                    onPress={() => handleRespuesta("pregunta7", "Agrícola")}
                  />
                  <Text style={styles.opcionTexto}>3. Agrícola</Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta7 === "Pecuaria"}
                    onPress={() => handleRespuesta("pregunta7", "Pecuaria")}
                  />
                  <Text style={styles.opcionTexto}>4. Pecuaria</Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta7 === "Servicios ó Intangibles"}
                    onPress={() =>
                      handleRespuesta("pregunta7", "Servicios ó Intangibles")
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    5. Servicios ó Intangibles
                  </Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={respuestas.pregunta7 === "Otra actividad"}
                    onPress={() =>
                      handleRespuesta("pregunta7", "Otra actividad")
                    }
                  />
                  <Text style={styles.opcionTexto}>6. Otra actividad</Text>
                </View>
              </View>
            </View>

            <View style={styles.preguntaContainer}>
              <Text style={styles.pregunta}>
                PREGUNTA 2.8 (Selección Única)
              </Text>
              <View style={styles.recuadro}>
                <Text style={styles.recuadroTitulo}>
                  ¿Cuál es su ingreso mensual promedio?
                </Text>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta8 === "Entre $332.000 y $653.781"
                    }
                    onPress={() =>
                      handleRespuesta("pregunta8", "Entre $332.000 y $653.781")
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    1. Entre $332.000 y $653.781 (De 0 a &lt; 1 SMMLV)
                  </Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta8 === "Entre $654.000 y $908.000"
                    }
                    onPress={() =>
                      handleRespuesta("pregunta8", "Entre $654.000 y $908.000")
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    2. Entre $654.000 y $908.000 1 SMMLV
                  </Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta8 ===
                      "Más de 1 y ≤1.5 SMMLV ($910.000 - $1.362.000)"
                    }
                    onPress={() =>
                      handleRespuesta(
                        "pregunta8",
                        "Más de 1 y ≤1.5 SMMLV ($910.000 - $1.362.000)"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    3. Más de 1 y ≤1.5 SMMLV ($910.000 - $1.362.000)
                  </Text>
                </View>
                <View style={styles.opcionesContainer}>
                  <CheckBox
                    checked={
                      respuestas.pregunta8 === "Mayor a 1.5 SMMLV (≥$1.365.000)"
                    }
                    onPress={() =>
                      handleRespuesta(
                        "pregunta8",
                        "Mayor a 1.5 SMMLV (≥$1.365.000)"
                      )
                    }
                  />
                  <Text style={styles.opcionTexto}>
                    4. Mayor a 1.5 SMMLV (≥$1.365.000)
                  </Text>
                </View>

                {respuestas.pregunta8 === "Entre $332.000 y $653.781" && (
                  <View style={styles.listaDesplegable}>
                    <Text style={styles.listaDesplegableTitulo}>
                      Especifique el Salario:
                    </Text>
                    <View style={styles.opcionesContainer}>
                      <CheckBox
                        checked={
                          respuestas.pregunta9 ===
                          "Entre $0.000 y $145.004 Línea de Pobreza Extrema"
                        }
                        onPress={() =>
                          handleRespuesta(
                            "pregunta9",
                            "Entre $0.000 y $145.004 Línea de Pobreza Extrema"
                          )
                        }
                      />
                      <Text style={styles.opcionTexto}>
                        - Entre $0.000 y $145.004 "Pobreza Extrema"
                      </Text>
                    </View>
                    <View style={styles.opcionesContainer}>
                      <CheckBox
                        checked={
                          respuestas.pregunta9 ===
                          "Entre $146.000 y $331.688 Línea de Pobreza Monetaria"
                        }
                        onPress={() =>
                          handleRespuesta(
                            "pregunta9",
                            "Entre $146.000 y $331.688 Línea de Pobreza Monetaria"
                          )
                        }
                      />
                      <Text style={styles.opcionTexto}>
                        - Entre $146.000 y $331.688 "Pobreza Monetaria"
                      </Text>
                    </View>
                    <View style={styles.opcionesContainer}>
                      <CheckBox
                       title="Entre $332.000 y $653.781 Condiciones de Vulnerabilidad"
                        checked={
                          respuestas.pregunta9 ===
                          "Entre $332.000 y $653.781 Condiciones de Vulnerabilidad"
                        }
                        onPress={() =>
                          handleRespuesta(
                            "pregunta9",
                            "Entre $332.000 y $653.781 Condiciones de Vulnerabilidad"
                          )
                        }
                      />
                      <Text style={styles.opcionTexto}>
                        - Entre $332.000 y $653.781 
                        "Vulnerabilidad"
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            </View>

            {/* Boton */}
            <TouchableOpacity style={styles.boton} onPress={goToPreguntaTres}>
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

  container: {
    flexGrow: 1,
    padding: 16,
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  preguntaContainer: {
    marginBottom: 16,
  },
  pregunta: {
    fontSize: 16,
    marginBottom: 16,
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
    marginBottom: 8,
  },
  opcionesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  opcionTexto: {
    marginLeft: -15,
  },
  subpreguntaContainer: {
    marginTop: 8,
  },
  subpregunta: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 8,
  },

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
    padding: 0,
  },
});
