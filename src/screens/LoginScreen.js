import { View, Text, Button, TextInput, Input, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, {useState} from 'react'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig} from '../components/firebase-config';




export default function LoginScreen(props) {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Signed in!')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate("Inicio");
      })
    .catch(error => {
      console.log(error)
    })
  }
  const {navigation} = props;

    const goToInicio = () => {

      if (!emailIsValid(email)) {
        Alert.alert('CORREO INVALIDO', 'Por favor, ingresa un correo válido.');
        return;
      }
      if (password.length < 6) {
        Alert.alert('CONTRASEÑA CORTA', 'La contraseña debe tener al menos 6 caracteres.');
        return;
      }
       navigation.navigate("Inicio")

    
    }
    const goToRegistrate = () => {
        navigation.navigate("Registrate")
    }

    const goToRecuperala = () => {
      navigation.navigate("Recuperala")
    }

  
  const [error, setError] = useState('');

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <View style={styles.container}>
      <TextInput onChangeText={(text) => setEmail(text)} style={styles.input}placeholder="Ingresa tu Correo"/>

      
      

      <TextInput onChangeText={(text) => setPassword(text) } style={styles.input} placeholder="Ingresa tu contraseña" secureTextEntry = {true}/>
     
      <Button
       title="Iniciar Sesión"
       containerStyle={styles.btnContainer}
       buttonStyle={styles.btn}
       onPress={() => {goToInicio();
                       handleSignIn()}}
      /> 

      <TouchableOpacity onPress={() => navigation.navigate('Registrate')}>
        <Text style={styles.registrateText}>¿Aún no tienes cuenta?{"   "}
        <Text style={styles.btnRegister}>
                Registrate Aquí
            </Text>
        
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Recuperala')}>
        <Text style={styles.registrateText}>¿Olvidaste tu contraseña?{"   "}
        <Text style={styles.btnRegister}>
                Recuperala
            </Text>
        </Text>
      </TouchableOpacity>

      
   
      

    </View>
  )
}

const styles = {

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 27,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inicioSesionButtonImage: {
    width: 280,
    height: 100,
    resizeMode: 'contain',
    // Agrega estilos adicionales específicos para el botón de Iniciar sesión aquí
  },
  btnContainer:{
    marginTop:20,
    width: "85%",
    alingSelf: "center"
},
btnRegister:{
  color: "#442484",
  fontWeight: "bold"
}
  
};


