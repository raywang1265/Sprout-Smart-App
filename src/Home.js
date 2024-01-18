import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard");
    }

    return ( 
        <div className="homepage">
            <h1>Home Page</h1>
            <button onClick={handleLogin}>login</button>
        </div>
     );
}


export default Home;