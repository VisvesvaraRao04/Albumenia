// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3feqanhlP0oc7BGlJYBh_4rQAlmTgYuo",
  authDomain: "albumart-45533.firebaseapp.com",
  projectId: "albumart-45533",
  storageBucket: "albumart-45533.firebasestorage.app",
  messagingSenderId: "594122150588",
  appId: "1:594122150588:web:e52b67f28ea3beefcb76b9",
  measurementId: "G-4TKVYZZ9TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;