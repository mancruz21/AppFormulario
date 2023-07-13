import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Implementa la lógica de inicio de sesión aquí
  
      if (username === 'usuario' && password === 'contraseña') {
        // Autenticación exitosa, realiza acciones adicionales si es necesario
        Alert.alert('Inicio de sesión exitoso', 'Bienvenido ' + username);
  
        // Redirige a la pantalla principal
        navigation.navigate('Home');
      } else {
        // Autenticación fallida, muestra un mensaje de error
        Alert.alert('Error', 'Credenciales incorrectas');
      }
    };
  
    const handleRegister = () => {
      // Redirige a la pantalla de registro
      navigation.navigate('Register');
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Iniciar sesión" onPress={handleLogin} />
        <Button title="Registrarse" onPress={handleRegister} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
    },
  });
  
  export default LoginScreen;
  
