import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard");
    }

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