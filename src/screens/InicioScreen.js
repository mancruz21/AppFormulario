import {  View, Text, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import NetInfo from '@react-native-community/netinfo';
export default function InicioScreen(props) {
  const { navigation } = props;
  const goToIdentificacion = () => {
    navigation.navigate("Identificacion");
  }

  return (
    
    <ScrollView>
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.container}>
            
            <Text style={styles.titulo}>
              CUESTIONARIO PARA LA CARACTERIZACIÓN DE NECESIDADES{" "}
            </Text>
            <Text style={styles.Text}>
              La encuesta puede ser respondida por máximo 3 integrantes del hogar, que incluyen:
              Personas de 10 años o más (≥10 años) que residan de manera permanente en el municipio,
              es decir, por un tiempo mayor o igual a 6 meses (≥ 6 meses).Para el caso de las personas
              menores de 18 años de edad (18 años), el suministro de la información se realizará a
              través del acompañamiento de los padres o de la persona del hogar que esté a cargo de
              su cuidado. Para el caso de las personas que no tengan la capacidad de responder por
              sí mismas, la información será suministrada por un adulto del hogar o por parte de un
              cuidador con tiempo de servicio/acompañamiento mayor o igual a seis meses (≥ 6 meses).

            </Text>
            {/* Boton */}
            <TouchableOpacity style={styles.boton} onPress={goToIdentificacion}>
              <Text style={styles.textoBoton}> Siguiente   </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  /* Estilo Texto y titulo */
  Text: {
    textAlign: 'justify',
    marginTop: 20,
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

  /* Estilo contenedor donde se agrega la inf */
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

});
