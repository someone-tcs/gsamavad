// Import the functions you need from the SDKs you need
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDit9BYUHslSryH3Vbwbb4e_62__pXtT3U",
  authDomain: "project-samvad.firebaseapp.com",
  projectId: "project-samvad",
  storageBucket: "project-samvad.appspot.com",
  messagingSenderId: "788101847509",
  appId: "1:788101847509:web:05b8c9af8c2c2b601d455c",
  measurementId: "G-JY9M3XJWL6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = firebase.firestore()

export {app, auth, db}