import React from "react";
import { useAuth } from "../context/authContex";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default ProtectedRoute;
