import Link from "next/link";

export default function SportCard({ workout }) {
  const images = {
    kardio:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=90",

    running:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=90",

    kuch:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90",

    kuchish:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90",

    yoga:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=90",

    moslashuvchanlik:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=90",

    press:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=90",

    intensiv:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=90",

    default:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=90",
  };

  // "250 kcal" yoki 250 -> 250
  const toNumber = (value) =>
    parseInt(String(value ?? "").replace(/\D/g, ""), 10) || 0;

  const calories = toNumber(workout?.calories);
  const duration = toNumber(workout?.duration);

  const type = String(
    workout?.category || workout?.id || ""
  ).toLowerCase();

  const foundKey = Object.keys(images).find(
    (key) => key !== "default" && type.includes(key)
  );

  const image =
    workout?.image ||
    (foundKey ? images[foundKey] : images.default);

  return (
    <Link href="/workouts" className="sport-card">
      {/* IMAGE */}
      <div className="sport-photo-container">
        <img
          src={image}
          alt={workout.title}
          className="sport-img"
        />

        <div className="sport-overlay" />

        {/* TOP BADGES */}
        <div className="sport-top">
          <span className="sport-category">
            {workout.category || "SPORT"}
          </span>

          <span className="sport-calories">
            🔥 {calories} kcal
          </span>
        </div>

        {/* PLAY BUTTON */}
        <div className="sport-play">▶</div>

        {/* DURATION */}
        <div className="sport-duration">
          ⏱ {duration} min
        </div>
      </div>

      {/* CONTENT */}
      <div className="sport-content">
        <div className="sport-heading">
          <div className="sport-icon">
            {workout.icon || "🏋️"}
          </div>

          <div>
            <h3>{workout.title}</h3>

            <span className="sport-small-category">
              {workout.category || "Mashg‘ulot"}
            </span>
          </div>
        </div>

        <p>
          {workout.description ||
            "Sog‘lom va kuchli tana uchun samarali mashg‘ulot."}
        </p>

        {/* BOTTOM */}
        <div className="sport-bottom">
          <div className="sport-stat">
            <span>🔥</span>
            <div>
              <strong>{calories}</strong>
              <small>kcal</small>
            </div>
          </div>

          <div className="sport-stat">
            <span>⏱</span>
            <div>
              <strong>{duration}</strong>
              <small>min</small>
            </div>
          </div>

          <span className="sport-arrow">→</span>
        </div>
      </div>
    </Link>
  );
}