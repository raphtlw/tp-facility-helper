// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuYTGqsXcnkAvn_gCQVy6t-XFPG1wRsaM",
  authDomain: "tp-tissuepaper.firebaseapp.com",
  projectId: "tp-tissuepaper",
  storageBucket: "tp-tissuepaper.appspot.com",
  messagingSenderId: "1072659551485",
  appId: "1:1072659551485:web:ab571451b868d583c5da94",
  measurementId: "G-CS2V3Y54LX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { app, analytics, firestore };
