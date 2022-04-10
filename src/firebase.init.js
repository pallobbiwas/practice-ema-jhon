// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqW-xUfWQdcuxdyPRN2Tme4EnS7SuKa4o",
  authDomain: "practice-ema-jhon-a3555.firebaseapp.com",
  projectId: "practice-ema-jhon-a3555",
  storageBucket: "practice-ema-jhon-a3555.appspot.com",
  messagingSenderId: "986236013632",
  appId: "1:986236013632:web:9c6e307564b431ca0e23a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;