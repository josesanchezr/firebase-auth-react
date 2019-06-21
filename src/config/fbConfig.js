import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyArWVL1boXb5AV40tda4DRzUeXumDaqzEQ",
    authDomain: "login-firebase-1189f.firebaseapp.com",
    databaseURL: "https://login-firebase-1189f.firebaseio.com",
    projectId: "login-firebase-1189f",
    storageBucket: "login-firebase-1189f.appspot.com",
    messagingSenderId: "713042569018",
    appId: "1:713042569018:web:febb9b6366acc077"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase