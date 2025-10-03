"use client";

import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import GuestDropdown from "./GuestDropdown/GuestDropdown";

// Constantes reutilizables
const SITE_TITLE = "HOSTAL INDUSTRIAL";

const NAV_ITEMS = [
  { label: "Inicio", href: "/", match: (path) => path === "/" },
  { label: "Habitaciones", href: "/rooms", match: (path) => path.includes("rooms") },
  { label: "Contáctanos", href: "/contact", match: (path) => path === "/contact" },
];

const GUEST_AREA = {
  label: "Area de Huéspedes",
  href: "/signin",
  match: (path) => path.includes("account") || path === "/signin",
};

function Navbar({ user, signOutAction }) {
  const [hideMenu, setHideMenu] = useState(true);
  const pathname = usePathname();

  const toggleMenu = () => setHideMenu((prev) => !prev);
  const closeMenu = () => setHideMenu(true);

  return (
    <header>
      <div className="container header-items">
        <h2>{SITE_TITLE}</h2>

        <nav className={`navbar ${hideMenu ? "hide-menu" : "show-menu"}`}>
          <ul>
            {NAV_ITEMS.map(({ label, href, match }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={match(pathname) ? "active" : ""}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              {user ? (
                <GuestDropdown user={user} signOutAction={signOutAction} />
              ) : (
                <Link
                  href={GUEST_AREA.href}
                  className={GUEST_AREA.match(pathname) ? "active" : ""}
                  onClick={closeMenu}
                >
                  {GUEST_AREA.label}
                </Link>
              )}
            </li>
          </ul>
        </nav>

        <button onClick={toggleMenu} className="toggle-menu-button">
          <FontAwesomeIcon icon={hideMenu ? faBars : faClose} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;