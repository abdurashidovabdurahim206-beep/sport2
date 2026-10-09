"use client";

import { useEffect, useState } from "react";

export default function WorkoutTimer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  function format(value) {
    return String(value).padStart(2, "0");
  }

  function reset() {
    setRunning(false);
    setSeconds(0);
  }

  return (
    <div className="panel">

      <div className="panel-heading">
        <div>
          <span className="eyebrow">
            WORKOUT TIMER
          </span>

          <h2>
            Mashg‘ulot vaqti
          </h2>
        </div>
      </div>

      <div className="timer">

        {format(minutes)}:{format(secs)}

      </div>

      <div className="player-controls">

        <button
          className="btn btn-primary"
          onClick={() =>
            setRunning(!running)
          }
        >
          {running ? "⏸ Pauza" : "▶ Boshlash"}
        </button>

        <button
          className="btn btn-light"
          onClick={reset}
        >
          ↻ Reset
        </button>

      </div>

    </div>
  );
}