// import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";


//pages
import Home from './Pages/Home.js';
// import About from './Pages/About.js'
import Donate from './Pages/Donate.js'
import Policy from './Pages/Policy.js'
import Team from './Pages/Team.js'
import CelebrateRecovery from './Pages/CRpage.js'

//Components
import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js'
import ScrollToTop from './Components/ScrollToTop.js'
import Logistics from "./Pages/Logistics.js";
import AnimatedRoutes from "./Components/AnimatedRoutes.js";

function App() {
  return (
    <div className="App">
    <Router>
      <ScrollToTop />
      <Navbar />
        <AnimatedRoutes />
      <Footer />
    </Router>
    </div>
  );
}

export default App;


