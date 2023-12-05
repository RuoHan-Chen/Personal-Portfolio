import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Home";
import About from "./About";
import Food from "./Food";
import Vacation from "./Vacation";

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/food" element={<Food />} />
        <Route path="/vacation" element={<Vacation />} />
      </Routes>
    </Router>
  );
}

export default App;
