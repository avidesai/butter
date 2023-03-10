import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { initializeApp } from "firebase/app";
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
