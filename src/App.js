import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import React from "react";
import Albums from "./pages/albums";
import Songs from "./pages/songs";
import Navbar from "./components/navbar"

function App() {
  return (
    
    <Router>
    <div>
      <Link to="/songs"><img src="../assets/musicicon.png" alt="Songs" className="navimg"/></Link>{" "}
      <Link to={{ pathname: "/albums" }}><img src=".assets/musicicon.png" alt="Albums" className="navimg"/></Link>{" "}
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
