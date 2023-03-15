// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBT3vRRVg7hEdqp2KgZ60PaZ2BNMWgI73s",
  authDomain: "owlearn-95ba4.firebaseapp.com",
  projectId: "owlearn-95ba4",
  storageBucket: "owlearn-95ba4.appspot.com",
  messagingSenderId: "431353598726",
  appId: "1:431353598726:web:6c26887ca53ebbd682c487",
  measurementId: "G-Q63BHTEEZB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
