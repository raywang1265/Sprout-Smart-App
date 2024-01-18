import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from 'react';
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWoJfMU1i_i6tzK9VdME3dWOy-T_qetWQ",
    authDomain: "sprout-smart-site.firebaseapp.com",
    projectId: "sprout-smart-site",
    storageBucket: "sprout-smart-site.appspot.com",
    messagingSenderId: "951472339723",
    appId: "1:951472339723:web:67a995180ed1b2bb38400e",
    measurementId: "G-9GT0QGG7HC"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Home = () => {

    const navigate = useNavigate();
    let credential;
    let token;
    let user;

    const handleLogin = () => {
        signInWithRedirect(auth, provider);
    }

    useEffect(() => {
        getRedirectResult(auth)
        .then((result) => {
            credential = GoogleAuthProvider.credentialFromResult(result);
            token = credential.accessToken;
            user = result.user;
            console.log(user.uid);
            navigate("/dashboard");
    
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    });

    return ( 
        <div className="landing-container">
            <div className="signup-container">
                <h1>Home Page</h1>
                <button onClick={handleLogin} className="signup-btn">Get Started</button>
            </div>
            
        </div>
     );
}


export default Home;