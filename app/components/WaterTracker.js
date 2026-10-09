"use client";

import { useEffect, useState } from "react";

const GOAL = 2500;

export default function WaterTracker() {
  const [water, setWater] = useState(0);

  useEffect(() => {
    const saved =
      localStorage.getItem("waterToday");

    if (saved) {
      setWater(Number(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "waterToday",
      String(water)
    );
  }, [water]);

  const percent = Math.min(
    (water / GOAL) * 100,
    100
  );

  function addWater(amount) {
    setWater((prev) =>
      Math.min(prev + amount, GOAL)
    );
  }

  function resetWater() {
    setWater(0);
  }

  return (
    <div className="panel">

      <div className="panel-heading">

        <div>
          <span className="eyebrow">
            HYDRATION
          </span>

          <h2>
            Suv nazorati 💧
          </h2>
        </div>

        <strong>
          {water} / {GOAL} ml
        </strong>

      </div>

      <div className="water-progress">

        <div
          className="water-progress-fill"
          style={{
            width: `${percent}%`,
          }}
        />

      </div>

      <p>
        Bugungi maqsad:
        <strong> 2.5 litr</strong>
      </p>

      <div className="water-buttons">

        <button
          className="btn btn-primary"
          onClick={() => addWater(250)}
        >
          +250 ml
        </button>

        <button
          className="btn btn-light"
          onClick={() => addWater(500)}
        >
          +500 ml
        </button>

        <button
          className="btn btn-light"
          onClick={resetWater}
        >
          Reset
        </button>

      </div>

    </div>
  );
}