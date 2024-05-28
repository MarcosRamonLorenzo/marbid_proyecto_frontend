import { Link } from "react-router-dom";
import Header from "../components/shared-componentes/Header.jsx";
import "./scss/NotFound.scss";
import { Button,Image } from "@nextui-org/react";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="container-not-found dark:bg-[#232323]">
        <div className="flex flex-col items-center justify-center">
          <Image src="https://firebasestorage.googleapis.com/v0/b/marbid-69744.appspot.com/o/logos-icons%2Fmarbid.svg?alt=media&token=d7d1cd99-faf3-4542-84bf-ea24fbb8f025" alt="404" width={80} /> 
          <h1>Página no encontrada</h1>
          <p>Lo sentimos, la página que estás buscando no existe.</p>
          <Link to="/"><Button className="third-color-class text-white mt-4">Volver al inicio</Button></Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
