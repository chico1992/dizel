import { hot } from "react-hot-loader/root";
import React, { useState, useEffect } from "react";

import "./styles/App.css";
import { Dizel } from "./Dizel";

const App = () => {
    const [bgColor, setBgColor] = useState(255);

    useEffect(() => {
        console.log("effect ran");
        if (window.AmbientLightSensor) {
            const sensor = new AmbientLightSensor();

            sensor.addEventListener("activate", () => {
                console.log("Ready to report readings");
            });
            sensor.addEventListener("error", event => {
                console.error(event.error.message);
            });
            sensor.addEventListener("reading", () => {
                const illuminance = sensor.illuminance;
                console.log(illuminance);
                if (illuminance < 50) {
                    setBgColor(0);
                } else {
                    setBgColor(255);
                }
            });
            sensor.onreading = () => {
                console.log(sensor.illuminance);
            };
            sensor.start();
        }
    }, []);
    return (
        <div
            className="App"
            style={{
                backgroundColor: `rgb(${bgColor},${bgColor},${bgColor})`
            }}
        >
            <Dizel />
        </div>
    );
};

export default hot(App);
