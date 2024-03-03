// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6-6lKJTjlIFi-Ca2cil5oWpjKoQyh_ug",
  authDomain: "facebook-cf4bf.firebaseapp.com",
  projectId: "facebook-cf4bf",
  storageBucket: "facebook-cf4bf.appspot.com",
  messagingSenderId: "537223599434",
  appId: "1:537223599434:web:74a69e2be6cafe74355db3",
  measurementId: "G-G5WP5Q6Z5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export {auth, db, storage}