'use client'
import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ISourceOptions } from '@tsparticles/engine'
import { loadFull } from "tsparticles";
import { particleOptions } from "./particle-options";
//import particlesOptions from "./particles.json";


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

    const options: ISourceOptions = useMemo(
    () => (
        {
        background: {
            color: {
                value: "#110320ff",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                resize: {
                    enable: true
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 20,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }

  ),
    [],
  );
    return (
        <div className="App">
            
            {init && <Particles options={options} />}
        
            <Home />
            <Links />
        </div>
    );
}

export default App;