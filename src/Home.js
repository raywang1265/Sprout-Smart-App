import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from 'react';
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from "firebase/auth";

import placeholderimg from "./assets/placeholderlandingpage.png";

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
        // <div className="landing-container">
        //     <div className="signup-container">
        //         <h1>Home Page</h1>
        //         <button onClick={handleLogin} className="signup-btn">Get Started</button>
        //     </div>
        // </div>
        <div className="landing-container">
            <div className="signup-container">
                <div className="container">
                    <p className="landing-text">Track. Monitor. Cultivate.</p>
                    <p className="landing-text green-text">All from the same place.</p>
                </div>
                <button onClick={handleLogin} className="signup-btn">Get Started</button>
            </div>
            <div className="title-container">
                <div className="flex">
                    <p id="title">Sprout Smart</p>
                    <svg width={"60px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>leaf</title><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>
                </div>

                <img src={placeholderimg} width={"350px"} />
            </div>

        </div>

    );
}

export default Home;