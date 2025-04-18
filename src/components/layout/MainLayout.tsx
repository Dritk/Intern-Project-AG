import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../dashboard/Navbar";
import AppSidebar from "../dashboard/Sidebar";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen w-full ">
      <AppSidebar collapsed={collapsed} />
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-8 bg-[#F5F5F5]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
