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
          <Collapse title="Fiabilité" />
        </li>
        <li>
          <Collapse title="Respect" />
        </li>
        <li>
          <Collapse title="Service" />
        </li>
        <li>
          <Collapse title="Sécurité" />
        </li>
      </ul>
    </div>
  );
}
