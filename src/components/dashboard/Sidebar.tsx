import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  Home,
  Package,
  ShoppingCart,
  Wallet,
  Users,
  FileText,
  Percent,
  Mail,
  HelpCircle,
  Image,
  Settings,
  Monitor,
  Store,
  Layout,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  collapsed: boolean;
  toggled: boolean;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppSidebar: React.FC<SidebarProps> = ({
  collapsed,
  toggled,
  setToggled,
}) => {
  const location = useLocation();

  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      width="250px"
      collapsedWidth="80px"
      backgroundColor="white"
      transitionDuration={800}
      breakPoint="md"
      onBackdropClick={() => setToggled(false)}
    >
      <div className="flex items-center justify-center  py-6">
        <img
          src={collapsed ? "/Annapurna-logo-small.png" : "/Annapurna-logo.png"}
          alt="Logo"
          className="h-10 cursor-pointer"
        />
      </div>
      <Menu
        renderExpandIcon={({ open }) =>
          open ? <ChevronUp size={16} /> : <ChevronDown size={16} />
        }
      >
        <SubMenu label="Home" icon={<Home size={18} />}>
          <MenuItem
            component={<Link to="/home" />}
            className={location.pathname === "/home" ? "active-menu" : ""}
          >
            Overview
          </MenuItem>
          <MenuItem
            component={<Link to="/home/analytics" />}
            className={
              location.pathname === "/home/analytics" ? "active-menu" : ""
            }
          >
            Analytics
          </MenuItem>
        </SubMenu>

        <SubMenu label="Products" icon={<Package size={18} />}>
          <MenuItem>Overview</MenuItem>
          <MenuItem>Add Auction</MenuItem>
          <MenuItem>Auction List</MenuItem>
          <MenuItem>Product List</MenuItem>
          <MenuItem>Sold Product List</MenuItem>
          <MenuItem>Not For Sale</MenuItem>
        </SubMenu>

        <SubMenu label="Orders" icon={<ShoppingCart size={18} />}>
          <MenuItem>Overview</MenuItem>
          <MenuItem>Order List</MenuItem>
          <MenuItem>Order Tracking</MenuItem>
          <MenuItem>Order Returns</MenuItem>
          <MenuItem>Cancelled Order</MenuItem>
          <MenuItem>Manual Order</MenuItem>
        </SubMenu>

        <SubMenu label="Finance" icon={<Wallet size={18} />}>
          <MenuItem>Overview</MenuItem>
          <MenuItem>Invoice List</MenuItem>
          <MenuItem>Withdraw</MenuItem>
        </SubMenu>

        <SubMenu label="Users" icon={<Users size={18} />}>
          <MenuItem>Supplier List</MenuItem>
          <MenuItem>Feature Artists</MenuItem>
          <MenuItem>Customer List</MenuItem>
          <MenuItem>Reviewer List</MenuItem>
          <MenuItem>Cart / Wishlist List</MenuItem>
        </SubMenu>

        <SubMenu label="Blogs" icon={<FileText size={18} />}>
          <MenuItem>Overview</MenuItem>
          <MenuItem>Blog Category</MenuItem>
          <MenuItem>Blog Tags</MenuItem>
        </SubMenu>

        <MenuItem icon={<Percent size={18} />}>Coupons</MenuItem>
        <MenuItem icon={<Mail size={18} />}>Subscribers</MenuItem>
        <MenuItem icon={<HelpCircle size={18} />}>Tickets</MenuItem>
        <MenuItem icon={<Image size={18} />}>Bg Images</MenuItem>

        <SubMenu label="Settings" icon={<Settings size={18} />}>
          <MenuItem>Site Settings</MenuItem>
          <MenuItem>Currency</MenuItem>
          <SubMenu label="Product">
            <MenuItem>Category</MenuItem>
            <MenuItem>Attribute</MenuItem>
            <MenuItem>Material</MenuItem>
            <MenuItem>Tag</MenuItem>
          </SubMenu>
          <MenuItem>Role Based Access</MenuItem>
          <MenuItem>Role Management</MenuItem>
          <MenuItem>Shipping Cost</MenuItem>
          <MenuItem>Bid Increments</MenuItem>
          <MenuItem>Shipping Weight</MenuItem>
          <MenuItem>Social Media</MenuItem>
          <MenuItem>Ticket (Subject)</MenuItem>
          <MenuItem>Permission</MenuItem>
          <MenuItem>Return Condition</MenuItem>
          <MenuItem>Refund Deduction</MenuItem>
          <MenuItem>Banner Setting</MenuItem>
          <MenuItem>Popup Banner</MenuItem>
        </SubMenu>

        <MenuItem icon={<Monitor size={18} />}>Virtual Exhibition</MenuItem>
        <MenuItem icon={<Store size={18} />}>Physical Exhibition</MenuItem>

        <SubMenu label="Footer" icon={<Layout size={18} />}>
          <MenuItem>Footer Category</MenuItem>
          <MenuItem>Artist Support</MenuItem>
          <MenuItem>Buyer Support</MenuItem>
          <MenuItem>Faqs Support</MenuItem>
          <MenuItem>Contact Us</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default AppSidebar;
