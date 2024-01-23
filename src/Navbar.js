import Profile from "./assets/account.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const Navbar = (props) => {



    const [homeState, setHomeState] = useState("");
    const [profileState, setProfileState] = useState("");

    function selectLink(page) {
        if (page == "home") {
            setProfileState("");
            setHomeState("selected");
        } else if (page == "profile") {
            setProfileState("selected");
            setHomeState("");
        }
    }

    useEffect(()=> {
        selectLink(props.page);
    });
 


    return (
        <div className="navbar">
            <Link to={"/dashboard"} className="link">
                <div id="home" className={homeState} onClick={()=> selectLink("home")}>
                    <svg className="navicon" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
                    <p>Home</p>
                </div>
            </Link>

            <Link to={"/profile"} className="link">
                <div id="profile" className={profileState} onClick={()=> selectLink("profile")}>
                    <svg className="navicon" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account</title><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>
                    <p>Profile</p>
                </div>
            </Link>

        </div>
    );
}

export default Navbar;