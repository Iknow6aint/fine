// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsbzB0AG_APgEtDGIHZMnEoG3s5oo-FB8",
    authDomain: "finals-6bad9.firebaseapp.com",
    projectId: "finals-6bad9",
    storageBucket: "finals-6bad9.appspot.com",
    messagingSenderId: "615270949418",
    appId: "1:615270949418:web:42ca7decac925518b0d953",
    measurementId: "G-BBTKFP8KB6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
