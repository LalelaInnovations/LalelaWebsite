import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {
    firestore
}