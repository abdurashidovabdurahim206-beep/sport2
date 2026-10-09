"use client";

import { useEffect, useState } from "react";

// "250 kcal" yoki 250 -> 250
const toNumber = (value) =>
  parseInt(String(value ?? "").replace(/\D/g, ""), 10) || 0;

export default function ActivityTracker() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    function loadHistory() {
      try {
        const saved = localStorage.getItem("workoutHistory");

        if (!saved) {
          setHistory([]);
          return;
        }

        const parsed = JSON.parse(saved);
        setHistory(Array.isArray(parsed) ? parsed : []);
      } catch {
        setHistory([]);
      }
    }

    loadHistory();

    // boshqa tabda o'zgarganda
    window.addEventListener("storage", loadHistory);
    // shu tabda mashq tugaganda
    window.addEventListener("workoutHistoryUpdated", loadHistory);

    return () => {
      window.removeEventListener("storage", loadHistory);
      window.removeEventListener("workoutHistoryUpdated", loadHistory);
    };
  }, []);

  const totalWorkouts = history.length;

  const totalCalories = history.reduce(
    (sum, item) => sum + toNumber(item?.calories),
    0
  );

  const totalMinutes = history.reduce(
    (sum, item) => sum + toNumber(item?.duration),
    0
  );

  return (
    <div className="panel">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">ACTIVITY</span>
          <h2>Faollik statistikasi</h2>
        </div>
      </div>

      <div className="activity-stats">
        <div>
          <span>🏋️</span>
          <strong>{totalWorkouts}</strong>
          <small>Mashg‘ulot</small>
        </div>

        <div>
          <span>🔥</span>
          <strong>{totalCalories}</strong>
          <small>kcal</small>
        </div>

        <div>
          <span>⏱</span>
          <strong>{totalMinutes}</strong>
          <small>daqiqa</small>
        </div>
      </div>

      <div className="activity-history">
        <h3>So‘nggi mashg‘ulotlar</h3>

        {history.length === 0 ? (
          <p className="empty-state">Hali mashg‘ulot bajarilmagan.</p>
        ) : (
          history
            .slice(-5)
            .reverse()
            .map((item, index) => (
              <div
                className="history-item"
                key={`${item?.date ?? "item"}-${index}`}
              >
                <div>
                  <strong>{item?.title || "Mashg‘ulot"}</strong>

                  <small>{toNumber(item?.duration)} daqiqa</small>
                </div>

                <span>🔥 {toNumber(item?.calories)}</span>
              </div>
            ))
        )}
      </div>
    </div>
  );
}