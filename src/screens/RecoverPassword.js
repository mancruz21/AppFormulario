import { View, Text } from 'react-native'
import React, {useState} from 'react'
import {Icon, Input, Button} from 'react-native-elements'

//Falta la importacion de dos archivos que aun no se crean, loading de la carpeta components y validateemail de la carpeta utils
export default function RecoverPassword({navigation}) {

    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState(null)
    const [loading, setLoading] = useState(null)

    const onSubmit = () => {
        if (!validateData()) {
            return
        }

        console.log("Fuck yeah!!!")
    }

    const validateData = () => {
        setErrorEmail(null)
        let valid = true
        console.log("email",email)

        if (!validateData(email)) {
            setErrorEmail("Debes ingresar un email valido.")
            valid = false
        }

        return valid
    }
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
          onPress={onSubmit}
        />

        <Loading isVisible={loading} text="Recuperando contraseña..."/>
      
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
    }
})