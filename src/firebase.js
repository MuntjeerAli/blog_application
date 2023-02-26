// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH-qF_6vJHpCwJXyZe7BfJ2myvrTh37GY",
  authDomain: "blog-app-93580.firebaseapp.com",
  projectId: "blog-app-93580",
  storageBucket: "blog-app-93580.appspot.com",
  messagingSenderId: "455758748143",
  appId: "1:455758748143:web:26b8fdfa6d93a349147e1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();