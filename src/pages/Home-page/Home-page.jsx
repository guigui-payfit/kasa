import { NavLink } from "react-router-dom";

import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import data from "../../data/data.json";
import HomePageBannerBackgroundImage from "../../assets/images/home-page-banner-background.jpg";
import styles from "./Home-page.module.scss";

/**
 * @returns {React.JSX.Element} home page component
 */
export default function HomePage() {
  return (
    <div className={styles.container}>
      <Banner
        backgroundImageOpacity={0.6}
        dropShadowFilter="0 0.4rem 0.4rem rgba(0, 0, 0, 0.25)"
        imageUrl={HomePageBannerBackgroundImage}
        text="Chez vous, partout et ailleurs"
      />
      <div className={styles.cardContainer}>
        {data.map((data) => (
          <NavLink key={data.id} to={`/properties/${data.id}`}>
            <Card imageUrl={data.cover} title={data.title} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
