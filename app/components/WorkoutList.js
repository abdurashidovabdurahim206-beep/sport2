"use client";
import Link from "next/link";

export default function WorkoutList({ workouts }) {
  if (!workouts || workouts.length === 0) {
    return <p>Hozircha mashg‘ulotlar mavjud emas.</p>;
  }

  return (
    <div className="sport-grid">
      {workouts.map((workout) => (
        <Link 
          href={`/workouts/${workout.id}`} 
          key={workout.id} 
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div 
            className="workout-card" 
            style={{ 
              background: "#fff", 
              borderRadius: "12px", 
              overflow: "hidden", 
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)", 
              paddingBottom: "16px", 
              transition: "transform 0.3s ease, box-shadow 0.3s ease", 
              cursor: "pointer" 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
            }}
          >
            {workout.image && (
              <img 
                src={workout.image} 
                alt={workout.title} 
                style={{ width: "100%", height: "160px", objectFit: "cover", marginBottom: "12px" }} 
              />
            )}
            <div style={{ padding: "0 16px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>{workout.title}</h3>
              <p style={{ color: "#666", fontSize: "14px", marginBottom: "4px" }}>Davomiyligi: {workout.duration}</p>
              <p style={{ color: "#666", fontSize: "14px" }}>Darajasi: {workout.level}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}