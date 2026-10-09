import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CalorieEngine from "../components/CalorieEngine";

export default function CaloriesPage() {
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
                  SMART CALCULATOR
                </span>

                <h1>
                  Kaloriya
                </h1>

                <p>
                  Kunlik energiya ehtiyojingizni
                  hisoblang.
                </p>
              </div>

              <div className="date-badge">
                🔥 Calorie Engine
              </div>

            </div>

            <CalorieEngine />

          </main>

        </div>
      </div>
    </>
  );
}