// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYGrWzE412Ql4GAJaum2657-lIP79PbqM",
  authDomain: "lalela-e9170.firebaseapp.com",
  databaseURL: "https://lalela-e9170.firebaseio.com",
  projectId: "lalela-e9170",
  storageBucket: "lalela-e9170.appspot.com",
  messagingSenderId: "934663723428",
  appId: "1:934663723428:web:b5d43d9e8f7abedfe18931",
  measurementId: "G-0MV5V4D0LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);


//const analytics = getAnalytics(app);

export {
  firestore,
  auth
}


