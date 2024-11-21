import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Book from "../pages/Book";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Order/Orders";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoutes from "./AdminRoutes";
import Admin from "../pages/Admin";

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
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/books/:id",
        element: <Book></Book>,
      },
      {
        path: "/cart/checkout",
        element: (
          <ProtectedRoute>
            <Checkout></Checkout>
          </ProtectedRoute>
        ),
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/admin",
        element: <Admin></Admin>,
      },
      {
        path: "/admin/dashboard",
        element: <AdminRoutes>{/* <div>Dashboard</div> */}</AdminRoutes>,
        children: [
          {
            path: "add-new-book",
            element: <div>Add New Book</div>,
          },
          {
            path: "update-book/:id",
            element: <div>Update Book</div>,
          },
        ],
      },
    ],
  },
]);

export default router;
