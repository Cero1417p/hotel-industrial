import Link from "next/link";
import styles from "./styles.module.css";

const CONTACT_INFO = {
  email: "email@gmail.com",
  phone: "+212 6 77 88 99 00",
  address: "Av.  Industrial N° 755.",
};

const MENU_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/rooms", label: "Habitaciones" },
  { href: "/contact", label: "Contáctanos" },
  { href: "/signin", label: "Área de Huespedes" },
];

const NEWSLETTER_PLACEHOLDER = "example@mail.com";
const NEWSLETTER_BUTTON_TEXT = "ENVIAR";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={`${styles.footerMenu} container`}>
        <div>
          <h3>Contáctanos</h3>
          <ul>
            <li>{CONTACT_INFO.email}</li>
            <li>{CONTACT_INFO.phone}</li>
            <li>{CONTACT_INFO.address}</li>
            <li className={styles.icons}></li>
          </ul>
        </div>

        <div>
          <h3>Menú</h3>
          <ul>
            {MENU_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Recibe novedades</h3>
          <li className={styles.newsletter}>
            <input type="text" placeholder={NEWSLETTER_PLACEHOLDER} />
            <button>{NEWSLETTER_BUTTON_TEXT}</button>
          </li>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
