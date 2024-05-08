import Header from "../components/shared-componentes/Header.jsx";
import "./scss/NotFound.scss";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="container-not-found">
        <div className="text-center">
          <h1>Página no encontrada</h1>
          <p>Lo sentimos, la página que estás buscando no existe.</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
