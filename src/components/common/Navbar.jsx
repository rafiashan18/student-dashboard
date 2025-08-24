import { NavLink } from "react-router-dom";
import { Home, BookOpen, Calendar, List, Settings } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home, path: "/" },
  { label: "My Courses", icon: BookOpen, path: "/courses" },
  { label: "My Calendar", icon: Calendar, path: "/calendar" },
  { label: "My Learning Plan", icon: List, path: "/plan" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

const Navbar = () => {
  return (
    <nav className="pl-6 flex flex-col md:gap-6 gap-5 ">
      {navItems.map(({ label, icon: Icon, path }) => (
        <NavLink
          key={label}
          to={path}
          className={({ isActive }) =>
            `flex items-center gap-2 mt-2   
            ${
              isActive
                ? "text-hover border-r-4 font-bold  border-search-border pr-4"
                : "text-default font-medium hover:text-hover"
            }`
          }
        >
          <Icon size={20} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
