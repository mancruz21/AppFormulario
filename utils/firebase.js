
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCFwe8Hl20ppue6vEcBN3I-Qehm8hshV9M",
    authDomain: "login-57e3c.firebaseapp.com",
    projectId: "login-57e3c",
    storageBucket: "login-57e3c.appspot.com",
    messagingSenderId: "716969814105",
    appId: "1:716969814105:web:1e6d7db4eed317db2ea948"
  };
  
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig)
  