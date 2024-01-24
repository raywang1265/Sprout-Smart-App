
const PlantModule = ({plantName, plantType, plantImage, plantAge, plantHeight, plantMoist, plantTemp, wateringFreq}) => {
    return (
        <div className="plant-module-container">
            <div className="plant-module-header">
                <div className="plant-name-type">
                    <p className="plant-name">{plantName}</p>
                    <p className="plant-type">{plantType}</p>
                </div>
                <img className="flower-icon" src={require("./assets/flowerIcon.png")}/>
            </div>
            <p className="plant-age">{plantAge}</p>
            <div className="plant-info-module">
                <img className="ruler-icon" src={require("./assets/rulerIcon.png")}/>
                <p className="plant-info-text">{plantHeight}</p>
            </div>
            <div className="plant-info-module">
                <img className="moisture-icon" src={require("./assets/moistureIcon.png")}/>
                <p className="plant-info-text">{plantMoist}</p>
            </div>
            <div className="plant-info-module">
                <img className="temp-icon" src={require("./assets/tempIcon.png")}/>
                <p className="plant-info-text">{plantTemp}&deg;</p>
            </div>
            <div className="plant-info-module">
                <img className="watering-icon" src={require("./assets/wateringIcon.png")}/>
                <p className="plant-info-text">{wateringFreq}</p>
            </div>

            <div></div>
            
        </div>
    );
}

export default PlantModule;