// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyAK80TmeViw0ZG0lqwZQGMsz9e04wD3M-0",
    authDomain: "ecommerce-18877.firebaseapp.com",
    projectId: "ecommerce-18877",
    storageBucket: "ecommerce-18877.appspot.com",
    messagingSenderId: "408637372037",
    appId: "1:408637372037:web:76c56062cd86cdfdc19bec"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)