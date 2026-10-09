"use client";

import { useEffect, useState } from "react";

export default function WorkoutTimer() {
  const [seconds, setSeconds] = useState(60);
  const [running, setRunning] = useState(false);
  const [duration, setDuration] = useState(60);

  useEffect(() => {
    if (!running) return;

    if (seconds <= 0) {
      setRunning(false);
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running, seconds]);

  const startTimer = () => {
    if (seconds > 0) {
      setRunning(true);
    }
  };

  const pauseTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setSeconds(duration);
  };

  const changeDuration = (value) => {
    const newDuration = Number(value);

    setDuration(newDuration);
    setSeconds(newDuration);
    setRunning(false);
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="timer-card">

      <div className="timer-icon">
        ⏱️
      </div>

      <h3>Mashg'ulot taymeri</h3>

      <div className="timer-display">
        {String(minutes).padStart(2, "0")}:
        {String(remainingSeconds).padStart(2, "0")}
      </div>

      <div className="timer-select">

        <label>Vaqtni tanlang:</label>

        <select
          value={duration}
          onChange={(e) => changeDuration(e.target.value)}
          disabled={running}
        >
          <option value="30">30 soniya</option>
          <option value="60">1 daqiqa</option>
          <option value="120">2 daqiqa</option>
          <option value="300">5 daqiqa</option>
          <option value="600">10 daqiqa</option>
        </select>

      </div>

      <div className="timer-buttons">

        {!running ? (
          <button
            onClick={startTimer}
            className="timer-start"
          >
            ▶ Boshlash
          </button>
        ) : (
          <button
            onClick={pauseTimer}
            className="timer-pause"
          >
            ⏸ Pauza
          </button>
        )}

        <button
          onClick={resetTimer}
          className="timer-reset"
        >
          🔄
        </button>

      </div>

      <p className="timer-status">
        {seconds === 0
          ? "🎉 Mashg'ulot tugadi!"
          : running
          ? "🔥 Mashg'ulot davom etmoqda..."
          : "💪 Boshlashga tayyor"}
      </p>

    </div>
  );
}