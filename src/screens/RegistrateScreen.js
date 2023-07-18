import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  
} from "react-native";


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../components/firebase-config";
import { fontFamily, fontWeight } from "react-native-elements";


export default function RegistrateScreen(props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Account created!");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });

    // Validar correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Por favor, introduce un correo electrónico válido");
      return;
    }

    // Validar contraseña
    if (password.length < 6) {
      Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Ejemplo: Mostrar los valores ingresados en la consola
    console.log("Nombre:", name);
    console.log("Apellidos:", lastName);
    console.log("Correo:", email);
    console.log("Contraseña:", password);

    // Reiniciar los campos de entrada
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo1.webp')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        onChangeText={setName}
      />
      <Text style={styles.text}>Apellidos</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tus apellidos"
        onChangeText={setLastName}
      />
      <Text style={styles.text}>Correo</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Ingresa tu Correo"
      />
      <Text style={styles.text}>Contraseña</Text>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        placeholder="Ingresa tu contraseña"
        secureTextEntry={true}
      />

      {/* Boton */}
      <TouchableOpacity
        style={styles.boton}
        onPress={() => {
          handleCreateAccount();
          goToPage("Login");
        }}
      >
        <Text style={styles.textoBoton}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#D2D4DF",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  boton: {
    backgroundColor: "#02B3C6",
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row", // Alinea el icono a la izquierda del texto
    alignItems: "center", // Alinea verticalmente el contenido
    justifyContent: "center", // Alinea horizontalmente el contenido
  },

  textoBoton: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 16,
   
  },

  icono: {
    width: 20,
    height: 20,
    marginRight: 5,
  },

  text: {
    color: "#707070",
    alignSelf: "flex-start",
    
    fontWeight: "bold",
    marginBottom: 4,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
  },
});
