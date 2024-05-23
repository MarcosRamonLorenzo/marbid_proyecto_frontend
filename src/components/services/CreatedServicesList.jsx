import ServiceCard from "@/components/services/ServiceCard";
import LoadingCards from "@/components/shared-componentes/Loadings/LoadingCards";

const CreatedServicesList = ({
  createdServices = [],
  isLoading,
  className = "",
}) => {
  return (
    <>
      {isLoading && <LoadingCards className={className} />}
      {createdServices.length ? (
        <div className={className}>
          {createdServices.map((item, index) => (
            <ServiceCard item={item} key={index} />
          ))}
        </div>
      ) : (
        <h1>Aun no has creado ningún servicio</h1>
      )}
    </>
  );
};

export default CreatedServicesList;
