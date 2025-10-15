"use client";

import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import GuestDropdown from "./GuestDropdown";

interface NavItem {
  label: string;
  href: string;
  match: (pathname: string) => boolean;
}

interface User {
  name: string;
  email?: string;
  // Añade más según tu modelo
}

interface NavbarProps {
  user: User | null;
  signOutAction: () => void;
}

const SITE_TITLE = "HOSTAL INDUSTRIAL";

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/", match: (path) => path === "/" },
  { label: "Habitaciones", href: "/habitaciones", match: (path) => path.includes("habitaciones") },
  { label: "Contáctanos", href: "/contactanos", match: (path) => path === "/contactanos" },
  { label: "Nosotros", href: "/nosotros", match: (path) => path === "/nosotros" },
];

const GUEST_AREA: NavItem = {
  label: "Area de Huéspedes",
  href: "/signin",
  match: (path) => path.includes("account") || path === "/signin",
};

export default function Navbar(
  //{ user, signOutAction }: NavbarProps
  ) {
  const [hideMenu, setHideMenu] = useState(true);
  const pathname = usePathname();

  const toggleMenu = () => setHideMenu((prev) => !prev);
  const closeMenu = () => setHideMenu(true);

  return (
    <header className="relative z-50 bg-white"> {/* ✅ Asegura que el header esté en una capa alta */}
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-5">
        <h2 className="font-sans text-xl font-bold">{SITE_TITLE}</h2>

        {/* Menú móvil: posición fija o absoluta con z-index alto */}
        <nav
          className={`absolute inset-x-0 top-16 z-50 flex w-full flex-col items-center justify-center bg-gray-100 p-6 shadow-lg transition-all duration-300 md:static md:flex md:w-auto md:flex-row md:bg-transparent md:p-0 md:shadow-none ${
            hideMenu ? "hidden" : "flex"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 text-lg font-semibold uppercase text-gray-900 md:flex-row md:gap-10">
            {NAV_ITEMS.map(({ label, href, match }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${match(pathname) ? "text-red-600" : "text-gray-900"} hover:text-red-600 transition-colors`}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
            {/* <li>
              {user ? (
                <GuestDropdown user={user} signOutAction={signOutAction} />
              ) : (
                <Link
                  href={GUEST_AREA.href}
                  className={`${GUEST_AREA.match(pathname) ? "text-red-600" : "text-gray-900"} hover:text-red-600 transition-colors`}
                  onClick={closeMenu}
                >
                  {GUEST_AREA.label}
                </Link>
              )}
            </li> */}
          </ul>
        </nav>

        <button
          onClick={toggleMenu}
          className="block rounded border border-gray-800 p-1 text-3xl text-gray-800 outline-none md:hidden"
          aria-label={hideMenu ? "Abrir menú" : "Cerrar menú"}
        >
          <FontAwesomeIcon icon={hideMenu ? faBars : faClose} />
        </button>
      </div>
    </header>
  );
}