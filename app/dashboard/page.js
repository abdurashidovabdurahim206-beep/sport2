"use client";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import ActivityTracker from "../components/ActivityTracker";
import WaterTracker from "../components/WaterTracker";
import ProgressChart from "../components/ProgressChart";

export default function DashboardPage() {
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
                  SOG‘LOM HAYOT
                </span>

                <h1>
                  Dashboard
                </h1>

                <p>
                  Bugungi natijalaringizni
                  bir joyda kuzating.
                </p>
              </div>

              <div className="date-badge">
                📅 Bugun
              </div>

            </div>

            <div className="dashboard-grid">

              <DashboardCard
                icon="🔥"
                title="Kaloriya"
                value="350"
                unit="kcal"
                description="Bugungi maqsad"
              />

              <DashboardCard
                icon="🏃"
                title="Mashg‘ulot"
                value="1"
                unit="ta"
                description="Bugungi faoliyat"
              />

              <DashboardCard
                icon="💧"
                title="Suv"
                value="2.5"
                unit="L"
                description="Kunlik maqsad"
              />

              <DashboardCard
                icon="🏆"
                title="Streak"
                value="7"
                unit="kun"
                description="Ketma-ketlik"
              />

            </div>

            <div className="dashboard-columns">

              <ActivityTracker />

              <WaterTracker />

            </div>

            <ProgressChart />

          </main>

        </div>

      </div>
    </>
  );
}