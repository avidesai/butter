// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwoellfYFUNDc8rmvUGhGqWD7KPQmcECE",
  authDomain: "butter-f77fe.firebaseapp.com",
  projectId: "butter-f77fe",
  storageBucket: "butter-f77fe.appspot.com",
  messagingSenderId: "298422053827",
  appId: "1:298422053827:web:0e2d9a455f020675752b76",
  measurementId: "G-FC46CERBVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);