import { Routes, Route } from "react-router-dom";
import useAuth from "@/hooks/useAuth.js";
import publicRoutes from "@/routes/public.routes";
import authRoutes from "@/routes/auth.routes";
import Loading from "@/components/shared-componentes/Loadings/Loading";
import AlertError from "./components/shared-componentes/alerts_errors/AlertError";
import AlertSuccess from "./components/shared-componentes/alerts_sucess/AlertSucess";
import useAlert from "./hooks/useAlert";
import useService from "./hooks/useService";
import ModalOpenViewImage from "./components/shared-componentes/modals/ModalOpenViewImage";

function App() {
  const { isLogin,currentUser, loading } = useAuth();
  const { alertError:{state:error}, alertSuccess:{state:success} } = useAlert();
  const {selectedPreviewImage,setSelectedPreviewImage} = useService();

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
      {/* Alert components */}
      {error && <AlertError />}
      {success && <AlertSuccess />}
      {selectedPreviewImage && <ModalOpenViewImage image={selectedPreviewImage} onClose={()=>{setSelectedPreviewImage(null)}} />}
    </>
  );
}

export default App;
