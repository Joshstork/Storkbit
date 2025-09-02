//import React, { useEffect, useState, useRef } from "react";
//import Particles, { initParticlesEngine } from "@tsparticles/react";
//import { loadFull } from "tsparticles";
//import { FaAngleUp } from "react-icons/fa";
//import particlesOptions from "./particles.json";

import Home from "./components/Home/home";
import "./globals.css";

function App() {
    //const [init, setInit] = useState(false);

    return (
        <div className="App">
           
            <div className="knowBtn">
                <Home />

                <div className="flex items-center justify-center">
                    <span className="f3 tc no-underline inline-flex items-center ba br4 pointer animate__animated animate__zoomInUp">
                        <h3>Know more</h3>
                    </span>
                </div>
            </div>

        </div>
    );
}

export default App;