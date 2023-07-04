import 'react-native-gesture-handler';
import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import NavigationTab from './src/navigations/NavigationTab';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import UserLogin from './src/components/UserLogin';
import AdminLogin from './src/components/AdminLogin';
import Seccion1 from './src/screens/Seccion1';
import TipoIdentificacionSection from './src/components/TipoIdentificacioSection';
import HealthConditionsSection from './src/components/HealthConditionsSection';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

//.....................................Codigo de login de usuario o administrador
/*
const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <View style={styles.container}>
      {!user ? (
        <>
          <UserLogin onLogin={handleLogin} />
          <AdminLogin onLogin={handleLogin} />
        </>
      ) : (
        <>
          <Text style={styles.welcomeText}>Bienvenido, {user.username}!</Text>
          <Button title="Cerrar sesión" onPress={handleLogout} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;

*/
//.............................Llamar la funcion del Tab Navigation para mostrar el menu
/*export default function App() {
  return (
    <NavigationContainer>
      <NavigationTab/>
     


   
    </NavigationContainer>
  );
}
*/
//.....................Llama la funcion de seccion 1
/*const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Form" component={Seccion1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
*/
//.............................Seccion de selecionar tipo de identificación

/*
const App = () => {
  return (
    <View style={styles.container}>
      
      <TipoIdentificacionSection />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});

export default App; */

/*
const App = () => {
  return (
    <View style={styles.container}>
      <HealthConditionsSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

*/
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Registro' }}
        />
        {/* Agrega otras pantallas de la aplicación aquí */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;