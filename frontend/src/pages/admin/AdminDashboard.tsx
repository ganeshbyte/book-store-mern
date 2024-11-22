import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Main Content */}
      <main className="ml-64 p-4 w-full mt-10">
        <h1 className="text-2xl font-bold">Welcome to the Admin Dashboard</h1>
        <p className="mt-4">
          This is the main content area. It is now adjusted to account for the
          sidebar's width.
        </p>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AdminDashboard;
