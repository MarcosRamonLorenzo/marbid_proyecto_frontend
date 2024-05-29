import { useEffect } from "react";
import Sidebar from "../components/dashboard/Sidebar.jsx";
import SidebarItem from "../components/dashboard/SidebarItem.jsx";
import { ScrollText, BookText, Heart, Settings } from "lucide-react";
import { Outlet, useNavigate,useLocation } from "react-router-dom";

const Dashboard = () => {
  const { pathname }= useLocation();
  const  navigate  = useNavigate();

  //To redirect beacuse panel-control page not exists.
  useEffect(() => {
    if(pathname === "/panel-control"){
      navigate("/panel-control/profile")
    }
  }, [])
  

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
