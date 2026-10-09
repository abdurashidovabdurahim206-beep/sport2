"use client";

import { useEffect, useState } from "react";
import { achievements } from "../data/achievements";

// "250 kcal" yoki 250 -> 250
const toNumber = (value) =>
  parseInt(String(value ?? "").replace(/\D/g, ""), 10) || 0;

export default function Achievement() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("workoutHistory");
      if (!saved) return;

      const parsed = JSON.parse(saved);
      setHistory(Array.isArray(parsed) ? parsed : []);
    } catch {
      setHistory([]);
    }
  }, []);

  const totalWorkouts = history.length;

  const totalCalories = history.reduce(
    (sum, item) => sum + toNumber(item?.calories),
    0
  );

  function getProgress(achievement) {
    if (String(achievement.id).includes("calories")) {
      return totalCalories;
    }

    return totalWorkouts;
  }

  return (
    <div className="panel">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">ACHIEVEMENTS</span>
          <h2>Yutuqlar 🏆</h2>
        </div>
      </div>

      <div className="achievement-grid">
        {achievements.map((achievement) => {
          const requirement = toNumber(achievement.requirement) || 1;
          const progress = getProgress(achievement);

          const completed = progress >= requirement;

          const percent = Math.min((progress / requirement) * 100, 100);

          return (
            <div
              key={achievement.id}
              className={completed ? "achievement done" : "achievement"}
            >
              <div className="achievement-icon">{achievement.icon}</div>

              <div className="achievement-content">
                <h3>{achievement.title}</h3>

                <p>{achievement.description}</p>

                <div className="achievement-progress">
                  <div style={{ width: `${percent}%` }} />
                </div>

                <small>
                  {Math.min(progress, requirement)}/{requirement}
                </small>
              </div>

              <span className="achievement-status">
                {completed ? "✓" : "🔒"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}