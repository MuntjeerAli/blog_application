// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCih3Kbtv1anMO-yxpxq3m1LnTZfg67rIU",
  authDomain: "blog-application-31b8d.firebaseapp.com",
  projectId: "blog-application-31b8d",
  storageBucket: "blog-application-31b8d.appspot.com",
  messagingSenderId: "1013104029198",
  appId: "1:1013104029198:web:438fe1efa21c7c14c4d65f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();