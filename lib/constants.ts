import {
  Home,
  SmartphoneNfc,
  UserPlus,
  Handshake,
  Calendar,
  Box,
  Users,
  Star,
  LayoutDashboardIcon,
} from "lucide-react";

export const menuItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
    icon: Home,
    current: true,
  },
  {
    id: 2,
    label: "Products",
    href: "/products",
    icon: Handshake,
    current: false,
  },
  {
    id: 3,
    label: "Contact",
    href: "/contact",
    icon: SmartphoneNfc,
    current: false,
  },
  {
    id: 4,
    label: "About",
    href: "/about",
    icon: UserPlus,
    current: false,
  },
];

export const dashboardMenu = [
  {
    id: 1,
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboardIcon,
    current: false,
    color: "#202020",
  },
  {
    id: 2,
    label: "Products",
    href: "/dashboard/products",
    icon: Handshake,
    current: false,
    color: "#20283E",
  },
  {
    id: 3,
    label: "Category",
    href: "/dashboard/categories",
    icon: Box,
    current: false,
    color: "#25476A",
  },
  {
    id: 4,
    label: "Orders",
    href: "/dashboard/orders",
    icon: Calendar,
    current: false,
    color: "#191C24",
  },
  {
    id: 5,
    label: "Users",
    href: "/dashboard/users",
    icon: Users,
    current: false,
    color: "#1E1E2C",
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const shoes: Array<{ thumbnail: string; bigShoe: string }> = [
  {
    thumbnail: "/images/hero-1.png",
    bigShoe: "/images/hero-1.png",
  },
  {
    thumbnail: "/images/WhatsApp Image 2025-01-06 at 09.24.41 (2).jpeg",
    bigShoe: "/images/WhatsApp Image 2025-01-06 at 09.24.41 (2).jpeg",
  },
  {
    thumbnail: "/images/WhatsApp Image 2025-01-06 at 09.26.22.jpeg",
    bigShoe: "/images/WhatsApp Image 2025-01-06 at 09.26.22.jpeg",
  },
];
