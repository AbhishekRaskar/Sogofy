import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let interval;

    if (flag) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!flag && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [flag, seconds]);

  const handleStart = () => {
    setFlag(true);
  };

  const handlePause = () => {
    setFlag(false);
  };

  const handleStop = () => {
    setFlag(false);
    setSeconds(0);
  };

  const handleReset = () => {
    setSeconds(0);
    setFlag(false);
  };

  return (
    <div>
      <h1>{seconds} : Seconds </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
