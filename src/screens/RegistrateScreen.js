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

import appFirebase from "../components/firebase-config";
import {addDoc, collection, getFirestore} from 'firebase/firestore';
const db = getFirestore(appFirebase)



export default function RegistrateScreen(props) {
 
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  


  const auth = getAuth(appFirebase);

  const handleCreateAccount = async () => {
    try {
      if (!name || !lastName || !email || !password) {
        Alert.alert("Error", "Por favor, completa todos los campos");
        return;
      }

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

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userData = {
        name: name,
        lastName: lastName,
        email: email,
        uid: user.uid // Agregar el UID del usuario autenticado
      };

      await Promise.all([
        addDoc(collection(db, 'registro'), userData),
        // También puedes guardar el userData en otros lugares si es necesario
      ]);

      Alert.alert("Registro exitoso, el usuario ha sido exitosamente registrado");

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
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Hubo un error al registrar el usuario");
    }
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
        underlineColorAndroid="transparent" // Para Android
        selectionColor="#efefef" // Color de la línea cuando se selecciona el campo
      />
      <Text style={styles.text}>Apellidos</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tus apellidos"
        onChangeText={setLastName}
        underlineColorAndroid="transparent" // Para Android
        selectionColor="#efefef" // Color de la línea cuando se selecciona el campo
      />
      <Text style={styles.text}>Correo</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Ingresa tu Correo"
        underlineColorAndroid="transparent" // Para Android
        selectionColor="#efefef" // Color de la línea cuando se selecciona el campo
      />
      <Text style={styles.text}>Contraseña</Text>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        placeholder="Ingresa tu contraseña"
        secureTextEntry={true}
        underlineColorAndroid="transparent" // Para Android
        selectionColor="#efefef" // Color de la línea cuando se selecciona el campo
      />

      {/* Boton */}
      <TouchableOpacity
        style={styles.boton}
        onPress={() => {
          // Primero intentar crear la cuenta
          handleCreateAccount();

          // Luego, si no hubo errores, navegar a la página "Login"
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
