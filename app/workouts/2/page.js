"use client";
import { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function WorkoutTwoPage() {
  const workout = {
    id: "2",
    title: "Kuch Mashqlari",
    duration: "45 min",
    level: "Qiyin",
    description: "Mushak massasini oshirish va tanani baquvvat qilish uchun intensiv kuch mashqlari.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60"
  };

  const [currentSet, setCurrentSet] = useState(1);
  const totalSets = 3;
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [isResting, setIsResting] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      if (!isResting && currentSet < totalSets) {
        setIsResting(true);
        setTimeLeft(10);
      } else {
        setIsActive(false);
        setIsResting(false);
      }
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft, isResting, currentSet]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleReset = () => { setIsActive(false); setIsResting(false); setCurrentSet(1); setTimeLeft(30); };
  const nextSet = () => { if (currentSet < totalSets) { setCurrentSet(currentSet + 1); setTimeLeft(30); setIsResting(false); setIsActive(false); } };

  return (
    <>
      <Navbar />
      <main className="section shell" style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
          <img src={workout.image} alt={workout.title} style={{ width: "100%", height: "320px", objectFit: "cover" }} />
          <div style={{ padding: "30px" }}>
            <span style={{ background: "#fce8e6", color: "#c5221f", padding: "6px 12px", borderRadius: "20px", fontSize: "14px", fontWeight: "600" }}>{workout.level}</span>
            <h1 style={{ fontSize: "30px", margin: "15px 0 10px" }}>{workout.title}</h1>
            <p style={{ color: "#555", fontSize: "16px", marginBottom: "20px", lineHeight: "1.5" }}>{workout.description}</p>
            <div style={{ background: "#f8f9fa", padding: "24px", borderRadius: "12px", textAlign: "center", border: "1px solid #eee" }}>
              <h3 style={{ marginBottom: "10px", color: isResting ? "#d93025" : "#1a73e8" }}>{isResting ? "☕ Dam olish (Pauza)" : `Set: ${currentSet} / ${totalSets}`}</h3>
              <div style={{ fontSize: "52px", fontWeight: "bold", margin: "15px 0", color: "#333" }}>00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</div>
              <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
                {!isActive ? <button onClick={handleStart} style={{ background: "#34a853", color: "#fff", border: "none", padding: "12px 26px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>Boshlash</button> : <button onClick={handlePause} style={{ background: "#fbbc05", color: "#fff", border: "none", padding: "12px 26px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>Pauza</button>}
                <button onClick={handleReset} style={{ background: "#ea4335", color: "#fff", border: "none", padding: "12px 26px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>Reset</button>
                {currentSet < totalSets && <button onClick={nextSet} style={{ background: "#1a73e8", color: "#fff", border: "none", padding: "12px 26px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>Keyingi Set</button>}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}