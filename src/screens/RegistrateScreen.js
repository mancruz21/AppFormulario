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
          source={require('../assets/Logo_Color.png')}
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
    backgroundColor:"white",
    height: 40,
    borderBottomWidth: 1, // Añadimos el borde inferior
    borderBottomColor: "#D2D4DF", // Color del borde inferior
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 10,
  },

 /* Estilo Boton y texto*/
 boton: {
  backgroundColor: "#1b3f90",
    borderColor: "#D2D4DF",
    borderWidth: 1,
    borderRadius: 5,
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
