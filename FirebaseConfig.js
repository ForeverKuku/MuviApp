// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3xxJLD_sbC_KUXVSOr-JkhSxdBz0qIxU",
  authDomain: "muvimovieapp.firebaseapp.com",
  projectId: "muvimovieapp",
  storageBucket: "muvimovieapp.appspot.com",
  messagingSenderId: "258645729833",
  appId: "1:258645729833:web:9a63f99c5db218eb4d3238"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)