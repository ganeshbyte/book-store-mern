import { Navigate, Outlet } from "react-router-dom";

interface IAdminRoutesProps {
  children?: React.ReactNode;
}

const AdminRoutes = ({ children }: IAdminRoutesProps) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/admin" />;
  }

  return children ? children : <Outlet></Outlet>;
};

export default AdminRoutes;
