import AboutPageBannerBackgroundImage from "../../assets/images/about-page-banner-background.jpg";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import styles from "./About-page.module.scss";

/**
 * @returns {React.JSX.Element} about page component
 */
export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Banner
        backgroundImageOpacity={0.3}
        imageUrl={AboutPageBannerBackgroundImage}
      />
      <ul>
        <li>
          <Collapse
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            title="Fiabilité"
          />
        </li>
        <li>
          <Collapse
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            title="Respect"
          />
        </li>
        <li>
          <Collapse
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            title="Service"
          />
        </li>
        <li>
          <Collapse
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            title="Sécurité"
          />
        </li>
      </ul>
    </div>
  );
}
