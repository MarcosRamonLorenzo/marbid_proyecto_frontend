import React from "react";
import Sidebar from "../components/explora/Sidebar.jsx";
import SidebarItem from "../components/explora/SidebarItem.jsx";
import { LifeBuoy, Receipt, Boxes, Package } from "lucide-react";
import { Outlet } from "react-router-dom";

const Explora = () => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar>
          <SidebarItem icon={<LifeBuoy />} text="Soporte" />
          <SidebarItem icon={<Receipt />} text="Facturas" />
          <SidebarItem icon={<Boxes />} text="Productos" />
          <SidebarItem icon={<Package />} text="Envíos" />
        </Sidebar>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Explora;
