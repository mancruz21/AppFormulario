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
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../components/firebase-config";


export default function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in!");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { navigation } = props;

  const goToInicio = () => {
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
    navigation.navigate("Inicio");
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
          source={require('../assets/logo1.webp')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text}>Correo</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Ingrese su correo"
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
          goToInicio();
          handleSignIn();
        }}
      >
        <Text style={styles.textoBoton}> Iniciar Sesión </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToRegistrate}>
        <Text style={styles.registrateText}>
          ¿Aún no tienes cuenta? <Text style={styles.registrate}> Regístrate aquí  </Text> 
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToRecuperala}>
        <Text style={styles.registrateText}>
          ¿Olvidaste tu contraseña? <Text style={styles.registrate}> Recupérala  </Text>
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
    width: "100%",
    height: 40,
    borderColor: "#D2D4DF",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  boton: {
    backgroundColor: "#02B3C6",
    borderColor: "#D2D4DF",
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 10,
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
    fontFamily: "Montserrat",
  },
  text: {
    color: "#707070",
    alignSelf: "flex-start",
    
    fontWeight: "bold",
    marginBottom:4,
  },

  registrate:{
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",



  }
});
