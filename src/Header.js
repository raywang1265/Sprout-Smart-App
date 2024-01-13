import HeaderModule from "./HeaderModule";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <p className="title">
                    Title Message
                </p>
                <p>
                     Another Message 
                </p>
                <p>
                     Maybe the time
                </p>
            </div>
            <div className="centered-container">
                <HeaderModule />
            </div>
            
        </div>
    );
}

export default Header;