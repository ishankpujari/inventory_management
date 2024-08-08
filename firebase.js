// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA6_J1PxtWA-86M3fDiPYk1d3f4vZjvWw",
  authDomain: "inventory-managment-c4858.firebaseapp.com",
  projectId: "inventory-managment-c4858",
  storageBucket: "inventory-managment-c4858.appspot.com",
  messagingSenderId: "598153979735",
  appId: "1:598153979735:web:611b43925dd26492370012",
  measurementId: "G-95QSCWQSMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}