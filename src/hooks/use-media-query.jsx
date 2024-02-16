import { useEffect, useState } from "react";

export const EXTRA_SMALL_SCREEN_MEDIA_QUERY = "(max-width: 480px)";
export const SMALL_OR_LOWER_SCREEN_MEDIA_QUERY = "(max-width: 768px)";

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
