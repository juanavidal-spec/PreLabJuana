// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0vIrCUqc-xIaU57gLPccgAF6WxZeQCHY",
  authDomain: "prelab-5d798.firebaseapp.com",
  projectId: "prelab-5d798",
  storageBucket: "prelab-5d798.firebasestorage.app",
  messagingSenderId: "24886182850",
  appId: "1:24886182850:web:89a6502a2be79307c64c5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para cuando veamos el login
const auth = getAuth(app);

export { db, auth };