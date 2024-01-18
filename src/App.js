import Home from "./Home";
import DashBoard from "./DashBoard";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path = "/dashboard" element ={<DashBoard />} />
          
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
