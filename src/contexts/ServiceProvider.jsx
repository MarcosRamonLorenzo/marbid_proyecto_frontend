import { createContext, useState, useEffect } from "react";
import useCategory from "@/hooks/useCategory.js";
import {
  createService,
  getAllServices,
  getAllServicesCreatedByUser,
  updateService,
  validateService,
} from "@/functions/serviceFunc";
import useAlert from "@/hooks/useAlert";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  const {
    nameSelectedCategory,
    categoryById,
    getCategoryName,
    getCategoryById,
  } = useCategory();
  const { setSuccessAlert, setErrorAlert } = useAlert();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

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
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(false);
  const [createdServices, setCreatedServices] = useState(nullValue);
  const [selectedPreviewImage, setSelectedPreviewImage] = useState(nullValue);

  const handleCreateService = async () => {
    try {
      const validate = validateService(formService);
      if (validate) {
        setErrorAlert(validate);
      } else {
        const response = await createService(formService);
        if (response.error) throw response.error;
        setSuccessAlert("Servicio creado con éxito");
        navigate(`/panel-control/servicios-creados`);
      }
    } catch (error) {
      setErrorAlert(error.message);
    }
  };

  const handleUpdateService = async () => {
    try {
      const validate = validateService(formService);
      if (validate) {
        setErrorAlert(validate);
      } else {
        const response = await updateService(formService);
        if (response.error) throw response.error;
        setSuccessAlert("Servicio editado con éxito");
        navigate(`/panel-control/servicios-creados`);
      }
    } catch (error) {
      setErrorAlert(error.message);
    }
  };

  const servicesCreatedByUser = async (idUser) => {
    try {
      const { data, error } = await getAllServicesCreatedByUser(idUser);
      if (error) throw error;
      setCreatedServices(data);
    } catch (error) {
      setErrorAlert(error.message);
    }
  };

  const getServices = async () => {
    try {
      setLoadingServices(true);
      const { error, data } = await getAllServices();
      if (error) throw error;
      setServices(data);
      setFilteredServices(data);
    } catch (error) {
      setErrorAlert(error.message);
    } finally {
      setLoadingServices(false);
    }
  };

  const filterSearchServices = (filter) => {
    if (!filter || !filter.trim()) {
      setFilteredServices(services);
      return;
    }

    const lowerCaseFilter = filter.toLowerCase().trim();
    const newFilteredServices = services.filter((service) => {
      return (
        service.title.toLowerCase().startsWith(filter) ||
        service.authorCreated.name.toLowerCase().startsWith(filter)
      );
    });
    setFilteredServices(newFilteredServices);
  };

  useEffect(() => {
    if (services) {
      setFilteredServices(services);
    }
  }, [services]);

  const navigateService = (idService) => {
    navigate(`/servicio/${idService}`);
  };

  const filterByCategory = (category) => {
    getCategoryById(category);

    const newFilteredServices = services.filter((categoryById) => {
      return categoryById.category.id === category;
    });

    setFilteredServices(newFilteredServices);
  };

  const value = {
    filteredServices,
    filterSearchServices,
    filterByCategory,
    services,
    loadingServices,
    formService,
    getServices,
    setFormService,
    handleCreateService,
    handleUpdateService,
    selectedPreviewImage,
    setSelectedPreviewImage,
    navigateService,
  };

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};

export { ServiceContext, ServiceProvider };
