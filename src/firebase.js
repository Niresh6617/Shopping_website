// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC_k2zgY1EL99GQuAE7cOALMjOtlNa8wI",
  authDomain: "loginprocess-845a9.firebaseapp.com",
  projectId: "loginprocess-845a9",
  storageBucket: "loginprocess-845a9.firebasestorage.app",
  messagingSenderId: "17354975708",
  appId: "1:17354975708:web:96fc0b2111297e6a0f8719",
  measurementId: "G-ED36VTNJ6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();