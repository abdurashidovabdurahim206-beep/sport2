"use client";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "Sportchi",
    age: 22,
    weight: 70,
    height: 175,
    goal: "Sog‘lom va faol hayot",
  });

  function update(field, value) {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  const bmi =
    profile.weight &&
    profile.height
      ? (
          Number(profile.weight) /
          ((Number(profile.height) / 100) ** 2)
        ).toFixed(1)
      : "--";

  return (
    <>
      <Navbar />

      <div className="page-bg">

        <div className="app-layout">

          <Sidebar />

          <main className="main-content">

            <div className="page-header">

              <div>
                <span className="eyebrow">
                  PERSONAL AREA
                </span>

                <h1>
                  Profil
                </h1>

                <p>
                  Shaxsiy ma’lumotlaringizni
                  boshqaring.
                </p>
              </div>

            </div>

            <div className="profile-card">

              <div className="profile-avatar">
                👤
              </div>

              <div className="profile-main">

                <h2>
                  {profile.name}
                </h2>

                <p>
                  {profile.goal}
                </p>

              </div>

            </div>

            <div className="panel">

              <div className="panel-heading">

                <div>
                  <span className="eyebrow">
                    PERSONAL DATA
                  </span>

                  <h2>
                    Ma’lumotlar
                  </h2>
                </div>

              </div>

              <div className="form-grid">

                <div className="field">

                  <label>
                    Ism
                  </label>

                  <input
                    value={profile.name}
                    onChange={(e) =>
                      update(
                        "name",
                        e.target.value
                      )
                    }
                  />

                </div>

                <div className="field">

                  <label>
                    Yosh
                  </label>

                  <input
                    type="number"
                    value={profile.age}
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
                    value={profile.weight}
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
                    value={profile.height}
                    onChange={(e) =>
                      update(
                        "height",
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>

            </div>

            <div className="dashboard-grid">

              <div className="dashboard-card">

                <div className="dashboard-icon">
                  ⚖️
                </div>

                <div className="dashboard-card-value">
                  {profile.weight}
                  <small>
                    kg
                  </small>
                </div>

                <h3>
                  Vazn
                </h3>

              </div>

              <div className="dashboard-card">

                <div className="dashboard-icon">
                  📏
                </div>

                <div className="dashboard-card-value">
                  {profile.height}
                  <small>
                    cm
                  </small>
                </div>

                <h3>
                  Bo‘y
                </h3>

              </div>

              <div className="dashboard-card">

                <div className="dashboard-icon">
                  ❤️
                </div>

                <div className="dashboard-card-value">
                  {bmi}
                </div>

                <h3>
                  BMI
                </h3>

              </div>

            </div>

          </main>

        </div>

      </div>
    </>
  );
}