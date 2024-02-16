import {
  EXTRA_SMALL_SCREEN_MEDIA_QUERY,
  useMediaQuery,
} from "../../hooks/use-media-query";
import squareChevronRightIcon from "../../assets/images/square-chevron-right.svg";
import styles from "./Slideshow.module.scss";

/**
 * @param {Object} props
 * @param {string[]} props.imageUrls - URLs of the slideshow images
 * @returns {React.JSX.Element} slideshow component
 */
export default function Slideshow({ imageUrls }) {
  const isExtraSmallScreen = useMediaQuery(EXTRA_SMALL_SCREEN_MEDIA_QUERY);

  return (
    <div
      aria-hidden="true"
      className={styles.container}
      style={{ backgroundImage: `url(${imageUrls[0]})` }}
    >
      {imageUrls.length > 1 && (
        <>
          <svg className={styles.squareChevronLeft}>
            <use
              xlinkHref={`${squareChevronRightIcon}#square-chevron-right`}
            ></use>
          </svg>
          <svg className={styles.squareChevronRight}>
            <use
              xlinkHref={`${squareChevronRightIcon}#square-chevron-right`}
            ></use>
          </svg>
          {!isExtraSmallScreen && <p>1/{imageUrls.length}</p>}
        </>
      )}
    </div>
  );
}
