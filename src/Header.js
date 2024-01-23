import HeaderModule from "./HeaderModule";
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import {auth} from "./Home.js";
import React, { useEffect, useState } from 'react';

const auth = getAuth();
const user = auth.currentUser;

const Header = () => {
    const [userName, setUserName] = useState("User");
    const [userPhoto, setUserPhoto] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        if (user !== null) {
            setUserName(auth.currentUser.displayName);
            setUserPhoto(user.photoURL);
        }
        
    });
    

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            console.log(error);
          });
    }
    // const userName = auth.currentUser.displayName;
    // const uid = auth.currentUser.uid;
    // const userPhoto = auth.currentUser.photoURL;

    return (
        <div className="header">
            <div className="title-message">
                <p>Nice to see you again, {userName}</p>
            </div>
            <div className="header-dashboard">
                <img src={userPhoto} alt="User Photo" className="profilepic" />

                <div className="logout-btn" onClick={handleLogout}>
                    <svg width="24px" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>logout</title><path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12M4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" /></svg>
                    <p>Log Out</p>
                </div>
                {/* <button onClick={handleLogout} className="logout-btn">logout</button> */}
            </div>
        </div>
    );
}

export default Header;