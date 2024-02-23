import { useState } from "react";

import chevronUpIcon from "../../assets/images/chevron-up.svg";
import styles from "./Collapse.module.scss";

/**
 * @param {Object} props
 * @param {string} props.content - text content displayed when the collapse component is expanded
 * @param {string} props.title - title displayed in the (expanded or not) collapse component
 * @returns {React.JSX.Element} collapse component
 */
export default function Collapse({ content, title }) {
  const [hasBeenTouched, setHasBeenTouched] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className={styles.container}
      style={isExpanded ? { backgroundColor: "rgba(246, 246, 246, 0.45)" } : {}}
    >
      <div className={styles.titleContainer}>
        <p>{title}</p>
        <svg
          aria-label="See the description."
          onClick={() => {
            setHasBeenTouched(true);
            setIsExpanded(!isExpanded);
          }}
          role="img"
          style={isExpanded ? { transform: "rotate(-180deg)" } : {}}
        >
          <title>See the description.</title>
          <use xlinkHref={`${chevronUpIcon}#chevron-up`}></use>
        </svg>
      </div>
      <div
        className={`${styles.contentContainer} ${
          isExpanded ? styles.expanded : styles.collapsed
        } ${hasBeenTouched ? styles.touched : ""}`}
      >
        <p>{content}</p>
      </div>
    </section>
  );
}
