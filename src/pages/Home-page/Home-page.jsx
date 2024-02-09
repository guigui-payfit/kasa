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
        imageUrl={HomePageBannerBackgroundImage}
        text="Chez vous, partout et ailleurs"
      />
      <div className={styles.cardContainer}>
        {data.map((data) => (
          <Card imageUrl={data.cover} key={data.id} title={data.title} />
        ))}
      </div>
    </div>
  );
}
