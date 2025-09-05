'use client'
import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ISourceOptions } from '@tsparticles/engine'
import { loadFull } from "tsparticles";
import { particleOptions } from "./particle-options";

import Home from "./components/Home/home";
import Links from "./components/Links/links";

import "./globals.css";

function App() {
    
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options : ISourceOptions = useMemo(
    () => ( particleOptions ), []);
    return (
        <div className="App">
            
            {init && <Particles options={options} />}
        
            <Home />
            <Links />
        </div>
    );
}

export default App;