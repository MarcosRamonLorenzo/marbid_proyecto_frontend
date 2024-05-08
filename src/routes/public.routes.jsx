import { Route } from "react-router-dom";
import Home from "@/pages/Home";
import LogIn from "@/pages/LogIn";
import Explore from "@/pages/Explore";
import Service from "@/pages/Service";
import NotFound from "@/pages/NotFound";
import UserData from "@/components/user/UserData";

const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/log-in", element: <LogIn /> },
  { path: "/sign-up", element: <LogIn isRegister={true} /> },
  { path: "/anuncio/:idAnuncio", element: <Service /> },
  { path: "/explora", element: <Explore /> },
  { path: "/*", element: <NotFound /> },
  { path: "/user/:idUser", element: <UserData /> },
];

export default publicRoutes;
