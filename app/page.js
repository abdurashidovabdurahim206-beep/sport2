import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HealthAnalysis from "./components/HealthAnalysis";
import SportCard from "./components/SportCard";
import Footer from "./components/Footer";
import { workouts } from "./data/workouts";

export default function HomePage() {
const featuredWorkouts = workouts.slice(0, 5);

return (
<> <Navbar />

```
  <main>
    {/* HERO */}
    <Hero />

    {/* QUICK STATS */}
    <section className="quick-stats">
      <div className="shell quick-stats-grid">
        <div className="quick-stat">
          <span className="quick-stat-icon">🔥</span>
          <div>
            <strong>350+</strong>
            <span>kcal yoqish</span>
          </div>
        </div>

        <div className="quick-stat">
          <span className="quick-stat-icon">🏃</span>
          <div>
            <strong>20+</strong>
            <span>mashg‘ulot</span>
          </div>
        </div>

        <div className="quick-stat">
          <span className="quick-stat-icon">💧</span>
          <div>
            <strong>2.5L</strong>
            <span>kunlik suv</span>
          </div>
        </div>

        <div className="quick-stat">
          <span className="quick-stat-icon">🏆</span>
          <div>
            <strong>7 kun</strong>
            <span>streak maqsadi</span>
          </div>
        </div>
      </div>
    </section>

    {/* WORKOUTS */}
    <section className="section shell" id="workouts">
      <div className="section-heading">
        <div>
          <span className="eyebrow">01 — MASHG‘ULOTLAR</span>
          <h2>
            Bugun o‘zingiz uchun
            <br />
            harakat qiling.
          </h2>
        </div>

        <a href="/workouts" className="text-link">
          Barchasini ko‘rish →
        </a>
      </div>

      <div className="sport-grid">
        {featuredWorkouts.map((workout) => (
          <SportCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </section>

    {/* HEALTH ANALYSIS */}
    <HealthAnalysis />

    {/* FEATURES */}
    <section className="section shell">
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            02 — PLATFORMANING IMKONIYATLARI
          </span>
          <h2>Hammasi bitta joyda.</h2>
        </div>
      </div>

      <div className="feature-grid">
        <a
          href="/dashboard"
          className="feature-card feature-green"
        >
          <div className="feature-number">01</div>
          <div className="feature-icon">📊</div>
          <h3>Smart Dashboard</h3>
          <p>
            Kunlik mashg‘ulot, kaloriya, suv va
            progressni bitta joydan kuzating.
          </p>
          <span>Dashboard →</span>
        </a>

        <a href="/calories" className="feature-card">
          <div className="feature-number">02</div>
          <div className="feature-icon">🔥</div>
          <h3>Calorie Engine</h3>
          <p>
            BMR, TDEE va maqsadingizga mos kunlik
            kaloriya miqdorini hisoblang.
          </p>
          <span>Hisoblash →</span>
        </a>

        <a href="/nutrition" className="feature-card">
          <div className="feature-number">03</div>
          <div className="feature-icon">🥗</div>
          <h3>Nutrition</h3>
          <p>
            Ovqatlaringizni yozib boring va protein,
            uglevod hamda yog‘ miqdorini kuzating.
          </p>
          <span>Ovqatlanish →</span>
        </a>

        <a href="/progress" className="feature-card">
          <div className="feature-number">04</div>
          <div className="feature-icon">📈</div>
          <h3>Progress</h3>
          <p>
            Haftalik natijalar, workout tarixi va
            achievementlaringizni ko‘ring.
          </p>
          <span>Progress →</span>
        </a>
      </div>
    </section>

    {/* BIG CTA */}
    <section className="shell">
      <div className="big-cta">
        <div className="big-cta-content">
          <span className="eyebrow">SOG‘LOM HAYOT</span>

          <h2>
            Bugun boshlang.
            <br />
            Ertaga natijani ko‘ring.
          </h2>

          <p>
            Mukammal bo‘lish shart emas.
            Muhimi — har kuni oldinga bir qadam.
          </p>

          <div className="hero-actions">
            <a href="/workouts" className="btn btn-green">
              Mashqni boshlash →
            </a>

            <a href="/dashboard" className="btn btn-light">
              Dashboard
            </a>
          </div>
        </div>

        <div className="big-cta-visual">
          <div className="cta-circle cta-circle-one">💪</div>
          <div className="cta-circle cta-circle-two">🔥</div>
          <div className="cta-circle cta-circle-three">🏆</div>
          <div className="cta-main-icon">🏃</div>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</>

);
}
