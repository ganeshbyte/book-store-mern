import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/authContex";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Outlet></Outlet>;
};

export default ProtectedRoute;
