"use client";
import Link from "next/link";

export default function WorkoutCard({ workout }) {
  if (!workout) return null;

  return (
    <Link href={`/workouts/${workout.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="workout-card" style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", cursor: "pointer", transition: "0.3s" }}>
        {workout.image && (
          <img src={workout.image} alt={workout.title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
        )}
        <div style={{ padding: "16px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>{workout.title}</h3>
          <p style={{ color: "#666", fontSize: "14px", marginBottom: "12px" }}>{workout.description}</p>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#444" }}>
            <span>⏱ {workout.duration}</span>
            <span>⭐ {workout.level}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}