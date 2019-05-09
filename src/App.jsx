import css from "@emotion/css";
import { hot } from "react-hot-loader/root";
import React from "react";

import { Dizel } from "./Dizel";

const App = () => {
    return (
        <div
            css={css`
                position: fixed;
                top: 50vh;
                left: 50vw;
                transform: translate(-50%, -50%);
            `}
        >
            <Dizel />
        </div>
    );
};

export default hot(App);
