// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5a_RYYBmnyQWHYh7_Xkwgq9o2MwD6fQY",
  authDomain: "note-app-3a453.firebaseapp.com",
  projectId: "note-app-3a453",
  storageBucket: "note-app-3a453.appspot.com",
  messagingSenderId: "535907300158",
  appId: "1:535907300158:web:cfa5098a5b664509d4f26f",
  measurementId: "G-ZPXFG18M7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);