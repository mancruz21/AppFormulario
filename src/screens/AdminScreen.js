import React, { useState } from 'react';
import { View, Text, Image,  StyleSheet, TouchableOpacity, Linking} from 'react-native';

export default function AdminScreen() {

  const handleConsultarEncuestas = () => {
    // URL que quieres abrir al hacer clic en el botón "Consultar Encuestas".
    const url = 'https://adminrethab.web.app/';

    // Abre la URL en el navegador o la aplicación correspondiente.
    Linking.openURL(url).catch((err) => console.error('Error al abrir la URL', err));
  };
  return (
    <View >

<View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
          <View style={styles.logoContainer}>
      <Image
          source={require("../assets/Logo_Color.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        </View>

        <Text style={styles.titulo}>   Bienvenido a tu cuenta de Administrador</Text>
      

      

      <TouchableOpacity style={styles.boton} onPress={handleConsultarEncuestas}>
      <Text style={styles.textoBoton}> Consulta Encuestas </Text>
      </TouchableOpacity>
          </View>
         
        </View>
      </View>
      

      
    



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
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
  
/* Estilo contenedor donde se agrega la inf */
 

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
    fontSize: 22,
  },
});