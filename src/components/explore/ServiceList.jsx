import React from "react";
import ServiceCard from "../services/ServiceCard.jsx";
import useDataFetch from "@/hooks/useDataFetch.js";
import Loading from "../shared-componentes/Loadings/Loading.jsx";
import configUrl from "@/config/apis.config.js";
import useService from "@/hooks/useService.js";

const ServiceList = () => {
  const { data: services, isLoading } = useDataFetch("services",`${configUrl}/service`);
  const { navigateService } = useService();

  return (
    <>
      <div className="gap-x-5 gap-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {isLoading ? (
          <Loading />
        ) : services.length ? (
          services.map((item, index) => <ServiceCard item={item} key={index} onClick={()=>{navigateService(item.id)}} isLikeable />)
        ) : (
          <h1>No se han encontrado anuncios</h1>
        )}
      </div>
    </>
  );
};

export default ServiceList;
