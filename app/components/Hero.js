import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge">✦ SOG‘LOM HAYOT PLATFORMASI</span>

          <h1>
            Sog‘lom tana.
            <br />
            <span>Kuchli kelajak.</span>
          </h1>

          <p>
            Mashg‘ulotlaringizni boshqaring, kaloriyangizni hisoblang,
            ovqatlanishingizni nazorat qiling va har kuni o‘zingizning
            kuchliroq versiyangizga aylaning.
          </p>

          <div className="hero-buttons">
            <Link href="/dashboard" className="primary-button">
              Dashboardni ochish →
            </Link>

            <Link href="/workouts" className="secondary-button">
              Mashqlarni ko‘rish
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>20+</strong>
              <span>Mashq</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>Oziq-ovqat</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Monitoring</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle">
            <div className="hero-person">🏃</div>
          </div>

          <div className="floating-card floating-card-one">
            <span>🔥</span>
            <div>
              <small>Bugun</small>
              <strong>450 kcal</strong>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span>💧</span>
            <div>
              <small>Suv</small>
              <strong>1.8 L</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}