"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: "▦",
  },
  {
    href: "/workouts",
    label: "Mashqlar",
    icon: "⚡",
  },
  {
    href: "/calories",
    label: "Kaloriya",
    icon: "🔥",
  },
  {
    href: "/nutrition",
    label: "Ovqatlanish",
    icon: "🥗",
  },
  {
    href: "/progress",
    label: "Progress",
    icon: "📈",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      {/* LOGO */}
      <Link href="/" className="brand">
        <span className="brand-icon">♥</span>

        <span>
          Sog‘lom<span>Hayot</span>
        </span>
      </Link>

      {/* NAVIGATION */}
      <nav className="nav-links">
        {links.map((link) => {
          const active =
            pathname === link.href ||
            pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={active ? "active" : ""}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* PROFILE */}
      <Link href="/profile" className="profile-button">
        👤 Profil
      </Link>
    </header>
  );
}