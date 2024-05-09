import React from "react";
import Sidebar from "../components/dashboard/Sidebar.jsx";
import SidebarItem from "../components/dashboard/SidebarItem.jsx";
import { ScrollText, BookText, Heart, Settings } from "lucide-react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard panel-control flex gap-20">
      <div className="">
        <Sidebar>
          <SidebarItem
            icon={<BookText />}
            text="Servicios Creados"
            path="servicios-creados"
          />
          <SidebarItem
            icon={<Heart />}  
            text="Servicios Gustados"
            path="favoritos"
          />
          <SidebarItem
            icon={<ScrollText />}
            text="Servicios Aplicados"
            path="servicios-aplicados"
          />
          <SidebarItem icon={<Settings />} text="Ajustes" path="ajustes" />
        </Sidebar>
      </div>
      {/* Pongo padinbg left para que se vea el contenedor de dentro.  */}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
