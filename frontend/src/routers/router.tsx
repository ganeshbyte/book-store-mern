import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import About from "../components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
