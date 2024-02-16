import styles from "./Card.module.scss";

/**
 * @param {Object} props
 * @param {string} props.imageUrl - URL of the background image displayed in the card
 * @param {string} props.title - title displayed in the card
 * @returns {React.JSX.Element} card component
 */
export default function Card({ imageUrl, title = "" }) {
  const style = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className={styles.container} style={style}>
      <p>{title}</p>
    </div>
  );
}
