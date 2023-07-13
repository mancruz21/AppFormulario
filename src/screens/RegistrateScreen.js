import React, {useState} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert  } from 'react-native'

import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig} from '../components/firebase-config';

 

export default function RegistrateScreen(props) {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

    const handleCreateAccount = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Account created!')
        const user = userCredential.user;
        console.log(user)
        Alert.alert('Éxito', 'Usuario creado correctamente');
      })
      .catch(error => {
        console.log(error)
        Alert.alert(error.message)
      })

    // Validar correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Por favor, introduce un correo electrónico válido');
      return;
    }

    // Validar contraseña
    if (password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Ejemplo: Mostrar los valores ingresados en la consola
    console.log('Nombre:', name);
    console.log('Apellidos:', lastName);
    console.log('Correo:', email);
    console.log('Contraseña:', password);

    // Reiniciar los campos de entrada
    setName('');
    setLastName('');
    setEmail('');
    setPassword('');


      
    }

  const {navigation} = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };



  return (
    <View style={styles.container}>
      
      <TextInput  style={styles.input} placeholder="Ingresa tu nombre" onChangeText={setName} />
      <TextInput  style={styles.input} placeholder="Ingresa tus apellidos" onChangeText={setLastName} />
      <TextInput onChangeText={(text) => setEmail(text)} style={styles.input}placeholder="Ingresa tu Correo"/>
      
      <TextInput onChangeText={(text) => setPassword(text) } style={styles.input} placeholder="Ingresa tu contraseña" secureTextEntry = {true}/>
      
      <View style={styles.buttonContainer}>

      

      <Button title="Registrar Usuario"
       containerStyle={styles.btnContainer}
       buttonStyle={styles.btnRecover}
       onPress={() => {handleCreateAccount();
                       goToPage('Login');}}
      />
      
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#2e7d32',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnRecover: {
    backgroundColor: "#442484"
},

btnContainer: {
  marginTop:20,
  width:"95%",
  alignSelf: "center"
},
btn: {
  backgroundColor: "#442484"
}
});
