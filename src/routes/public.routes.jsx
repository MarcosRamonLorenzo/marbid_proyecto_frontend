import { Route } from "react-router-dom";
import Home from "@/pages/Home";
import LogIn from "@/pages/LogIn";
import Explore from "@/pages/Explore";
import ServicePage from "@/pages/ServicePage";
import NotFound from "@/pages/NotFound";
import UserProfile from "@/pages/UserProfile";

const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/log-in", element: <LogIn /> },
  { path: "/sign-up", element: <LogIn isRegister={true} /> },
  { path: "/servicio/:serviceId", element: <ServicePage /> },
  { path: "/explora", element: <Explore /> },
  { path: "/*", element: <NotFound /> },
  { path: "/user/:idUser", element: <UserProfile /> },
];

export default publicRoutes;
