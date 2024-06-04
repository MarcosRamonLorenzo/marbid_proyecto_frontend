import ServiceCard from "@/components/services/ServiceCard";
import LoadingCards from "@/components/shared-componentes/Loadings/LoadingCards";
import { useNavigate } from "react-router-dom";

const CreatedServicesList = ({
  createdServices = [],
  isLoading,
  className = "",
}) => {

  const navigate = useNavigate();

  return (
    <>
      {isLoading && <LoadingCards className={className} />}
      {createdServices.length ? (
        <div className={className}>
          {createdServices.map((item, index) => (
            <ServiceCard item={item} key={index} onClick={()=>{navigate(`/servicio/${item?.id}`)}} />
          ))}
        </div>
      ) : (
        <h1>Aun no has creado ningún servicio</h1>
      )}
    </>
  );
};

export default CreatedServicesList;
