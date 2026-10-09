"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: "▦" },
  { href: "/workouts", label: "Mashqlar", icon: "⚡" },
  { href: "/calories", label: "Kaloriya", icon: "🔥" },
  { href: "/nutrition", label: "Ovqatlanish", icon: "🥗" },
  { href: "/progress", label: "Progress", icon: "📈" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <Link href="/" className="brand">
        <span className="brand-icon">♥</span>
        <span>Sog‘lom<span>Hayot</span></span>
      </Link>

      <nav className="nav-links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname.startsWith(link.href) ? "active" : ""}
          >
            <span>{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </nav>

      <Link href="/profile" className="profile-button">
        <span>👤</span>
        Profil
      </Link>
    </header>
  );
}