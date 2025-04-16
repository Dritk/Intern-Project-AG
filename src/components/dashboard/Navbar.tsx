import { MenuIcon, MessageSquareText, Bell } from "lucide-react";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b shadow-sm ">
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-md hover:bg-gray-200"
      >
        <MenuIcon size={20} />
      </button>
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex flex-row gap-x-20">
        <MessageSquareText size={20} />
        <Bell size={20} />
      </div>
    </nav>
  );
};

export default Navbar;
