"use client";

import { useEffect, useState } from "react";

function distance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function GpsTracker() {
  const [tracking, setTracking] = useState(false);
  const [coords, setCoords] = useState(null);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!tracking) return;

    if (!navigator.geolocation) {
      setError("Brauzeringiz GPS funksiyasini qo‘llab-quvvatlamaydi.");
      return;
    }

    let previous = null;

    const watch = navigator.geolocation.watchPosition(
      (position) => {
        const current = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };

        if (previous) {
          const d = distance(
            previous.lat,
            previous.lon,
            current.lat,
            current.lon
          );

          if (d < 0.1) {
            setTotal((old) => old + d);
          }
        }

        previous = current;
        setCoords(current);
        setError("");
      },
      () => {
        setError("GPS ruxsatini bering.");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
      }
    );

    return () => navigator.geolocation.clearWatch(watch);
  }, [tracking]);

  function reset() {
    setTotal(0);
    setCoords(null);
    setTracking(false);
  }

  return (
    <div className="gps-card">
      <div className="section-heading">
        <div>
          <span className="eyebrow">GPS ACTIVITY</span>
          <h2>Masofa kuzatuvchisi</h2>
        </div>

        <span className={tracking ? "gps-live" : "gps-icon"}>●</span>
      </div>

      <div className="gps-distance">
        <strong>{total.toFixed(2)}</strong>
        <span>km</span>
      </div>

      <p>
        {coords
          ? `GPS: ${coords.lat.toFixed(5)}, ${coords.lon.toFixed(5)}`
          : "Joylashuvingiz kuzatilmayapti"}
      </p>

      {error && <div className="error-message">{error}</div>}

      <div className="gps-actions">
        {!tracking ? (
          <button className="primary-button" onClick={() => setTracking(true)}>
            📍 Kuzatishni boshlash
          </button>
        ) : (
          <button className="danger-button" onClick={() => setTracking(false)}>
            ■ To‘xtatish
          </button>
        )}

        <button onClick={reset}>↺</button>
      </div>
    </div>
  );
}