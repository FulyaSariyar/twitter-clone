import firebase from "firebase";
import "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBZHxEH0bP6w9b0IzHnICCFVCM5Sace-Gk",
    authDomain: "twitter-clone-f3297.firebaseapp.com",
    projectId: "twitter-clone-f3297",
    storageBucket: "twitter-clone-f3297.appspot.com",
    messagingSenderId: "106721663606",
    appId: "1:106721663606:web:7278a34ad05ea6bef0dd57",
    measurementId: "G-GVSYCKK7QF"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = firebase.firestore();
  export default db;