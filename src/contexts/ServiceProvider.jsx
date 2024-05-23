import { createContext, useState, useEffect } from "react";
import {
  createService,
  getAllServices,
  getAllServicesCreatedByUser,
  updateService,
  getLikedServices,
} from "@/functions/serviceFunc";
import useAlert from "@/hooks/useAlert";
import useAuth from "@/hooks/useAuth";

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

  const getSLikedServices = async (idUser) => {
    try {
      const { data, error } = await getAllServicesCreatedByUser(idUser);
      if (error) throw error;
      setCreatedServices(data);
    } catch (error) {
      setErrorAlert(error.message);
    }
  };

  const servicesLikedByUser = async (idUser) => {
    try {
      const { data, error } = await getLikedServices(idUser);
      if (error) throw error;
      setCreatedServices(data);
    } catch (error) {
      setErrorAlert(error.message);
    }
  };

  const getServices = async () => {
    try {
      const { error, data } = await getAllServices();
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
