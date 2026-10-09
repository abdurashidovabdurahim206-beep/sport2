import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">

        <div className="hero-content">
          <span className="eyebrow">
            SOG‘LOM HAYOT • SPORT & HEALTH
          </span>

          <h1>
            Tanangni
            <br />
            <span>kuchaytir.</span>
            <br />
            Hayotingni o‘zgartir.
          </h1>

          <p>
            Mashg‘ulot, ovqatlanish, kaloriya va kundalik
            progressni bitta zamonaviy platformada boshqaring.
          </p>

          <div className="hero-actions">
            <Link href="/workouts" className="btn btn-primary">
              Mashqni boshlash →
            </Link>

            <Link href="/dashboard" className="btn btn-light">
              Dashboard
            </Link>
          </div>
        </div>

        <div className="hero-visual">

          <div className="float-card fc1">
            🔥 <strong>350</strong> kcal
            <br />
            <small>bugungi mashq</small>
          </div>

          <div className="float-card fc2">
            🏆 7 kun
            <br />
            <small>streak maqsadi</small>
          </div>

        </div>

      </div>
    </section>
  );
}