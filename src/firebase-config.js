// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmXkB-FcXWr__8jHsDSkxFttbGTwWpJKs",
  authDomain: "revision-app-b49a1.firebaseapp.com",
  projectId: "revision-app-b49a1",
  storageBucket: "revision-app-b49a1.appspot.com",
  messagingSenderId: "385048377394",
  appId: "1:385048377394:web:5993b2851ff7ab9627242b",
  measurementId: "G-5TBNV4WH6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
// const analytics = getAnalytics(app);
export const db = getFirestore(app)