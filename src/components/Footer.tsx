import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  //faWhatsapp,
  faTiktok, 
} from "@fortawesome/free-brands-svg-icons";
import { siteConfig } from '@/config/site';

const MENU_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/habitaciones", label: "Habitaciones" },
   { href: "/services", label: "Servicios" },
  { href: "/contactanos", label: "Contáctanos" },
];

// Mapeo de redes a íconos y URLs
const SOCIAL_LINKS = [
  {
    name: "facebook",
    url: siteConfig.social.facebook,
    icon: faFacebookF,
    color: "#1877F2", // color oficial de Facebook
  },
  {
    name: "instagram",
    url: siteConfig.social.instagram,
    icon: faInstagram,
    color: "#E1306C", // color oficial de Instagram
  },
  // {
  //   name: "whatsapp",
  //   url: siteConfig.social.whatsapp,
  //   icon: faWhatsapp,
  //   color: "#25D366", // color oficial de WhatsApp
  // },
  {
    name: "tiktok",
    url: siteConfig.social.tiktok,
    icon: faTiktok,
    color: "#FFFFFF",
  },
];

const NEWSLETTER_PLACEHOLDER = "example@mail.com";
const NEWSLETTER_BUTTON_TEXT = "ENVIAR";

export default function Footer() {
  return (
    <footer className="bg-[#161616] py-10">
      <nav className="max-w-7xl mx-auto flex flex-col-reverse items-top gap-8 text-center md:grid md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:gap-8 md:text-left px-4 sm:px-6 lg:px-8">
        {/* Contacto */}
        <div>
          <h3 className="relative mb-3 pb-3 text-white after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-[164px] after:-translate-x-1/2 after:bg-primary md:after:left-0 md:after:translate-x-0">
            Contáctanos
          </h3>
          <ul className="flex flex-col gap-3 text-white">
            <li>{siteConfig.contact.email}</li>
            <li><a href={`tel:+51${siteConfig.contact.phone}`}>Llamar al +51 {siteConfig.contact.phone}</a></li>
            <li>{siteConfig.contact.address}</li>
            <li className="flex justify-center gap-4 md:justify-start mt-4">
              {SOCIAL_LINKS.map(
                ({ name, url, icon, color }) =>
                  url && (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="text-xl hover:opacity-80 transition-opacity"
                      style={{ color }}
                    >
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  )
              )}
            </li>
          </ul>
        </div>

        {/* Menú */}
        <div>
          <h3 className="relative mb-3 pb-3 text-white after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-[164px] after:-translate-x-1/2 after:bg-primary md:after:left-0 md:after:translate-x-0">
            Menú
          </h3>
          <ul className="flex flex-col gap-3 text-white">
            {MENU_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-all duration-150 hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="relative mb-3 pb-3 text-white after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-[164px] after:-translate-x-1/2 after:bg-primary md:after:left-0 md:after:translate-x-0">
            Recibe novedades
          </h3>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <input
              type="text"
              placeholder={NEWSLETTER_PLACEHOLDER}
              className="w-full max-w-[320px] rounded-none border-none bg-[#F1F1F1] px-2 py-3 text-base font-semibold outline-none"
            />
            <button
              type="submit"
              className="w-full max-w-[320px] rounded-none border-none bg-primary px-2 py-3 text-base font-semibold text-[#F1F1F1] transition-all duration-150 hover:bg-primary-hover focus:outline-none"
            >
              {NEWSLETTER_BUTTON_TEXT}
            </button>
          </div>
        </div>
      </nav>
    </footer>
  );
}
