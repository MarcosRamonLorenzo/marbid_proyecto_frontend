import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDataFetch from "@/hooks/useDataFetch";
import apiUrl from "@/config/apis.config";
import Loading from "@/components/shared-componentes/Loadings/Loading";
import ApplyRequest from "@/components/applyRequests/ApplyRequest";

const ServiceApplyRequests = () => {
  const { idService } = useParams();
  const { data, isLoading } = useDataFetch(
    `apply_request_${idService}`,
    `${apiUrl}/service/service-requests/${idService}`
  );

  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mx-5 my-10 2xl:mx-24 2xl:my-20">
      <h2 className="text-3xl font-medium">Usarios Aplicados para el servicio.</h2>
      <div className="my-3">
        {data && data.length > 0 ? (
          data.map((request) => (
            
           <ApplyRequest key={request.id} request={request}   />
            
          ))
        ) : (
          <div>
            De momento no hay usuario que han aplicado para este servicio.
            <span
              className="cursor-pointer  font-bold underline color-blue-500 "
              onClick={() => {
                navigate(-1);
              }}
            >
              Volver
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceApplyRequests;
