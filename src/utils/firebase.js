// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1JjTV7G77TW_pV1asCF5ELS5mjWRJChs",
  authDomain: "netflixgpt-dc94e.firebaseapp.com",
  projectId: "netflixgpt-dc94e",
  storageBucket: "netflixgpt-dc94e.firebasestorage.app",
  messagingSenderId: "285001314317",
  appId: "1:285001314317:web:65e78dbac6fb171bc32544",
  measurementId: "G-ZNDEG56ECH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth();