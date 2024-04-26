import { NavLink } from "react-router-dom";

import redAndWhiteLogo from "../../assets/images/red-and-white-logo.png";
import {
  EXTRA_SMALL_SCREEN_MEDIA_QUERY,
  useMediaQuery,
} from "../../hooks/use-media-query";
import styles from "./Header.module.scss";

/**
 * @returns {React.JSX.Element} header component
 */
export default function Header() {
  const isExtraSmallScreen = useMediaQuery(EXTRA_SMALL_SCREEN_MEDIA_QUERY);

  return (
    <header>
      <nav aria-label="main navigation">
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          to="/"
        >
          <img alt="Logo de Kasa" src={redAndWhiteLogo} />
        </NavLink>
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
