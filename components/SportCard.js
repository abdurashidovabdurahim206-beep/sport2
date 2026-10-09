import Link from "next/link";

export default function SportCard({ workout }) {
  // Har bir sport turi uchun maxsus va noyob Unsplash rasmlari
  const images = {
    kardio: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=90",
    running: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=90",
    kuch: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=90",
    kuchish: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=90",
    yoga: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=90",
    moslashuvchanlik: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=90",
    press: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=90",
    intensiv: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=90",
    hiit: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=90",
    boks: "https://images.unsplash.com/photo-1517649763962-0c6232660d02?auto=format&fit=crop&w=1000&q=90",
    default: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=90"
  };

  // Kategoriya yoki id nomini tozalab kichik harfga o'tkazamiz
  const type = (workout.category || workout.id || "").toLowerCase();

  // Mos rasmni qidirib topamiz
  let image = workout.image;
  if (!image) {
    const foundKey = Object.keys(images).find((key) => type.includes(key));
    image = foundKey ? images[foundKey] : images.default;
  }

  return (
    <Link href={`/workouts/${workout.id}`} className="sport-card">
      <div
        className="sport-photo"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      />
      <div className="sport-overlay" />
      <div className="sport-content">
        <div className="sport-icon">{workout.icon}</div>
        <span className="tag">{workout.category}</span>
        <h3>{workout.title}</h3>
        <p>{workout.description}</p>
        <div className="sport-info">
          <span>🔥 {workout.calories} kcal</span>
          <span>⏱ {workout.duration} min</span>
        </div>
      </div>
    </Link>
  );
}