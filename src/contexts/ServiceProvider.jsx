import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  const nullValue = null;
  const trueInitialValue = true;
  const falseInitialValue = false;
  const emptyValue = "";

  const initialFormState = {
    title: "",
    price: "",
    content: "",
    category: "",
    image: "",
  };

  const [sevice, setService] = useState(nullValue);
  const [errorService, setErrorService] = useState(emptyValue);
  const [loading, setLoading] = useState(true);
  //Estado que alamacena el anuncio seleccionado que se visualizará en la pagina de anuuncio indvidual.
  const [selectedServices, setSelectedServices] = useState(nullValue);
  const [createdServices, setCreatedServices] = useState(nullValue);
  const [errorCategory, setErrorCategory] = useState(emptyValue);
  const [categories, setCategories] = useState(nullValue);
  const [errorFiltred, setErrorFiltred] = useState(emptyValue);
  const [formService, setFormService] = useState(initialFormState);

  const navegate = useNavigate();

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
    try {
      /*const { error, data } = await supabaseConexion
        .from("ANUNCIO")
        .select("*")
        .eq("id_usuario", estadoUsuario.id);*/

      setCreatedServices(data);
    } catch (error) {
      setErrorService(error.message);
    }
  };

  const getServices = async () => {
    try {
      /*const { data, error } = await supabaseConexion
        .from("ANUNCIO")
        .select("*");*/

      if (error) throw error;

      setService(data);
    } catch (error) {
      setErrorService(error.message);
    }
  };

  return (
    <ServiceContext.Provider value={[formService, setFormService]}>
      {children}
    </ServiceContext.Provider>
  );
};

export { ServiceContext, ServiceProvider };
