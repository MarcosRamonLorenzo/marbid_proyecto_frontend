import { createContext, useState,useEffect } from "react";
import { createService, getAllServices, getAllServicesCreatedByUser, updateService } from "@/functions/serviceFunc";
import useAlert from "@/hooks/useAlert";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  const { setSuccessAlert, setErrorAlert } = useAlert();
  const { currentUser } = useAuth();
  const  navigate  = useNavigate();

  const nullValue = null;

  const initialFormState = {
    title: "",
    price: "",
    content: "",
    category: "",
    image: "",
    authorCreated: currentUser?.uid,
  };

  const [formService, setFormService] = useState(initialFormState);
  const [sevices, setServices] = useState(nullValue);
  const [createdServices, setCreatedServices] = useState(nullValue);

  const handleCreateService = async () => {
    try {
      const response = await createService(formService);
      if (response.error) throw response.error;
      setSuccessAlert("Servicio creado con éxito");
      navigate(`/panel-control/servicios-creados`);
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
