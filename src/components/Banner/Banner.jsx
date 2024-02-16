import {
  SMALL_OR_LOWER_SCREEN_MEDIA_QUERY,
  useMediaQuery,
} from "../../hooks/use-media-query";
import styles from "./Banner.module.scss";

/**
 * @param {Object} props
 * @param {number} props.backgroundImageOpacity - number between 0 and 1 included (0: fully transparent; 1: fully opaque)
 * @param {string | undefined} props.dropShadowFilter - stringified arguments for CSS function "drop-shadow" (example: "0 0.4rem 0.4rem rgba(0, 0, 0, 0.25)")
 * @param {string} props.imageUrl - URL of the background image displayed in the banner
 * @param {string} props.text - text displayed in the banner
 * @returns {React.JSX.Element} banner component
 */
export default function Banner({
  backgroundImageOpacity,
  dropShadowFilter,
  imageUrl,
  text = "",
}) {
  const isSmallOrLowerScreen = useMediaQuery(SMALL_OR_LOWER_SCREEN_MEDIA_QUERY);

  const style = {
    backgroundColor: `rgba(0, 0, 0, ${backgroundImageOpacity})`,
    backgroundImage: `url(${imageUrl})`,
    filter: dropShadowFilter ? `drop-shadow(${dropShadowFilter})` : "",
  };

  return (
    <div className={styles.container} style={style}>
      <p>{isSmallOrLowerScreen ? text.replaceAll(", ", ",\n") : text}</p>
    </div>
  );
}
