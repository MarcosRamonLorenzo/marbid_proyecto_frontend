import { Routes, Route } from "react-router-dom";
import useAuth from "@/hooks/useAuth.js";
import publicRoutes from "@/routes/public.routes";
import authRoutes from "@/routes/auth.routes";
import Loading from "@/components/shared-componentes/Loading";

function App() {
  const { isLogin,currentUser, loading } = useAuth();

  if (loading) {
    return <Loading />; // Muestra el componente de carga mientras se verifica el estado de autenticación
  }

  const routes = isLogin && currentUser ? [...publicRoutes, ...authRoutes] : publicRoutes;

  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((childRoute, childIndex) => (
                <Route
                  key={childIndex}
                  path={childRoute.path}
                  element={childRoute.element}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </>
  );
}

export default App;
