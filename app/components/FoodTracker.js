"use client";

import { useEffect, useMemo, useState } from "react";
import { foods } from "../data/foods";

export default function FoodTracker() {
  const [selectedId, setSelectedId] = useState(
    foods[0]?.id || ""
  );

  const [todayFoods, setTodayFoods] = useState([]);

  useEffect(() => {
    const saved =
      localStorage.getItem("foodToday");

    if (saved) {
      try {
        setTodayFoods(JSON.parse(saved));
      } catch {
        setTodayFoods([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "foodToday",
      JSON.stringify(todayFoods)
    );
  }, [todayFoods]);

  const totals = useMemo(() => {
    return todayFoods.reduce(
      (total, food) => ({
        calories:
          total.calories + Number(food.calories || 0),

        protein:
          total.protein + Number(food.protein || 0),

        carbs:
          total.carbs + Number(food.carbs || 0),

        fat:
          total.fat + Number(food.fat || 0),
      }),
      {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
      }
    );
  }, [todayFoods]);

  function addFood() {
    const food = foods.find(
      (item) => item.id === Number(selectedId)
    );

    if (!food) return;

    setTodayFoods((prev) => [
      ...prev,
      {
        ...food,
        uniqueId:
          Date.now() +
          Math.random(),
      },
    ]);
  }

  function removeFood(uniqueId) {
    setTodayFoods((prev) =>
      prev.filter(
        (food) =>
          food.uniqueId !== uniqueId
      )
    );
  }

  function clearFoods() {
    setTodayFoods([]);
  }

  return (
    <div className="panel">

      <div className="panel-heading">

        <div>
          <span className="eyebrow">
            NUTRITION
          </span>

          <h2>
            Bugungi ovqatlar 🥗
          </h2>
        </div>

        <strong>
          {Math.round(totals.calories)} kcal
        </strong>

      </div>

      <div className="food-controls">

        <select
          value={selectedId}
          onChange={(e) =>
            setSelectedId(e.target.value)
          }
        >
          {foods.map((food) => (
            <option
              key={food.id}
              value={food.id}
            >
              {food.name} — {food.calories} kcal
            </option>
          ))}
        </select>

        <button
          className="btn btn-primary"
          onClick={addFood}
        >
          + Qo‘shish
        </button>

      </div>

      <div className="nutrition-summary">

        <div>
          <strong>
            {Math.round(totals.calories)}
          </strong>
          <span>Kaloriya</span>
        </div>

        <div>
          <strong>
            {totals.protein.toFixed(1)}g
          </strong>
          <span>Protein</span>
        </div>

        <div>
          <strong>
            {totals.carbs.toFixed(1)}g
          </strong>
          <span>Uglevod</span>
        </div>

        <div>
          <strong>
            {totals.fat.toFixed(1)}g
          </strong>
          <span>Yog‘</span>
        </div>

      </div>

      <div className="food-list">

        {todayFoods.length === 0 ? (
          <div className="empty-state">
            Hali ovqat qo‘shilmagan.
          </div>
        ) : (
          todayFoods.map((food) => (
            <div
              className="food-item"
              key={food.uniqueId}
            >
              <div>
                <strong>
                  {food.name}
                </strong>

                <small>
                  {food.serving}
                </small>
              </div>

              <span>
                {food.calories} kcal
              </span>

              <button
                onClick={() =>
                  removeFood(food.uniqueId)
                }
              >
                ×
              </button>
            </div>
          ))
        )}

      </div>

      {todayFoods.length > 0 && (
        <button
          className="btn btn-light"
          onClick={clearFoods}
        >
          Barchasini tozalash
        </button>
      )}

    </div>
  );
}