// import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//pages
import Home from './Pages/Home.js';
// import About from './Pages/About.js'
import Donate from './Pages/Donate.js'
import Minutes from './Pages/Minutes.js'
import Finance from './Pages/Finance.js'
import Policy from './Pages/Policy.js'
import Team from './Pages/Team.js'
import CelebrateRecovery from './Pages/CRpage.js'

//Components
import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js'
import ScrollToTop from './Components/ScrollToTop.js'

function App() {
  return (
    <div className="App">
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route exact path='/about' element={<About />} /> */}
        <Route exact path='/donate' element={<Donate />} />
        <Route exact path='/minutes' element={<Minutes/>} />
        <Route exact path='/finance' element={<Finance/>} />
        <Route exact path='/policy' element={<Policy/>} />
        <Route exact path='/team' element={<Team/>} />
        <Route exact path='/celebraterecovery' element={<CelebrateRecovery/>} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;


