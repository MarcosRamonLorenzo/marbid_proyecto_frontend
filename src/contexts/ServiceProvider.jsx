import { createContext, useState } from "react";
import { createService, updateService } from "@/functions/serviceFunc";
import useAlert from "@/hooks/useAlert";
import useAuth from "@/hooks/useAuth";

const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  const { setSuccessAlert, setErrorAlert } = useAlert();
  const { currentUser } = useAuth();

  const initialFormState = {
    title: "",
    price: "",
    content: "",
    category: "",
    image: "",
    authorCreated: currentUser.uid,
  };

  const [formService, setFormService] = useState(initialFormState);

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
