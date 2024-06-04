import { useState, createContext } from "react";
import {
  getAllCategoriesResponse,
  getCategoryByIdResponse,
  getCategorySelectedResponse,
} from "@/functions/categoryFunc";
import useAlert from "@/hooks/useAlert";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const { setErrorAlert } = useAlert();

  const nullValue = null;
  const falseValue = false;
  const allCategories = {
    id: "",
    name: "Todas las categorías",
  };

  const [categories, setCategories] = useState(nullValue);
  const [categoryById, setCategoryById] = useState(nullValue);
  const [nameSelectedCategory, setNameSelectedCategory] = useState(nullValue);
  const [isLoading, setLoading] = useState(falseValue);

  const getAllCategories = async (category, create = false) => {
    if (!category) {
      try {
        setLoading(true);
        const { error, data } = await getAllCategoriesResponse();

        if (error) throw error;

        // Sort categories alphabetically.
        const sortedCategories = data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        // If you are editing or creating a service allCa
        if (create) {
          const addAllCategories = [...sortedCategories, allCategories];
          addAllCategories.pop();
          setCategories(addAllCategories);
        } else {
          const addAllCategories = [...sortedCategories, allCategories];
          setCategories(addAllCategories);
        }

        setLoading(falseValue);
      } catch (error) {
        setLoading(falseValue);
        setErrorAlert(error.message);
      }
    } else {
      try {
        return getCategoryById(category);
      } catch (error) {
        setLoading(falseValue);
        setErrorAlert(error.message);
      }
    }
  };

  const getCategoryById = async (category) => {
    if (category) {
      try {
        const { error, data } = await getCategoryByIdResponse(category);

        if (error) throw error;

        setCategoryById(data);
      } catch (error) {
        setLoading(falseValue);
        setErrorAlert(error.message);
      }
    }
    return null;
  };

  const getCategoryName = async (category) => {
    if (category) {
      try {
        setLoading(true);
        const { error, data } = await getCategoryByIdResponse(category);

        if (error) throw error;

        setNameSelectedCategory(data.name);
      } catch (error) {
        setLoading(falseValue);
        setErrorAlert(error.message);
      }
    }
    return null;
  };

  const providerValues = {
    categories,
    categoryById,
    nameSelectedCategory,
    isLoading,
    getAllCategories,
    getCategoryById,
    getCategoryName,
  };

  return (
    <CategoryContext.Provider value={providerValues}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext };
export default CategoryProvider;
