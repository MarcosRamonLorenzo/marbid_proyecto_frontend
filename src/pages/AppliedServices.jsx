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

const AppliedServices = () => {
  const { currentUser } = useAuth();

  const [appliedServices, setAppliedServices] = useState([]);

  const { data, error, isLoading } = useDataFetch(
    "createdServices",
    `${apiUrl}/service/applied/${currentUser.uid}`
  );

  const { setError } = useAlert();

  useEffect(() => {
    if (data) {
      setAppliedServices(data);
    }
    if (error) {
      setError(error.message);
    }
  }, [data]);
  const navigate = useNavigate();

  return (
    <div className=" created-services mx-4 my-10 md:mx-24 md:my-20">
      <h2 className="text-3xl font-medium">Servicios Aplicados</h2>
      <Divider className="my-4" />
      <h3 className=" text-xl ml-3">Visualización</h3>
      <Tabs aria-label="Options" variant="underlined">
        {/* General View */}
        <Tab key="photos" title="General">
          <CreatedServicesList
            className={
              "gap-x-5 gap-y-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5"
            }
            createdServices={appliedServices}
            isLoading={isLoading}
          />
        </Tab>
        {/* Table View */}
        {appliedServices.length && (
          <Tab
            key="tabla"
            title="Tabla"
            aria-labelledby="created-services-table"
          >
            <CreatedServicesTable
              createdServices={appliedServices}
              setCreatedServices={setAppliedServices}
            />
          </Tab>
        )}
      </Tabs>
    </div>
  );
};

export default AppliedServices;
