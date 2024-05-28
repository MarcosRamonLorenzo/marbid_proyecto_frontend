import React from "react";
import Header from "../components/shared-componentes/Header.jsx";
import HeroSection from "../components/home/HeroSection.jsx";
import Collaborators from "../components/home/Collaborators.jsx";
import Categories from "../components/home/Cateogries.jsx";
import OfertasBuscadas from "../components/home/SearchServices.jsx";
import Footer from "@/components/home/Footer.jsx";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <Collaborators />
      <Categories />
      <OfertasBuscadas />
      <Footer/>
    </div>
  );
};

export default Home;
