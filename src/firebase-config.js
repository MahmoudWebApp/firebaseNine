import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA7lLn6U8Jy0bsPVKr9_kjGxZdmX96lzUk",
  authDomain: "react-firebase-crud-aa97a.firebaseapp.com",
  projectId: "react-firebase-crud-aa97a",
  storageBucket: "react-firebase-crud-aa97a.appspot.com",
  messagingSenderId: "907815429487",
  appId: "1:907815429487:web:c78ed2c60ed4cfb462b49a"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
