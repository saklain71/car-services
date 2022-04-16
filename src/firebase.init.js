// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyALtnjfmh15G6v3yqX8JAN3JoAg7VRyCpM",
  authDomain: "car-services-85826.firebaseapp.com",
  projectId: "car-services-85826",
  storageBucket: "car-services-85826.appspot.com",
  messagingSenderId: "509194021762",
  appId: "1:509194021762:web:56b3acb9af2311099dbd9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;