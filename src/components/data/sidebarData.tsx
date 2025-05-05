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
} from "lucide-react";
import { ReactNode } from "react";

interface MenuItemType {
  label: string;
  icon?: ReactNode;
  to?: string;
  children?: MenuItemType[];
}

const sidebarData: MenuItemType[] = [
  {
    label: "Home",
    icon: <Home size={18} />,
    children: [
      { label: "Overview", to: "/home" },
      { label: "Analytics", to: "/home/analytics" },
    ],
  },
  {
    label: "Products",
    icon: <Package size={18} />,
    children: [
      { label: "Overview" },
      { label: "Add Auction" },
      { label: "Auction List" },
      { label: "Product List" },
      { label: "Sold Product List" },
      { label: "Not For Sale" },
    ],
  },
  {
    label: "Orders",
    icon: <ShoppingCart size={18} />,
    children: [
      { label: "Overview" },
      { label: "Order List" },
      { label: "Order Tracking" },
      { label: "Order Returns" },
      { label: "Cancelled Order" },
      { label: "Manual Order" },
    ],
  },
  {
    label: "Finance",
    icon: <Wallet size={18} />,
    children: [
      { label: "Overview" },
      { label: "Invoice List" },
      { label: "Withdraw" },
    ],
  },
  {
    label: "Users",
    icon: <Users size={18} />,
    children: [
      { label: "Supplier List" },
      { label: "Feature Artists" },
      { label: "Customer List" },
      { label: "Reviewer List" },
      { label: "Cart / Wishlist List" },
    ],
  },
  {
    label: "Blogs",
    icon: <FileText size={18} />,
    children: [
      { label: "Overview" },
      { label: "Blog Category" },
      { label: "Blog Tags" },
    ],
  },
  { label: "Coupons", icon: <Percent size={18} /> },
  { label: "Subscribers", icon: <Mail size={18} /> },
  { label: "Tickets", icon: <HelpCircle size={18} /> },
  { label: "Bg Images", icon: <Image size={18} /> },
  {
    label: "Settings",
    icon: <Settings size={18} />,
    children: [
      { label: "Site Settings" },
      { label: "Currency" },
      {
        label: "Product",
        children: [
          { label: "Category" },
          { label: "Attribute" },
          { label: "Material" },
          { label: "Tag" },
        ],
      },
      { label: "Role Based Access" },
      { label: "Role Management" },
      { label: "Shipping Cost" },
      { label: "Bid Increments" },
      { label: "Shipping Weight" },
      { label: "Social Media" },
      { label: "Ticket (Subject)" },
      { label: "Permission" },
      { label: "Return Condition" },
      { label: "Refund Deduction" },
      { label: "Banner Setting" },
      { label: "Popup Banner" },
    ],
  },
  { label: "Virtual Exhibition", icon: <Monitor size={18} /> },
  { label: "Physical Exhibition", icon: <Store size={18} /> },
  {
    label: "Footer",
    icon: <Layout size={18} />,
    children: [
      { label: "Footer Category" },
      { label: "Artist Support" },
      { label: "Buyer Support" },
      { label: "Faqs Support" },
      { label: "Contact Us" },
    ],
  },
];

export default sidebarData;
