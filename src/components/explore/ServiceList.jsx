import React, { useEffect } from "react";
import ServiceCard from "../services/ServiceCard.jsx";
import Loading from "../shared-componentes/Loadings/Loading.jsx";
import useService from "@/hooks/useService.js";

const ServiceList = () => {
  const {
    filteredServices: services,
    loadingServices,
    getServices,
    navigateService,
  } = useService();

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <div className="gap-x-5 gap-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {loadingServices ? (
          <Loading />
        ) : services?.length ? (
          services.map((item, index) => (
            <ServiceCard
              item={item}
              key={index}
              onClick={() => {
                navigateService(item.id);
              }}
              isLikeable
            />
          ))
        ) : (
          <h1>No se han encontrado anuncios</h1>
        )}
      </div>
    </>
  );
};

export default ServiceList;
