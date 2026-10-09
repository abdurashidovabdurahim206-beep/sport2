import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import WorkoutCard from "../components/WorkoutCard";
import Footer from "../components/Footer";
import { workouts } from "../data/workouts";

export default function WorkoutsPage() {
  return (
    <>
      <Navbar />

      <main className="section shell" style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-heading" style={{ marginBottom: "24px" }}>
          <div>
            <span className="eyebrow" style={{ color: "#137333", fontWeight: "600", fontSize: "14px" }}>MASHG‘ULOTlar</span>
            <h2 style={{ fontSize: "28px", fontWeight: "bold", marginTop: "4px" }}>
              Barcha mashg‘ulotlar
            </h2>
          </div>
        </div>

        {/* Asosiy qism: Sidebar chapda, Kartalar o'ngda setka bo'lib turadi */}
        <div style={{ display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}>
          
          {/* Sidebar qismi */}
          <div style={{ flex: "0 0 265px", minWidth: "240px" }}>
            <Sidebar />
          </div>

          {/* Kartalar grid qismi */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px", flex: "1" }}>
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}