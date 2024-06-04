import { useEffect, useState } from "react";
import { CirclePlus } from "lucide-react";
import { Divider, Tabs, Tab, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import useDataFetch from "@/hooks/useDataFetch";
import apiUrl from "@/config/apis.config";
import useAlert from "@/hooks/useAlert";
import CreatedServicesList from "@/components/services/CreatedServicesList";
import CreatedServicesTable from "@/components/services/CreatedServicesTable";
import useService from "@/hooks/useService";

const CreatedServices = () => {
  const { currentUser } = useAuth();
  const { setFormService, initialFormState } = useService();

  const [createdServices, setCreatedServices] = useState([]);

  const { data, error, isLoading } = useDataFetch(
    "createdServices",
    `${apiUrl}/service/created/${currentUser.uid}`
  );

  const { setError } = useAlert();

  useEffect(() => {
    if (data) {
      setCreatedServices(data);
    }
    if (error) {
      setError(error.message);
    }
  }, [data]);
  const navigate = useNavigate();

  return (
    <div className=" created-services mx-4 my-10 md:mx-24 md:my-20">
      <div className="flex items-center jusatify-center gap-5">
        <h2 className="text-3xl font-medium">Servicios Creados</h2>
        <Button
          className="flex items-center bg-blue-400 text-white gap-1 px-4 py-2 cursor-pointer  font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3 "
          endContent={<CirclePlus />}
          onClick={() => {
            setFormService(initialFormState);
            navigate("/panel-control/creacion-servicio");
          }}
        >
          Crear Anuncio
        </Button>
      </div>
      <Divider className="my-4" />
      <h3 className=" text-xl ml-3">Visualización</h3>
      <Tabs aria-label="Options" variant="underlined">
        {/* General View */}
        <Tab key="photos" title="General">
          <CreatedServicesList
            className={
              "gap-x-5 gap-y-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5"
            }
            createdServices={createdServices}
            isLoading={isLoading}
          />
        </Tab>
        {/* Table View */}
        {createdServices.length && (
          <Tab
            key="tabla"
            title="Tabla"
            aria-labelledby="created-services-table"
          >
            <CreatedServicesTable
              createdServices={createdServices}
              setCreatedServices={setCreatedServices}
            />
          </Tab>
        )}
      </Tabs>
    </div>
  );
};

export default CreatedServices;
