import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDataFetch from "@/hooks/useDataFetch";
import apiUrl from "@/config/apis.config";
import useAuth from "@/hooks/useAuth";
import useAlert from "@/hooks/useAlert";

const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  const nullValue = null;
  const trueInitialValue = true;
  const falseInitialValue = false;
  const emptyValue = "";

  const { currentUser } = useAuth();

  const { setErrorService } = useAlert();

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

  const navegate = useNavigate();

  const handleLoading = (newLoginState) => {
    setLoading(newLoginState);
  };

  const handleCategoryFilter = async (category) => {
    setLoading(trueInitialValue);
    if (category) {
      try {
        const idCategory = await getIDCategoria(category);

        if (!idCategory || idCategory.length === 0) {
          throw new Error("Categoría no encontrada.");
        }
        // Hacer función.
        /*const { data, error } = await supabaseConexion
          .from("CATEGORIAS_EN_ANUNCIO")
          .select("id_anuncio(*)")
          .eq("id_categoria", idCategory);*/

        //Cogemos los datos de la categoría de la consulta.
        const serviceData = data.map((service) => service.id);

        setLoading(falseInitialValue);
        setService(serviceData);
      } catch (error) {
        setLoading(falseInitialValue);
        setErrorFiltred(error.message);
      }
    } else {
      obtenerAnuncios();
      setLoading(falseInitialValue);
    }
  };

  const getCategories = async () => {
    try {
      // hacer esto bien.
      /*const { data, error } = await supabaseConexion
        .from("CATEGORIA")
        .select("*");*/

      if (error) throw error;

      setCategories(data);
    } catch (error) {
      setErrorCategory(error.message);
    }
  };

  const getCategoryID = async (categoryID) => {
    return categoryID;
  };

  //Funcion para formatear la fecha y hora de los anuncios.
  const formatServiceDate = (dateChain) => {
    const date = new Date(dateChain);

    // Formating the date to DD/MM/AAAA format.
    const formatDate = date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

    // Formating the hour to HH:MM:SS format.
    const formatHour = date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return `${formatDate} ${formatHour}`;
  };

  const servicesCreatedByUser = async () => {
    if (isLoadingUserServices) {
      setLoading(true);
    }

    if (!errorUserServices) {
      setCreatedServices(dataUserServices);
    } else {
      setErrorService(errorUserServices.message);
    }
  };

  const getServices = async () => {
    if (isLoadingAllServices) {
      setLoading(true);
    }

    if (!errorAllServices) {
      setServices(dataAllServices);
    } else {
      setErrorService(errorAllServices.message);
    }
  };

  // useEffect inicial.
  useEffect(() => {
    getServices();
  }, []);

  // useEffect service por usuario.
  useEffect(() => {
    if (currentUser) {
      servicesCreatedByUser();
    }
  }, [currentUser]);

  const provideValues = {
    sevices,
    createdServices,
    loading,
    handleLoading,
  };

  return (
    <ServiceContext.Provider value={provideValues}>
      {children}
    </ServiceContext.Provider>
  );
};

export { ServiceContext, ServiceProvider };
