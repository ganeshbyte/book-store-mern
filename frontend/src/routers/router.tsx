import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Order/Orders";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoutes from "./AdminRoutes";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminLogin from "../pages/admin/AdminLogin";
import AddBook from "../pages/book/AddBook";
import UpdateBook from "../pages/book/UpdateBook";
import Book from "../pages/book/Book";

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
        element: <AdminLogin></AdminLogin>,
      },
      {
        path: "/admin/dashboard",
        element: (
          <AdminRoutes>
            <AdminDashboard></AdminDashboard>
          </AdminRoutes>
        ),
        children: [
          {
            path: "add-new-book",
            element: (
              <AdminRoutes>
                <AddBook></AddBook>
              </AdminRoutes>
            ),
          },
          {
            path: "update-book/:id",
            element: (
              <AdminRoutes>
                <UpdateBook></UpdateBook>
              </AdminRoutes>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
