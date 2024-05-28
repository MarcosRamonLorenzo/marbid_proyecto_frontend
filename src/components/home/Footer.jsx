import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-800 flex flex-col justify-center items-start md:items-center py-4 text-white pl-5 w-100 ">
      <div className="flex flex-col md:flex-row md:gap-20  gap-5 justify-start items-start my-5">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/marbid-69744.appspot.com/o/logos-icons%2Fmarbid.svg?alt=media&token=d7d1cd99-faf3-4542-84bf-ea24fbb8f025"
          loading="lazy"
          alt=""
          className=" md:h-14 h-10"
        />
        <div className="mb-4">
          <h3 className="font-bold text-xl mb-2">Freelancers</h3>
          <Link href="#" className="block hover:text-pink-500">
            Categorías
          </Link>
          <Link href="#" className="block hover:text-pink-500">
            Inicio
          </Link>
          <Link href="#" className="block hover:text-pink-500">
            Verificate
          </Link>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-xl mb-2">Terminos</h3>
          <Link to={"/conditions"} className="block hover:text-pink-500">
            Política de privacidad
          </Link>
          <Link  to={"/conditions"} className="block hover:text-pink-500">
            Términos y condiciones
          </Link>
          <Link  to={"/conditions"} className="block hover:text-pink-500">
            Cargos y tarifas
          </Link>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-xl mb-2">Redes Sociales</h3>
          <div className="flex justify-start space-x-4">
            <Link href="#" target="_blank">
              {" "}
              <Instagram />
            </Link>
            <Link href="#" target="_blank">
              {" "}
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-sm">&copy; 2024 My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
