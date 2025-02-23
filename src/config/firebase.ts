// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnnyOUaUzuaZooMK6D13-85K3dVkiccXE",
  authDomain: "healthai-1e680.firebaseapp.com",
  projectId: "healthai-1e680",
  storageBucket: "healthai-1e680.firebasestorage.app",
  messagingSenderId: "674052332974",
  appId: "1:674052332974:web:4128ec42811f9cec53bc3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
