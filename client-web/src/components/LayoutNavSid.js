import { Outlet } from "react-router-dom";
import NavbarWeb from "./navbar/Navbar";
import SidebarWeb from "./aside/Sidebar";
function LayoutNavSid() {
  return (
    <div>
      <NavbarWeb />
      <SidebarWeb />
      <Outlet />
    </div>
  );
}

export default LayoutNavSid;
