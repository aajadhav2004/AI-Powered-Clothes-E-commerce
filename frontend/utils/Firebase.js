import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart-d1053.firebaseapp.com",
  projectId: "loginonecart-d1053",
  storageBucket: "loginonecart-d1053.firebasestorage.app",
  messagingSenderId: "772914827007",
  appId: "1:772914827007:web:066a5cb9293c58364806ca"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

