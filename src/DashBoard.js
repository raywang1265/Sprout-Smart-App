import Header from "./Header";
import Navbar from "./Navbar";

const DashBoard = () => {

    return ( 
        <div className="dashboard">
            <div className="sidebar-container">
                <div className="logo">
                    <p>Sprout Smart</p>
                </div>
                <Navbar page={"home"}/>
            </div>

            <div className="main-container">
                <div className="header-container">
                    <Header />
                </div>
                <div className="modules-container">
                    <div className="container">
                        <p>Module</p>
                        <div className="module4-container">
                            <div className="module1">

                            </div>
                            <div className="module1">

                            </div>
                            <div className="module1">

                            </div>
                            <div className="module1">

                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <p className="dash-label">Statistics</p>
                        <div className="module3-container">
                            <div className="module1">

                            </div>
                            <div className="module1">

                            </div>
                            <div className="module1">

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
     );
}


export default DashBoard;
