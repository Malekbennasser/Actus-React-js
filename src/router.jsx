import { createBrowserRouter } from "react-router-dom";
import Recherche from "./recherche/recherche";
import Acceuil from "./acceuil/acceuil";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Acceuil />,
  },
  {
    path: "/Recherche",
    element: <Recherche />,
  },
]);
export default Router;
