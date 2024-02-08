import { useEffect, useState } from "react";

/**
 * @param {string} mediaQuery - CSS media query (example: "(max-width: 768px)")
 * @returns {boolean} true if the screen matches the given media query, else false
 */
export function useMediaQuery(mediaQuery) {
  const [doesScreenMatchMediaQuery, setDoesScreenMatchMediaQuery] = useState(
    window.matchMedia(mediaQuery).matches
  );

  useEffect(() => {
    window
      .matchMedia(mediaQuery)
      .addEventListener("change", (event) =>
        setDoesScreenMatchMediaQuery(event.matches)
      );
  }, [mediaQuery]);

  return doesScreenMatchMediaQuery;
}
