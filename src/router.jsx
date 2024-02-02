import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import App from "./App";
import ErrorPage from "./pages/Error-page/Error-page";

const AboutPage = lazy(() => import("./pages/About-page/About-page"));
const HomePage = lazy(() => import("./pages/Home-page/Home-page"));

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    path: "/",
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <AboutPage />,
        path: "/about",
      },
    ],
  },
]);
