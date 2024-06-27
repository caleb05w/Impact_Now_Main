// import './App.css';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


//Components
import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js'
import ScrollToTop from './Components/ScrollToTop.js'
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


