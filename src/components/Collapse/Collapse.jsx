import chevronUpIcon from "../../assets/images/chevron-up.svg";
import styles from "./Collapse.module.scss";

/**
 * @param {Object} props
 * @param {string} props.title - title displayed in the (expanded or not) collapse component
 * @returns {React.JSX.Element} collapse component
 */
export default function Collapse({ title }) {
  return (
    <div className={styles.titleContainer}>
      <p>{title}</p>
      <svg aria-label="See the description." role="img">
        <title>See the description.</title>
        <use xlinkHref={`${chevronUpIcon}#chevron-up`}></use>
      </svg>
    </div>
  );
}
