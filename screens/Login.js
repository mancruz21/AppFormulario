import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import LoginForm from '../components/account/LoginForm'


export default function Login() {
   
  return (
    <KeyboardAwareScrollView>

        <Image
          source={require("")}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.container}>
           <LoginForm/>
           <CreateAccount/>

        </View>
        <Divider style={styles.divider}/>

    </KeyboardAwareScrollView>
  )
}

function CreateAccount(props){
    const navigation = useNavigation()
    return (
        <Text style={styles.register}
        onPress={() => navigation.navigate("register")}
        >
            ¿Aun no tienes una cuenta?{" "}

            <Text style={styles.btnRegister}>
                Registrate
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    image:{
        height:150,
        width:"1005",
        marginBottom:20
    },

    container: {
        marginHorizontal: 40
    },

    divider: {
        backgroundColor: "#448424",
        margin: 40
    },

    register: {
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: "center"
    },

    btnRegister:{
        color: "#442484",
        fontWeight: "bold"
    }
})