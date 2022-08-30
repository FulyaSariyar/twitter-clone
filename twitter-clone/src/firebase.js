import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';



const firebaseConfig = {
  apiKey: "AIzaSyDfRLvpwTrRd2LfJUN1gswlMJDK5Jrcr8w",
  authDomain: "twitter-clone-7eab5.firebaseapp.com",
  projectId: "twitter-clone-7eab5",
  storageBucket: "twitter-clone-7eab5.appspot.com",
  messagingSenderId: "407143298268",
  appId: "1:407143298268:web:e7a86a4cb3780acf3cf019",
  measurementId: "G-0X8878Q1FF"
};

// Initialize Firebase


const firebaseApp = initializeApp(firebaseConfig);
const db =  getFirestore();

export default db;