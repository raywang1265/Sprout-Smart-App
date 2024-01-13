import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWoJfMU1i_i6tzK9VdME3dWOy-T_qetWQ",
  authDomain: "sprout-smart-site.firebaseapp.com",
  projectId: "sprout-smart-site",
  storageBucket: "sprout-smart-site.appspot.com",
  messagingSenderId: "951472339723",
  appId: "1:951472339723:web:67a995180ed1b2bb38400e",
  measurementId: "G-9GT0QGG7HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
