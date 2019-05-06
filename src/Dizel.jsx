import { css } from "@emotion/core";
import React, { useRef } from "react";

import dizelAudio from "./static/dizel.aac";

export const Dizel = () => {
    const audioRef = useRef();
    const handleStart = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
            audioRef.current.loop = true;
            window.navigator.vibrate(1000);
        }
    };
    const handleStop = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.pause();
            window.navigator.vibrate(0);
        }
    };
    return (
        <>
            <h1
                css={css`
                    color: red;
                    font-size: 60px;
                    display: block;
                    transition-duration: 1s;

                    :hover {
                        transform: rotate(180deg);
                    }
                `}
                onMouseEnter={handleStart}
                onTouchStart={handleStart}
                onMouseLeave={handleStop}
                onTouchEnd={handleStop}
            >
                Dizel ?
            </h1>
            <audio ref={audioRef} src={dizelAudio} />
        </>
    );
};
