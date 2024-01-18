import HeaderModule from "./HeaderModule";
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "./Home.js";
import React, { useState } from 'react';


const Header = () => {
    const navigate = useNavigate();
      

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            console.log(error);
          });
    }
    const userName = auth.currentUser.displayName;
    const uid = auth.currentUser.uid;
    const userPhoto = auth.currentUser.photoURL;

    return (
        <div className="header">
            <div className="container">
                <p className="title">
                    Welcome {userName}
                </p>
                <p>
                     Another Message 
                </p>
                <p>
                     Maybe the time
                </p>
                <button onClick={handleLogout}>logout</button>
            </div>
            <div className="centered-container">
                <HeaderModule />
            </div>
            
        </div>
    );
}

export default Header;