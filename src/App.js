import { hot } from "react-hot-loader/root";
import React from "react";

import "./styles/App.css";
import { Dizel } from "./Dizel";

const App = () => (
    <div className="App">
        <Dizel />
    </div>
);

export default hot(App);
