"use client";

import { useEffect, useState } from "react";

export default function GpsTracker() {
  const [tracking, setTracking] = useState(false);
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!tracking) return;

    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
      setDistance((prev) => prev + 0.01);
    }, 1000);

    return () => clearInterval(timer);
  }, [tracking]);

  const startTracking = () => {
    setTracking(true);
  };

  const stopTracking = () => {
    setTracking(false);
  };

  const resetTracking = () => {
    setTracking(false);
    setDistance(0);
    setTime(0);
  };

  return (
    <div className="gps-card">

      <div className="gps-icon">
        📍
      </div>

      <h3>Faoliyat kuzatuvchisi</h3>

      <p>
        Yurish yoki yugurish mashg'ulotingizni kuzating.
      </p>

      <div className="gps-stats">

        <div>
          <strong>{distance.toFixed(2)}</strong>
          <span>KM</span>
        </div>

        <div>
          <strong>{time}</strong>
          <span>SEC</span>
        </div>

        <div>
          <strong>{Math.round(distance * 60)}</strong>
          <span>KCAL</span>
        </div>

      </div>

      <div className="gps-buttons">

        {!tracking ? (
          <button
            onClick={startTracking}
            className="gps-start"
          >
            ▶ Boshlash
          </button>
        ) : (
          <button
            onClick={stopTracking}
            className="gps-stop"
          >
            ⏹ To'xtatish
          </button>
        )}

        <button
          onClick={resetTracking}
          className="gps-reset"
        >
          🔄 Tozalash
        </button>

      </div>

      <div className="gps-status">
        {tracking
          ? "🟢 Kuzatuv davom etmoqda..."
          : "⚪ Kuzatuv to'xtagan"}
      </div>

    </div>
  );
}