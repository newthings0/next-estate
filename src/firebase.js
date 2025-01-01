// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-estate-f9cae.firebaseapp.com",
  projectId: "next-estate-f9cae",
  storageBucket: "next-estate-f9cae.firebasestorage.app",
  messagingSenderId: "425645614075",
  appId: "1:425645614075:web:860d1f5da30be2bb1d615e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
