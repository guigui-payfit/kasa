import { useParams } from "react-router-dom";

import data from "../../data/data.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import styles from "./Property-page.module.scss";

/**
 * @returns {React.JSX.Element} property page component
 */
export default function PropertyPage() {
  const { id } = useParams();

  const property = data.find((item) => item.id === id);

  return (
    <div className={styles.container}>
      <Slideshow imageUrls={property.pictures} />
    </div>
  );
}
