import ServiceCard from "@/components/services/ServiceCard";
import LoadingCards from "@/components/shared-componentes/Loadings/LoadingCards";

const CreatedServicesList = ({createdServices=[] , isLoading}) => {
  return (
    <>
    {isLoading && <LoadingCards />}
    {createdServices.length ? (
      createdServices.map((item, index) => (
        <ServiceCard item={item} key={index} />
      ))
    ) : (
      <h1>Aun no has creado ningún servicio</h1>
    )}
    </>
  )
}

export default CreatedServicesList