import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {Icon, Input, Button} from 'react-native-elements'

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../components/firebase-config';

export default function RecuperacioScreen({navigation}) {

    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState(null)

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const onSubmit = () => {
        if (!validateData()) {
            return
        }

        sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('Éxito', 'Se ha enviado un correo electrónico para restablecer la contraseña');
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Error', 'No se pudo enviar el correo electrónico para el restablecimiento de contraseña');
      });

        console.log("Fuck yeah!!!")
    }

    const validateData = () => {
        setErrorEmail(null)
        let valid = true
        

        if (!validateData(email)) {
            setErrorEmail("Debes ingresar un email valido.")
            valid = false
        }

        return valid
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };


  return (
    <View style={styles.formContainer}>
       <Input 
        
        placeholder="Por favor ingresa tu email..."
        containerStyle={styles.inputForm}
        onChange={(e) => setEmail(e.nativeEvent.text)}
        defaultValue={email}
        errorMessage={errorEmail}
        keyboardType="email-address"
        rightIcon={
            <Icon 
               type="material-community"
               name="at"
               iconStyle={styles.Icon}
            />
        }

        

        /> 

         {/* Boton */}
      <TouchableOpacity
        style={styles.boton}
        title="Recuperar Contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnRecover}
        onPress={onSubmit}
        
      >
        <Text style={styles.textoBoton}>Recuperar contraseña</Text>
      </TouchableOpacity>
       
       
        

    </View>
  )
}

const styles = StyleSheet.create({

    formContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },

    inputForm:{
        width: "90%"
    },

    btnContainer:{
        marginTop:20,
        width: "85%",
        alingSelf: "center"
    },

    btnRecover: {
        backgroundColor: "#442484"
    },
    icon: {
        color: "#c1c1c1"
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
})