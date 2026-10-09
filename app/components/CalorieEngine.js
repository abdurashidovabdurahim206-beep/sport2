"use client";

import { useMemo, useState } from "react";

export default function CalorieEngine() {
  const [form, setForm] = useState({
    gender: "male",
    age: 22,
    weight: 70,
    height: 175,
    activity: 1.55,
    goal: "maintain",
  });

  function update(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  const result = useMemo(() => {
    const age = Number(form.age);
    const weight = Number(form.weight);
    const height = Number(form.height);
    const activity = Number(
      form.activity
    );

    if (
      age <= 0 ||
      weight <= 0 ||
      height <= 0
    ) {
      return null;
    }

    let bmr;

    if (form.gender === "male") {
      bmr =
        10 * weight +
        6.25 * height -
        5 * age +
        5;
    } else {
      bmr =
        10 * weight +
        6.25 * height -
        5 * age -
        161;
    }

    const tdee =
      bmr * activity;

    let calories = tdee;

    if (form.goal === "lose") {
      calories -= 400;
    }

    if (form.goal === "gain") {
      calories += 300;
    }

    const bmi =
      weight /
      ((height / 100) ** 2);

    const protein =
      weight * 1.6;

    const water =
      weight * 35;

    return {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      calories: Math.round(calories),
      bmi: bmi.toFixed(1),
      protein: Math.round(protein),
      water: Math.round(water),
    };
  }, [form]);

  return (
    <div className="panel">

      <div className="panel-heading">

        <div>
          <span className="eyebrow">
            CALORIE ENGINE
          </span>

          <h2>
            Kunlik kaloriya hisoblash 🔥
          </h2>
        </div>

      </div>

      <div className="form-grid">

        <div className="field">

          <label>
            Jins
          </label>

          <select
            value={form.gender}
            onChange={(e) =>
              update(
                "gender",
                e.target.value
              )
            }
          >
            <option value="male">
              Erkak
            </option>

            <option value="female">
              Ayol
            </option>
          </select>

        </div>

        <div className="field">

          <label>
            Yosh
          </label>

          <input
            type="number"
            value={form.age}
            onChange={(e) =>
              update(
                "age",
                e.target.value
              )
            }
          />

        </div>

        <div className="field">

          <label>
            Vazn (kg)
          </label>

          <input
            type="number"
            value={form.weight}
            onChange={(e) =>
              update(
                "weight",
                e.target.value
              )
            }
          />

        </div>

        <div className="field">

          <label>
            Bo‘y (cm)
          </label>

          <input
            type="number"
            value={form.height}
            onChange={(e) =>
              update(
                "height",
                e.target.value
              )
            }
          />

        </div>

        <div className="field">

          <label>
            Faollik
          </label>

          <select
            value={form.activity}
            onChange={(e) =>
              update(
                "activity",
                e.target.value
              )
            }
          >
            <option value="1.2">
              Kam harakat
            </option>

            <option value="1.375">
              Yengil faol
            </option>

            <option value="1.55">
              O‘rtacha faol
            </option>

            <option value="1.725">
              Juda faol
            </option>

            <option value="1.9">
              Juda yuqori faol
            </option>

          </select>

        </div>

        <div className="field">

          <label>
            Maqsad
          </label>

          <select
            value={form.goal}
            onChange={(e) =>
              update(
                "goal",
                e.target.value
              )
            }
          >

            <option value="lose">
              Vazn kamaytirish
            </option>

            <option value="maintain">
              Vaznni saqlash
            </option>

            <option value="gain">
              Vazn olish
            </option>

          </select>

        </div>

      </div>

      {result && (
        <div className="result">

          <div className="nutrition-summary">

            <div>
              <strong>
                {result.calories}
              </strong>

              <span>
                Tavsiya kcal
              </span>
            </div>

            <div>
              <strong>
                {result.bmr}
              </strong>

              <span>
                BMR
              </span>
            </div>

            <div>
              <strong>
                {result.tdee}
              </strong>

              <span>
                TDEE
              </span>
            </div>

            <div>
              <strong>
                {result.bmi}
              </strong>

              <span>
                BMI
              </span>
            </div>

          </div>

          <div className="calorie-extra">

            <p>
              🥩 Protein:
              <strong>
                {" "}
                {result.protein} g
              </strong>
            </p>

            <p>
              💧 Suv:
              <strong>
                {" "}
                {result.water} ml
              </strong>
            </p>

          </div>

        </div>
      )}

    </div>
  );
}