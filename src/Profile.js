import Navbar from "./Navbar";
import Header from "./Header";

const Profile = () => {
    return ( 
        <div className="dashboard">
            <div className="sidebar-container">
                <div className="logo">
                    <p>Sprout Smart</p>
                </div>
                <Navbar page={"profile"}/>
            </div>

            <div className="main-container">
                <div className="header-container">
                    <Header />
                </div>
                <div className="profile-container">
                    <p>Profile page</p>
                </div>

            </div>
        </div>
     );
}
 
export default Profile;