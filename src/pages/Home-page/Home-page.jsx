import Banner from "../../components/Banner/Banner";
import HomePageBannerBackgroundImage from "../../assets/images/home-page-banner-background.jpg";
import "./Home-page.module.scss";

/**
 * @returns {React.JSX.Element} home page component
 */
export default function HomePage() {
  return (
    <Banner
      backgroundImageOpacity={0.6}
      imageUrl={HomePageBannerBackgroundImage}
      text="Chez vous, partout et ailleurs"
    />
  );
}
