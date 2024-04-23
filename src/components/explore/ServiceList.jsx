import React from "react";
import CardAnuncio from "../services/ServiceCard.jsx";
import useFetch from "../../hooks/useFetch.js";
import Loading from "../shared-componentes/Loading.jsx";

const ServiceList = () => {
  const services = useFetch("https://marbid-backed.onrender.com/api/service");

  return (
    <>
      <div className="gap-x-5 gap-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {services.loading ? (
          <Loading />
        ) : services.length ? (
          services.map((item, index) => <CardAnuncio item={item} key={index} />)
        ) : (
          <h1>No se han encontrado anuncios</h1>
        )}
      </div>
    </>
  );
};

export default ServiceList;
