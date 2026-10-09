"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    href: "/dashboard",
    icon: "▦",
    label: "Dashboard",
  },
  {
    href: "/workouts",
    icon: "🏋️",
    label: "Mashg‘ulotlar",
  },
  {
    href: "/calories",
    icon: "🔥",
    label: "Kaloriya",
  },
  {
    href: "/nutrition",
    icon: "🥗",
    label: "Ovqatlanish",
  },
  {
    href: "/progress",
    icon: "📈",
    label: "Progress",
  },
  {
    href: "/profile",
    icon: "👤",
    label: "Profil",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">

      <Link
        href="/"
        className="sidebar-logo"
      >

        <div className="logo-mark">
          ♥
        </div>

        <div>
          <strong>
            Sog‘lom
          </strong>

          <br />

          <span>
            Hayot
          </span>
        </div>

      </Link>

      <div className="sidebar-section-title">
        ASOSIY
      </div>

      <nav className="sidebar-menu">

        {menu.map((item) => {

          const active =
            pathname === item.href ||
            pathname.startsWith(
              `${item.href}/`
            );

          return (
            <Link
              href={item.href}
              key={item.href}
              className={
                active
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >

              <span>
                {item.icon}
              </span>

              <span>
                {item.label}
              </span>

            </Link>
          );
        })}

      </nav>

      <div className="sidebar-help">

        <b>
          💪 Maqsadingizga boring
        </b>

        <p>
          Har kuni kichik qadam —
          katta natija.
        </p>

        <Link href="/workouts">
          Boshlash →
        </Link>

      </div>

    </aside>
  );
}