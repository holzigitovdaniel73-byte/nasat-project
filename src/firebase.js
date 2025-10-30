// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwpB8Bqt382bKg9owQxVUQjG_sv-p61_4",
  authDomain: "register-27e76.firebaseapp.com",
  projectId: "register-27e76",
  storageBucket: "register-27e76.firebasestorage.app",
  messagingSenderId: "392449295255",
  appId: "1:392449295255:web:5c773cd2485400955e3ad2",
  measurementId: "G-W9FYXDQK8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)