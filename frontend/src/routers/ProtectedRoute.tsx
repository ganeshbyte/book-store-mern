import React from "react";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { validateToken } from "../utils/validateToken";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function checkTokenValidation() {
      const isValidToken = await validateToken();
      if (isValidToken) {
        setIsValid(true);
      } else {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
    checkTokenValidation();
  }, [navigate]);

  return isValid ? children : <Outlet></Outlet>;
};

export default ProtectedRoute;
