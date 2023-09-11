import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Icon, Input, Button } from 'react-native-elements'

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import appFirebase from '../components/firebase-config';

export default function RecuperacioScreen(props) {

  const { navigation } = props;
  const [email, setEmail] = useState("")
  const [errorEmail, setErrorEmail] = useState(null)
  const [showMessage, setShowMessage] = useState(false);




  const handleResetEmail = () => {

    

    // Validar correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Por favor, introduce un correo electrónico válido');
      return;
      
    }
    const auth = getAuth(appFirebase);


    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Se ha enviado el correo electrónico de restablecimiento de contraseña');
        setShowMessage(true);
        setEmail(""); // Restablecer el valor del campo de texto a una cadena vacía
        // Aquí puedes mostrar un mensaje al usuario o redirigirlo a otra pantalla
      })
      .catch(error => {
        console.log(error);
        Alert.alert(error.message);
      });


  }


  const goToPage = (pageName) => {
    navigation.navigate(pageName);
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
      <Button
        title="Recuperar Contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnRecover}
        onPress={handleResetEmail}
      />

      {showMessage && (
        <Text style={styles.messageText}>Verifica tu correo electrónico para restablecer la contraseña.</Text>
      )}


    </View>
  )
}

const styles = StyleSheet.create({

  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },

  inputForm: {
    width: "90%"
  },

  btnContainer: {
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 10,
  },

  btnRecover: {
    backgroundColor: "#35669a",

  },
  icon: {
    color: "#c1c1c1"
  },
  messageText: {
    marginTop: 20,
    color: "#442484",
    fontSize: 16,
    textAlign: "center"
  }
})