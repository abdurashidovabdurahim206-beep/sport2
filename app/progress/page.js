import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProgressChart from "../components/ProgressChart";
import Achievement from "../components/Achievement";
import GpsTracker from "../components/GpsTracker";

export default function ProgressPage() {
  return (
    <>
      <Navbar />

      <div className="page-bg">
        <div className="app-layout">
          <Sidebar />

          <main className="main-content">
            <div className="page-header">
              <div>
                <span className="eyebrow">YOUR JOURNEY</span>

                <h1>Progress</h1>

                <p>
                  Natijalaringizni kuzating va yangi maqsadlar qo‘ying.
                </p>
              </div>

              <div className="date-badge">
                📈 Statistikalar
              </div>
            </div>

            <div className="progress-content">
              <ProgressChart />

              <Achievement />

              <GpsTracker />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}