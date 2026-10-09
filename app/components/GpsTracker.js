"use client";

import { useEffect, useRef, useState } from "react";

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  const c =
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    );

  return R * c;
}

export default function GpsTracker() {
  const [tracking, setTracking] = useState(false);
  const [distance, setDistance] = useState(0);
  const [position, setPosition] = useState(null);
  const [error, setError] = useState("");

  const watchId = useRef(null);
  const lastPosition = useRef(null);

  useEffect(() => {
    return () => {
      if (watchId.current !== null) {
        navigator.geolocation.clearWatch(
          watchId.current
        );
      }
    };
  }, []);

  function startTracking() {
    setError("");

    if (!navigator.geolocation) {
      setError(
        "Brauzeringiz GPS funksiyasini qo‘llab-quvvatlamaydi."
      );
      return;
    }

    setTracking(true);

    watchId.current =
      navigator.geolocation.watchPosition(
        (location) => {
          const lat =
            location.coords.latitude;

          const lng =
            location.coords.longitude;

          const current = {
            lat,
            lng,
          };

          setPosition(current);

          if (lastPosition.current) {
            const extraDistance =
              calculateDistance(
                lastPosition.current.lat,
                lastPosition.current.lng,
                lat,
                lng
              );

            if (extraDistance < 0.2) {
              setDistance(
                (prev) =>
                  prev + extraDistance
              );
            }
          }

          lastPosition.current = current;
        },

        () => {
          setError(
            "GPS ruxsati berilmadi yoki joylashuvni aniqlab bo‘lmadi."
          );

          setTracking(false);
        },

        {
          enableHighAccuracy: true,
          maximumAge: 5000,
          timeout: 10000,
        }
      );
  }

  function stopTracking() {
    if (watchId.current !== null) {
      navigator.geolocation.clearWatch(
        watchId.current
      );

      watchId.current = null;
    }

    setTracking(false);
  }

  function resetTracking() {
    stopTracking();

    setDistance(0);
    setPosition(null);
    lastPosition.current = null;
    setError("");
  }

  return (
    <div className="panel gps-card">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">
            GPS ACTIVITY
          </span>

          <h2>Masofa kuzatuvchisi</h2>
        </div>

        <span className="gps-icon">
          📍
        </span>
      </div>

      <div className="map-box">
        <div className="gps-center">
          📍
        </div>

        <div className="gps-rings">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <strong>
          {tracking
            ? "GPS kuzatilmoqda..."
            : "GPS tayyor"}
        </strong>
      </div>

      <div className="gps-stats">
        <div>
          <strong>
            {distance.toFixed(2)}
          </strong>

          <span>km</span>
        </div>

        <div>
          <strong>
            {position
              ? position.lat.toFixed(4)
              : "--"}
          </strong>

          <span>latitude</span>
        </div>

        <div>
          <strong>
            {position
              ? position.lng.toFixed(4)
              : "--"}
          </strong>

          <span>longitude</span>
        </div>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="player-controls">
        {!tracking ? (
          <button
            className="btn btn-primary"
            onClick={startTracking}
          >
            📍 Kuzatishni boshlash
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={stopTracking}
          >
            ⏹ To‘xtatish
          </button>
        )}

        <button
          className="btn btn-light"
          onClick={resetTracking}
        >
          ↻ Reset
        </button>
      </div>
    </div>
  );
}