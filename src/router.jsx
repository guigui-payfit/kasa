import { createBrowserRouter } from "react-router-dom";

import AboutPage from "./pages/About-page/About-page";
import App from "./App";
import ErrorPage from "./pages/Error-page/Error-page";
import HomePage from "./pages/Home-page/Home-page";

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
