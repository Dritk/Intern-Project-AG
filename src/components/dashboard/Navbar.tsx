import { MenuIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import pageTitles from "../../utils/pageTitles";
import NotificationSection from "./Notification";
import Messages from "./Messages";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const breadcrumb = pathSegments
    .map((segment) => pageTitles[segment])
    .join(" > ");

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/signin");
  };

  return (
    <nav className="flex items-center bg-white justify-between px-4 py-3 border-b shadow-sm">
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-md hover:bg-gray-200"
      >
        <MenuIcon size={20} />
      </button>

      <h1 className="text-lg font-semibold flex-1 ml-4">{breadcrumb}</h1>

      <div className="flex flex-row gap-x-14 items-center">
        <Messages />
        <NotificationSection />

        <button
          onClick={handleLogout}
          className="p-2 text-sm font-semibold text-red-500"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
