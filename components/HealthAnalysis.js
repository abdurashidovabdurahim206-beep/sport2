"use client";

import { useState } from "react";

export default function HealthAnalysis() {
  const [form, setForm] = useState({
    age: 22,
    weight: 70,
    height: 175,
  });

  function changeValue(field, value) {
    setForm((old) => ({
      ...old,
      [field]: value,
    }));
  }

  const age = Number(form.age);
  const weight = Number(form.weight);
  const height = Number(form.height);

  let bmi = 0;

  if (weight > 0 && height > 0) {
    bmi = weight / ((height / 100) ** 2);
  }

  const bmiValue =
    bmi > 0 ? bmi.toFixed(1) : "--";

  let status = "Ma’lumot kiriting";

  if (bmi > 0 && bmi < 18.5) {
    status = "Ozgin";
  } else if (bmi >= 18.5 && bmi < 25) {
    status = "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    status = "Ortiqcha vazn";
  } else if (bmi >= 30) {
    status = "Yuqori BMI";
  }

  return (
    <section className="health-section">

      <div className="shell health-wrap">

        <div>

          <span className="eyebrow">
            SMART HEALTH ANALYSIS
          </span>

          <h2>
            Sog‘lig‘ingizni
            <br />
            tushuning.
          </h2>

          <p>
            Yosh, bo‘y va vazningizni kiriting.
            Tizim BMI ko‘rsatkichini hisoblab,
            umumiy yo‘nalish beradi.
          </p>

          <p>
            <small>
              * Bu tibbiy tashxis emas.
            </small>
          </p>

        </div>

        <div className="health-box">

          <div className="form-grid">

            <div className="field">
              <label>
                Yosh
              </label>

              <input
                type="number"
                value={form.age}
                onChange={(e) =>
                  changeValue(
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
                  changeValue(
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
                  changeValue(
                    "height",
                    e.target.value
                  )
                }
              />
            </div>

          </div>

          <div className="result">

            <span>
              Sizning BMI
            </span>

            <br />

            <strong>
              {bmiValue}
            </strong>

            <div>
              {status}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}