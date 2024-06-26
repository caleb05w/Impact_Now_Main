// import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";


//pages
import Home from '../Pages/Home.js';
// import About from './Pages/About.js'
import Donate from '../Pages/Donate.js'
import Policy from '../Pages/Policy.js'
import Team from '../Pages/Team.js'
import CelebrateRecovery from '../Pages/CRpage.js'

//Componentsd
import Logistics from "../Pages/Logistics.js";

import { AnimatePresence } from "framer-motion";
import ShalomHouse from "../Pages/ShalomHouse.js";
import WiserWithAge from "../Pages/WiserWithAge.js";
import MealsOnWheels from "../Pages/MealsOnWheels.js";

import testing from '../Pages/testing.js'

function AnimatedRoutes() {

const location = useLocation();
  return (
    <AnimatePresence mode="wait">
        
        <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Home />} />
            {/* <Route exact path='/about' element={<About />} /> */}
            <Route exact path='/donate' element={<Donate />} />
            <Route exact path='/Logistics' element={<Logistics/>} />
            <Route exact path='/policy' element={<Policy/>} />
            <Route exact path='/team' element={<Team/>} />
            <Route exact path='/celebraterecovery' element={<CelebrateRecovery/>} />
            <Route exact path='/NepalShalomHouse' element={<ShalomHouse/>} />
            <Route exact path='/WiserWithAge' element={<WiserWithAge/>} />
            <Route exact path='/MealsOnWheels' element={<MealsOnWheels/>} />
        </Routes>
        
    </AnimatePresence>
  )
}

export default AnimatedRoutes
