import React from "react";
import { useAuth } from "../context/authContex";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

interface ProtectedRouteProps {
  children: React.ReactNode;
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return children;
  }
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "You need to login to access this page",
  });
  return <Navigate to={"/login"}></Navigate>;
};

export default ProtectedRoute;
