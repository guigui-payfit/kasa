import { useEffect, useState } from "react";

import styles from "./Banner.module.scss";

const SMALL_OR_LOWER_SCREEN_MEDIA_QUERY = "(max-width: 768px)";

/**
 * @param {Object} props
 * @param {number} props.backgroundImageOpacity - number between 0 and 1 included (0: fully transparent; 1: fully opaque)
 * @param {string} props.imageUrl - url of the background image displayed in the banner
 * @param {string} props.text - text displayed in the banner
 * @returns {React.JSX.Element} banner component
 */
export default function Banner({
  backgroundImageOpacity,
  imageUrl,
  text = "",
}) {
  const [isSmallOrLowerScreen, setIsSmallOrLowerScreen] = useState(
    window.matchMedia(SMALL_OR_LOWER_SCREEN_MEDIA_QUERY).matches
  );

  useEffect(() => {
    window
      .matchMedia(SMALL_OR_LOWER_SCREEN_MEDIA_QUERY)
      .addEventListener("change", (event) =>
        setIsSmallOrLowerScreen(event.matches)
      );
  }, []);

  const style = {
    backgroundColor: `rgba(0, 0, 0, ${backgroundImageOpacity})`,
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className={styles.container} style={style}>
      <p>{isSmallOrLowerScreen ? text.replaceAll(", ", ",\n") : text}</p>
    </div>
  );
}
