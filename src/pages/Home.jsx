import React from "react";
import Header from "../components/shared-componentes/Header.jsx";
import { Instagram, Facebook } from "lucide-react";
import HeroSection from "../components/home/HeroSection.jsx";
import Collaborators from "../components/home/Collaborators.jsx";
import Categories from "../components/home/Cateogries.jsx";
import OfertasBuscadas from "../components/home/SearchServices.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Collaborators />
      <Categories />
      <OfertasBuscadas />
      <footer className="bg-gray-800 flex flex-col justify-center items-start md:items-center py-4 text-white pl-5 w-100 ">
        <div className="flex flex-col md:flex-row md:gap-20  gap-5 justify-start items-start my-5">
          <img
            src="/src/assets/marbid.svg"
            loading="lazy"
            alt=""
            className=" md:h-14 h-10"
          />
          <div className="mb-4">
            <h3 className="font-bold text-xl mb-2">Freelancers</h3>
            <a href="#" className="block hover:text-pink-500">
              Categorías
            </a>
            <a href="#" className="block hover:text-pink-500">
              Inicio
            </a>
            <a href="#" className="block hover:text-pink-500">
              Verificate
            </a>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-xl mb-2">Terminos</h3>
            <a href="#" className="block hover:text-pink-500">
              Política de privacidad
            </a>
            <a href="#" className="block hover:text-pink-500">
              Términos y condiciones
            </a>
            <a href="#" className="block hover:text-pink-500">
              Cargos y tarifas
            </a>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-xl mb-2">Redes Sociales</h3>
            <div className="flex justify-start space-x-4">
              <a href="#" target="_blank">
                {" "}
                <Instagram />
              </a>
              <a href="#" target="_blank">
                {" "}
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        <p className="text-sm">&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
