import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDataFetch from "@/hooks/useDataFetch";
import apiUrl from "@/config/apis.config";
import useAuth from "@/hooks/useAuth";
import useAlert from "@/hooks/useAlert";

const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  const { setSuccessAlert, setErrorAlert } = useAlert();
  const { currentUser } = useAuth();

  const nullValue = null;

  const initialFormState = {
    title: "",
    price: "",
    content: "",
    category: "",
    image: "",
    authorCreated: currentUser?.uid,
  };

  // Getters of services and services by users.
  const { dataAllServices, errorAllServices, isLoadingAllServices } =
    useDataFetch("createdServices", `${apiUrl}/service/`);

  const { dataUserServices, errorUserServices, isLoadingUserServices } =
    useDataFetch(
      "createdServices",
      `${apiUrl}/service/created/${currentUser.uid}`
    );

  const initialFormState = {
    title: "",
    price: "",
    content: "",
    category: "",
    image: "",
  };

  const [sevices, setServices] = useState(nullValue);
  const [loading, setLoading] = useState(falseInitialValue);
  const [selectedServices, setSelectedServices] = useState(nullValue);
  const [createdServices, setCreatedServices] = useState(nullValue);
  const [errorCategory, setErrorCategory] = useState(emptyValue);
  const [categories, setCategories] = useState(nullValue);
  const [errorFiltred, setErrorFiltred] = useState(emptyValue);
  const [formService, setFormService] = useState(initialFormState);
  const [sevices, setServices] = useState(nullValue);
  const [createdServices, setCreatedServices] = useState(nullValue);

  const handleCreateService = async () => {
    try {
      const response = await createService(formService);
      if (condition) throw response.error;
      setSuccessAlert("Servicio creado con éxito");
    } catch (error) {
      setErrorAlert(error.message);
    }
  };

  const handleUpdateService = async () => {
    try {
      await updateService(formService);
      setSuccessAlert("Servicio editado con éxito");
    } catch (error) {
      setErrorAlert(error.message);
    }
  };

  /* */

  const servicesCreatedByUser = async (idUser) => {
      try {
        const { data , error } = await getAllServicesCreatedByUser(idUser);
        if (error) throw error ;
        setCreatedServices(data);
      } catch (error) {
        setErrorAlert(error.message);
      }
  };

  const getServices = async () => {

    try {
      const {error, data } = await getAllServices();
      if (error) throw error;
      setServices(data);
    } catch (error) {
      setErrorAlert(error.message);
    }
  };


  const value = {
    formService,
    setFormService,
    handleCreateService,
    handleUpdateService,
  };

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};

export { ServiceContext, ServiceProvider };
