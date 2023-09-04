import "react-native-gesture-handler";
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationTab from "./src/navigations/NavigationTab";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserLogin from "./src/components/UserLogin";
import AdminLogin from "./src/components/AdminLogin";
import TipoIdentificacionSection from "./src/components/TipoIdentificacioSection";
import HealthConditionsSection from "./src/components/HealthConditionsSection";
import { useNavigation } from "@react-navigation/native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

import StackNavigation from "./navigations/StackNavigation";

import { RealmConfigContext } from "./utils/models/context";
const { RealmProvider: RealmProviderConfig } = RealmConfigContext;


export default function App() {
  return (
    <RealmProviderConfig>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </RealmProviderConfig>
  );
}

/*

const uri = 'https://3.bp.blogspot.com/-ihA9fcCJjbk/UobjZkX9FJI/AAAAAAAAACg/JWwNmAFlLlg/s1600/Unknown000529.jpg'
const profilePicture = 'https://vectorified.com/images/login-logo-icon-4.jpg'


function HomeScreen(){
  <View>
    <Text> </Text>
  </View>
}

function RecoverScreen(){
  <View>
    <Text> </Text>
  </View>
}

function LoginScreen(){

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation();

    

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Account created!')
        const user = userCredential.user;
        console.log(user)
      })
      .catch(error => {
        console.log(error)
        Alert.alert(error.message)
      })
    }

    const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Signed in!')
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('Home');
        
      })
      .catch(error => {
        console.log(error)
      })
    }

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <View style={{width: 100, height: 100, backgroundColor: 'purple', position: 'absolute' }}></View>
      
      <View style={{width: 100, height: 100, backgroundColor: 'red', bottom: 120 ,position: 'absolute', borderRadius: 50, transform: [{rotate: '50deg'}] }}></View>
      <ScrollView contentContainerStyle= {{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}> 
        <BlurView intensity={100}>
          <View style={styles.login}>
            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
            <View>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>E-mail</Text>
              <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Por favor ingrese su correo" />
            </View>
            <View>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Password</Text>
              <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="Ingrese su contraseña" secureTextEntry={true}/>
            </View>
            <TouchableOpacity onPress={handleSignIn} style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, {backgroundColor: '#6792F090'}]}>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
  
}

function RecoverPassword () {
   const navigation = useNavigation()

   return(
    <Text style={styles.register}
    onPress={() => navigation.navigate("recoverpassword")}
    >
      ¿Olvidaste tu contraseña?{(" ")}
      <Text style={styles.btnRegister}>
          Recupérarla
      </Text>
    </Text>
   )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen  name="recoverpassword" 
            component={RecoverPassword}
            options={{title: "Recuperar contraseña"}}/>
        <Stack.Screen name="Revover" component={RecoverScreen} />
            
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  login: {
    width: 350,
    height: 500,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },

  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 30
  },

  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20
  },

  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
  },

  register: {
    marginTop: 15,
    marginHorizontal: 10,
    alignSelf: "center"
  },

  btnRegister: {
    color: '#442484',
    fontWeight: "bold"
  }


})


*/

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
//Funcion para login de usuario y administrador
/*
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
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; */
