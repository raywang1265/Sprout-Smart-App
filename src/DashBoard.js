import Header from "./Header";
import Navbar from "./Navbar";
import PlantModule from "./PlantModule";

//temp data, have to connect to backend later
const plants = [
    {plantName: "Polyantha Rose", plantType: "Flower", plantImage: "./assets/flowerIcon.png", plantAge: "5 months", plantHeight: "11\"", plantMoist: "wet", plantTemp: "25", wateringFreq: "daily"},
    {plantName: "Prickly Pear", plantType: "Succulent", plantImage: "./assets/flowerIcon.png", plantAge: "1 year 3 months", plantHeight: "5\"", plantMoist: "dry", plantTemp: "20", wateringFreq: "monthly"},
    {plantName: "Pink Anthurium", plantType: "Flower", plantImage: "./assets/flowerIcon.png", plantAge: "1 month 11 days", plantHeight: "18.2\"", plantMoist: "normal", plantTemp: "27", wateringFreq: "weekly"}
]

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
                        <p className="dash-label">Plants</p>
                        <div className="plants-container">
                            {plants.map((p, i) => (
                                <PlantModule {...p} key={i} />
                            ))}
                        </div>
                    </div>


                </div>

            </div>
        </div>
     );
}


export default DashBoard;
