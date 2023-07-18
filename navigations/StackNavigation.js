import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../src/screens/LoginScreen";
import InicioScreen from "../src/screens/InicioScreen";
import RegistrateScreen from "../src/screens/RegistrateScreen";
import IdentificacionScreen from "../src/screens/IdentificacionScreen";
import PreUnoScreen from "../src/screens/PreUnoScreen";
import PreDosScreen from "../src/screens/PreDosScreen";
import PreTresScreen from "../src/screens/PreTresScreen";
import PreCuaScreen from "../src/screens/PreCuaScreen";
import PreCinScreen from "../src/screens/PreCinScreen";
import RecuperacioScreen from "../src/screens/RecuperacioScreen";
import PreSeisScreen from "../src/screens/PreSeisScreen";
import PreSieScreen from "../src/screens/PreSieScreen";
import EnvioScreen from "../src/screens/EnvioScreen";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Iniciar Sesión",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#D2D4DF" }
        }}
      />
      <Stack.Screen
        name="Inicio"
        component={InicioScreen}
        options={{
          title: "Instrucciones ",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#D2D4DF" },
        }}
      />
      <Stack.Screen
        name="Registrate"
        component={RegistrateScreen}
        options={{
          title: "Registrarse",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#D2D4DF" },
        }}
      />
     <Stack.Screen
        name="Recuperala"
        component={RecuperacioScreen}
        options={{
          title: "Recuperar contraseña",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#D2D4DF" },
        }}
      />
      <Stack.Screen
        name="Identificacion"
        component={IdentificacionScreen}
        options={{
          title: "Tipo de Identificación",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#A7C6ED" },
        }}
      />
      <Stack.Screen
        name="Pregunta 1.1"
        component={PreUnoScreen}
        options={{
          title: "Componente I ",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#A7C6ED" },
        }}
      />
      <Stack.Screen
        name="Pregunta 1.2"
        component={PreDosScreen}
        options={{
          title: "Componente II ",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#A7C6ED" },
        }}
      />
      <Stack.Screen
        name="Pregunta 2.1"
        component={PreTresScreen}
        options={{
          title: "Componente III ",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#A7C6ED" },
        }}
      />
      <Stack.Screen
        name="Pregunta 2.2"
        component={PreCuaScreen}
        options={{
          title: "Componente IV ",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#A7C6ED" },
        }}
      />
      <Stack.Screen
        name="Pregunta 2.3"
        component={PreCinScreen}
        options={{
          title: "Componente V ",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#A7C6ED" },
        }}
      />
      <Stack.Screen
        name="Pregunta 2.4"
        component={PreSeisScreen}
        options={{
          title: "Componente VI ",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#A7C6ED" },
        }}
      />
      <Stack.Screen
        name="Pregunta 2.5"
        component={PreSieScreen}
        options={{
          title: "Componente VII ",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#A7C6ED" },
        }}
      />
      <Stack.Screen name="Pregunta 2.6" component={EnvioScreen} />
    </Stack.Navigator>
  );
}
