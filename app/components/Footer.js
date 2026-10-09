import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-brand">
          <span>♥</span>
          Sog‘lomHayot
        </div>

        <p>
          Sog‘lom hayot sari har kuni bir qadam.
        </p>
      </div>

      <div className="footer-links">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/workouts">Mashqlar</Link>
        <Link href="/nutrition">Ovqatlanish</Link>
        <Link href="/progress">Progress</Link>
      </div>

      <p className="copyright">
        © 2026 Sog‘lom Hayot
      </p>
    </footer>
  );
}