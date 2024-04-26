import blackAndWhiteLogo from "../../assets/images/black-and-white-logo.png";
import styles from "./Footer.module.scss";

/**
 * @returns {React.JSX.Element} footer component
 */
export default function Footer() {
  return (
    <footer>
      <img alt="Logo de Kasa" src={blackAndWhiteLogo} />
      <div className={styles.copyrightContainer}>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
