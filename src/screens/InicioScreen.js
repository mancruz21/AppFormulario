import {
    View,
    Text,
    Button,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  
  export default function InicioScreen(props) {
    const { navigation } = props;
  
    const goToIdentificacion = () => {
      navigation.navigate("Identificacion");
    };
  
    return (
      <ScrollView>
        <View style={styles.contenedorPadre}>
          <View style={styles.tarjeta}>
            <View style={styles.container}>
              <Text style={styles.titulo}>
                CUESTIONARIO PARA LA CARACTERIZACIÓN DE NECESIDADES{" "}
              </Text>
              <Text style={styles.Text}>
                La encuesta puede ser respondida por máximo 3 integrantes del
                hogar, que incluyen:
              </Text>
              <Text style={styles.text}>
                Personas de 10 años o más (≥10 años) que residan de manera
                permanente en el municipio, es decir, por un tiempo mayor o igual
                a 6 meses (≥ 6 meses).
              </Text>
              <Text style={styles.text}>
                Para el caso de las personas menores de 18 años de edad (18 años),
                el suministro de la información se realizará a través del
                acompañamiento de los padres o de la persona del hogar que esté a
                cargo de su cuidado.
              </Text>
              <Text style={styles.text}>
                Para el caso de las personas que no tengan la capacidad de
                responder por sí mismas, la información será suministrada por un
                adulto del hogar o por parte de un cuidador con tiempo de
                servicio/acompañamiento mayor o igual a seis meses (≥ 6 meses).
              </Text>
  
              {/* Boton */}
              <TouchableOpacity style={styles.boton} onPress={goToIdentificacion}>
                <Text style={styles.textoBoton}> Siguiente </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    backgroundImage: {
      flex: 1,
      width: "50%",
      height: "100%",
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      margin: 20,
    },
    content: {
      flex: 1,
      marginHorizontal: 20,
      marginBottom: 20,
    },
    boldText: {
      fontWeight: "bold",
      marginBottom: 10,
    },
    text: {
      marginBottom: 10,
    },
    button: {
      margin: 20,
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
      padding: 20,
    },
  
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
  });
  