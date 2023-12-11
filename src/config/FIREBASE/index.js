import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyCAFMASsXN7rEBxg0F-uba5DcaedrbHl28",
    authDomain: "praktikum-baefc.firebaseapp.com",
    databaseURL: "https://praktikum-baefc-default-rtdb.firebaseio.com",
    projectId: "praktikum-baefc",
    storageBucket: "praktikum-baefc.appspot.com",
    messagingSenderId: "825366057223",
    appId: "1:825366057223:web:f38f7b560b3a8213d435a2"
});

const FIREBASE = firebase;

export default FIREBASE;