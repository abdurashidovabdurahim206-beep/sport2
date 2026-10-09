import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FoodTracker from "../components/FoodTracker";

export default function NutritionPage() {
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
                  NUTRITION
                </span>

                <h1>
                  Ovqatlanish
                </h1>

                <p>
                  Bugungi ovqatlaringizni
                  nazorat qiling.
                </p>
              </div>

              <div className="date-badge">
                🥗 Healthy Food
              </div>

            </div>

            <FoodTracker />

          </main>

        </div>

      </div>
    </>
  );
}