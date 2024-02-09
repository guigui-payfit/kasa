import AboutPageBannerBackgroundImage from "../../assets/images/about-page-banner-background.jpg";
import Banner from "../../components/Banner/Banner";
import "./About-page.module.scss";

/**
 * @returns {React.JSX.Element} about page component
 */
export default function AboutPage() {
  return (
    <Banner
      backgroundImageOpacity={0.3}
      imageUrl={AboutPageBannerBackgroundImage}
    />
  );
}
