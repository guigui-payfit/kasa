import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header>
      <nav aria-label="main navigation">
        <a href="/">
          <img alt="Logo de Kasa" src="assets/images/red-and-white-logo.png" />
        </a>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/about"
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
