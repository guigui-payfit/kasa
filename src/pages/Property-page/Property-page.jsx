import { Navigate, useParams } from "react-router-dom";

import Collapse from "../../components/Collapse/Collapse";
import data from "../../data/data.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import starIcon from "../../assets/images/star.svg";
import styles from "./Property-page.module.scss";

/**
 * @returns {React.JSX.Element} property page component
 */
export default function PropertyPage() {
  const { id } = useParams();

  const property = data.find((item) => item.id === id);

  if (property === undefined) {
    return <Navigate to="/error" />;
  }

  return (
    <div className={styles.container}>
      <Slideshow imageUrls={property.pictures} />
      <div className={styles.mainInformation}>
        <div className={styles.titleAndLocationContainer}>
          <h2>{property.title}</h2>
          <p>{property.location}</p>
          <ul className="tags">
            {property.tags.map((tag, index) => (
              <li className="tag" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.authorAndRatingContainer}>
          <div className={styles.authorContainer}>
            <p>{property.host.name.split(" ").join("\n")}</p>
            <img alt="" aria-hidden="true" src={property.host.picture} />
          </div>
          <ul className={styles.ratings}>
            {new Array(5).fill().map((_, index) => (
              <li
                key={index}
                style={{
                  fill:
                    parseInt(property.rating) >= index + 1
                      ? "var(--primary-color)"
                      : "#E3E3E3",
                }}
              >
                <svg>
                  <use xlinkHref={`${starIcon}#star`}></use>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.additionalInformation}>
        <Collapse content={property.description} title="Description" />
        <Collapse
          content={property.equipments.join("\n")}
          title="Équipements"
        />
      </div>
    </div>
  );
}
