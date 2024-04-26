import { Route } from "react-router-dom";
import Home from "@/pages/Home";
import LogIn from "@/pages/LogIn";
import Explore from "@/pages/Explore";
import Service from "@/pages/Service";

const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/log-in", element: <LogIn /> },
  { path: "/sign-up", element: <LogIn isRegister={true} /> },
  { path: "/anuncio/:idAnuncio", element: <Service /> },
  { path: "/explora", element: <Explore /> },
];

export default publicRoutes;
