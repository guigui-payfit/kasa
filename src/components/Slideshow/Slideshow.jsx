import { useState } from "react";

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
  const [shownSlideIndex, setShownSlideIndex] = useState(0);

  return (
    <div
      aria-hidden="true"
      className={styles.container}
      style={{ backgroundImage: `url(${imageUrls[shownSlideIndex]})` }}
    >
      {imageUrls.length > 1 && (
        <>
          <svg
            className={styles.squareChevronLeft}
            onClick={() => {
              setShownSlideIndex(
                shownSlideIndex === 0
                  ? imageUrls.length - 1
                  : shownSlideIndex - 1
              );
            }}
          >
            <use
              xlinkHref={`${squareChevronRightIcon}#square-chevron-right`}
            ></use>
          </svg>
          <svg
            className={styles.squareChevronRight}
            onClick={() => {
              setShownSlideIndex((shownSlideIndex + 1) % imageUrls.length);
            }}
          >
            <use
              xlinkHref={`${squareChevronRightIcon}#square-chevron-right`}
            ></use>
          </svg>
          {!isExtraSmallScreen && (
            <p>
              {shownSlideIndex + 1}/{imageUrls.length}
            </p>
          )}
        </>
      )}
    </div>
  );
}
