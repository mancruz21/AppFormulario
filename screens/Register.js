import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import RegisterForm from '../components/account/RegisterForm'


export default function Register() {
  return (
   <KeyboardAwareScrollView>
       <Image
          source={require("../")}
          resizeMode="contain"
          style={styles.image}
        />
        <RegisterForm/>
   </KeyboardAwareScrollView>
  )
}
const styles = StyleSheet.create({
    image:{
        height:150,
        width:"1005",
        marginBottom:20
    }

})