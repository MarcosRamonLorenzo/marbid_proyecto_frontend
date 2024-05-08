import { Link } from "react-router-dom";
import Header from "../components/shared-componentes/Header.jsx";
import "./scss/NotFound.scss";
import { Button,Image } from "@nextui-org/react";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="container-not-found">
        <div className="flex flex-col items-center justify-center">
          <Image src="\src\assets\marbid.svg" alt="404" width={80} /> 
          <h1>Página no encontrada</h1>
          <p>Lo sentimos, la página que estás buscando no existe.</p>
          <Link to="/"><Button className="third-color-class text-white mt-4">Volver al inicio</Button></Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
