import React, { useRef } from "react";

import dizelAudio from "./static/dizel.aac";

export const Dizel = () => {
    const audioRef = useRef();
    const handleStart = () => {
        audioRef.current.play();
        audioRef.current.loop = true;
        window.navigator.vibrate(1000);
        console.log(audioRef);
    };
    const handleStop = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.pause();
        // audioRef.currentTime = 0;
        window.navigator.vibrate(0);
        console.log(audioRef);
    };
    console.log(audioRef);
    return (
        <>
            <h1
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
