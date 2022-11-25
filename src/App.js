import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import React from "react";
import Albums from "./pages/albums";
import Songs from "./pages/songs";
import Navbar from "./components/navbar" 
import Musicicon from "./assets/musicicon.png"

function App() {
  return (
    
    <Router>
    <div>
     <center>
      <Link to="/songs"><img src="https://i.imgur.com/HyqYBzm.png" alt="Songs" className="navimage"/></Link>{" "}
      <Link to={{ pathname: "/albums" }}><img src="https://i.imgur.com/aRYANBM.png" alt="Albums" className="navimage"/></Link>{" "}
      </center>
      <Routes>
        <Route path="/songs" element={<Songs/>} />
        <Route path="/albums" element={<Albums/>} />

        <Route render={() => <h1>Page not found</h1>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
