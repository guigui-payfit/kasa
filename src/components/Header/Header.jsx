import { NavLink } from "react-router-dom";

import { useMediaQuery } from "../../hooks/use-media-query";
import styles from "./Header.module.scss";

const EXTRA_SMALL_SCREEN_MEDIA_QUERY = "(max-width: 480px)";

/**
 * @returns {React.JSX.Element} header component
 */
export default function Header() {
  const isExtraSmallScreen = useMediaQuery(EXTRA_SMALL_SCREEN_MEDIA_QUERY);

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
              {isExtraSmallScreen ? "ACCUEIL" : "Accueil"}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/about"
            >
              {isExtraSmallScreen ? "A PROPOS" : "A propos"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
