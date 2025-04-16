import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/signin");
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex h-screen">
      <Sidebar collapsed={collapsed} />
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};
