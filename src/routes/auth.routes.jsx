import UserProfile from "@/pages/UserProfile";
import Dashboard from "@/pages/Dashboard";
import LikedServices from "@/pages/LikedServices";
import CreatedServices from "@/pages/CreatedServices";
import Settings from "@/pages/Settings";
import ServiceForm from "@/pages/ServiceForm";
import ServiceApplyRequests from "@/pages/ServiceApplyRequests";
import AppliedServices from "@/pages/AppliedServices";

const authRoutes = [
  { path: "/user", element: <UserProfile /> },
  {
    path: "/panel-control",
    element: <Dashboard />,
    children: [
      { path: "creacionAnuncio", element: <LikedServices /> },
      { path: "favoritos", element: <LikedServices /> },
      { path: "servicios-creados", element: <CreatedServices /> },
      { path: "servicios-aplicados", element: <AppliedServices /> },
      { path: "creacion-servicio", element: <ServiceForm /> },
      { path: "edicion-servicio/:idService", element: <ServiceForm edit={true} /> },
      { path: "usuarios-aplicados/:idService", element: <ServiceApplyRequests /> },
      { path: "ajustes", element: <Settings /> },
      { path: "profile", element: <UserProfile internal /> },
    ],
  },
];

export default authRoutes;
