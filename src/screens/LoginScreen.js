import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import appFirebase from "../components/firebase-config";
import { addDoc, collection, getFirestore, getDoc, doc } from 'firebase/firestore';
import PreSieScreen from "./PreSieScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function LoginScreen(props) {
  const db = getFirestore(appFirebase)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(appFirebase);

  const handleSignIn = async () => {
    try {
      // Establece las credenciales de administrador predefinidas
      const adminEmail = "rehabcoadmin@gmail.com";
      const adminPassword = "adminrehabco2023";

      if (email === adminEmail && password === adminPassword) {
        // Es un administrador, redirigir a AdminScreen
        props.navigation.navigate('Administrador');
      } else {
        // No es un administrador, intentar inicio de sesión normal
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Guardar credenciales localmente
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);

        // Redirigir a Inicio
        props.navigation.navigate('Pregunta 2.5');
      }
    } catch (error) {
      console.log(error);
      setError("Hubo un error al iniciar sesión");
    }
  }
  const { navigation } = props;
  const goToInicio = async () => {
    const storedEmail = await AsyncStorage.getItem('email');
    const storedPassword = await AsyncStorage.getItem('password');

    if (!emailIsValid(email)) {
      Alert.alert("CORREO INVALIDO", "Por favor, ingresa un correo válido.");
      return;
    }
    if (password.length < 6) {
      Alert.alert(
        "CONTRASEÑA CORTA",
        "La contraseña debe tener al menos 6 caracteres."
      );
      return;
    }

    // Comprueba las credenciales guardadas localmente
    if (email === storedEmail && password === storedPassword) {
      props.navigation.navigate('Pregunta 2.5');
    } else {
      Alert.alert("CREDENCIALES INCORRECTAS", "Por favor, verifica tus credenciales.");
    }
  };



  const goToRegistrate = () => {
    navigation.navigate("Registrate");
  };

  const goToRecuperala = () => {
    navigation.navigate("Recuperala");
  };

  const [error, setError] = useState("");

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/Logo_Color.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text}>Correo</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Ingrese su correo"
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
          handleSignIn();
          goToInicio();


        }}
      >
        <Text style={styles.textoBoton}> Iniciar Sesión </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToRegistrate}>
        <Text style={styles.registrateText}>
          ¿Aún no tienes cuenta?{" "}
          <Text style={styles.registrate}> Regístrate aquí </Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToRecuperala}>
        <Text style={styles.registrateText}>
          ¿Olvidaste tu contraseña?{" "}
          <Text style={styles.registrate}> Recupérala </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    backgroundColor: "#efefef"
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    borderBottomWidth: 1, // Añadimos el borde inferior
    borderBottomColor: "#000000", // Color del borde inferior
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 10,
  },

  /*Estilo boton y enlaces */
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
  registrateText: {
    fontSize: 16,
    marginBottom: 8,
  },
  text: {
    color: "#707070",
    alignSelf: "flex-start",

    fontWeight: "bold",
    marginBottom: 4,
  },

  registrate: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#1b3f90"
  },
  /* Estilo para los botones de roles */
  roleButton: {
    backgroundColor: "#D2D4DF",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 5,
    marginRight: 10,
  },
  selectedRoleButton: {
    backgroundColor: "#1b3f90",
  },
  roleButtonText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 16,
  },
  selectedRoleButtonText: {
    color: "#ffffff",
  },
  roleButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

});
