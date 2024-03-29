import Home from "./Home";
import DashBoard from "./DashBoard";
import Profile from "./Profile";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<title>loading...</title>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path = "/dashboard" element ={<DashBoard />} />
            <Route exact path = "/profile" element ={<Profile />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div> 
  );
}

export default App;