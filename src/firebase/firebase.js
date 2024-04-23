// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBODWRyYSIbV462APMrj4Wpvfgkbq9_DzI",
  authDomain: "marbid-69744.firebaseapp.com",
  projectId: "marbid-69744",
  storageBucket: "marbid-69744.appspot.com",
  messagingSenderId: "780139567265",
  appId: "1:780139567265:web:0a7a584a4fc253c77df8e0",
  measurementId: "G-CG4EDG0C15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
