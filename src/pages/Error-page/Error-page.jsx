import { NavLink } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Error-page.module.scss";

/**
 * @returns {React.JSX.Element} error page component
 */
export default function ErrorPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <NavLink to="/">Retourner sur la page d’accueil</NavLink>
        </div>
      </main>
      <Footer />
    </>
  );
}
