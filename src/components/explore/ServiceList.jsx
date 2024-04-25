import React from "react";
import CardAnuncio from "../services/ServiceCard.jsx";
import useDataFetch from "@/hooks/useDataFetch.js";
import Loading from "../shared-componentes/Loading.jsx";
import configUrl from "@/config/apis.config.js";

const ServiceList = () => {
  const { data: services, isLoading } = useDataFetch(
    "services",
    `${configUrl}/service`
  );

  return (
    <>
      <div className="gap-x-5 gap-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {isLoading ? (
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
