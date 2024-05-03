import UserProfile from "@/pages/UserProfile";
import Dashboard from "@/pages/Dashboard";
import LikedServices from "@/pages/LikedServices";
import CreatedServices from "@/pages/CreatedServices";
import Settings from "@/pages/Settings";

const authRoutes = [
  { path: "/user", element: <UserProfile /> },
  {
    path: "/panelControl",
    element: <Dashboard />,
    children: [
      { path: "creacionAnuncio", element: <LikedServices /> },
      { path: "favoritos", element: <LikedServices /> },
      { path: "servicios-creados", element: <CreatedServices /> },
      { path: "servicios-aplicados", element: <CreatedServices /> },
      { path: "ajustes", element: <Settings /> },
      { path: "profile", element: <UserProfile internal /> },
    ],
  },
];

export default authRoutes;
