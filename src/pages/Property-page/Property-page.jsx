import { useParams } from "react-router-dom";

import "./Property-page.module.scss";

/**
 * @returns {React.JSX.Element} property page component
 */
export default function PropertyPage() {
  const { id } = useParams();

  return <p>I'm property page with id: {id}</p>;
}
