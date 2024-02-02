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
            <a className={styles.active} href="/home">
              Accueil
            </a>
          </li>
          <li>
            <a href="/about">A propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
