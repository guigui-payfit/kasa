import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Error-page.module.scss";

/**
 * @returns {React.JSX.Element} error page component
 */
export default function ErrorPage() {
  return (
    <>
      <Header />
      <main>
        <p>I am "ErrorPage".</p>
      </main>
      <Footer />
    </>
  );
}
