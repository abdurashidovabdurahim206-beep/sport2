"use client";

import { useEffect, useState, useMemo } from "react";

export default function ProgressChart() {
  const [history, setHistory] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Označimo, da se nahajamo na odjemalcu
  useEffect(() => {
    setIsClient(true);

    function loadHistory() {
      const saved = localStorage.getItem("workoutHistory");
      if (!saved) {
        setHistory([]);
        return;
      }
      try {
        setHistory(JSON.parse(saved));
      } catch {
        setHistory([]);
      }
    }

    loadHistory();
    window.addEventListener("storage", loadHistory);

    return () => {
      window.removeEventListener("storage", loadHistory);
    };
  }, []);

  const days = useMemo(() => {
    const result = [];

    // Če še nismo na odjemalcu, vrnemo prazno polje ali privzete vrednosti,
    // da preprečimo neskladje pri hidraciji (hydration mismatch).
    if (!isClient) return result;

    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);

      const key = date.toISOString().slice(0, 10);

      const dayItems = history.filter((item) => {
        if (!item.date) return false;
        return String(item.date).startsWith(key);
      });

      const calories = dayItems.reduce(
        (sum, item) => sum + Number(item.calories || 0),
        0
      );

      result.push({
        key,
        label: date.toLocaleDateString("uz-UZ", {
          weekday: "short",
        }),
        calories,
      });
    }

    return result;
  }, [history, isClient]);

  const maxCalories = Math.max(
    ...days.map((day) => day.calories),
    100
  );

  return (
    <div className="panel">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">PROGRESS</span>
          <h2>Oxirgi 7 kun</h2>
        </div>
        <span>🔥 Kaloriya</span>
      </div>

      <div className="chart">
        {days.map((day) => {
          const height =
            day.calories > 0
              ? Math.max(
                  (day.calories / maxCalories) * 100,
                  8
                )
              : 5;

          return (
            <div className="bar-wrap" key={day.key}>
              <span className="bar-value">
                {day.calories}
              </span>
              <div className="bar-container">
                <div
                  className="bar"
                  style={{
                    height: `${height}%`,
                  }}
                />
              </div>
              <span className="bar-label">
                {day.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}