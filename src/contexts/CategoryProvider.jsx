import { useState, createContext } from "react";
import {
  getAllCategoriesResponse,
  getCategoryByIdResponse,
} from "@/functions/categoryFunc";
import useAlert from "@/hooks/useAlert";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const { setErrorAlert } = useAlert();

  const nullValue = null;
  const allCategories = {
    id: "",
    name: "Todas las categorías",
  };

  const [categories, setCategories] = useState(nullValue);
  const [categoryById, setCategoryById] = useState(nullValue);
  const [nameSelectedCategory, setNameSelectedCategory] = useState(nullValue);

  const getAllCategories = async () => {
    try {
      const { error, data } = await getAllCategoriesResponse();

      if (error) throw error;

      // Sort categories alphabetically.
      const sortedCategories = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      const addAllCategories = [...sortedCategories, allCategories];

      setCategories(addAllCategories);
    } catch (error) {
      setErrorAlert(error.message);
    }
  };

  const getCategoryById = async (category) => {
    if (category) {
      try {
        const { error, data } = await getCategoryByIdResponse(category);

        if (error) throw error;

        setCategoryById(data);
      } catch (error) {
        setErrorAlert(error.message);
      }
    }
    return null;
  };

  const getCategoryName = async (category) => {
    if (category) {
      try {
        const { error, data } = await getCategoryByIdResponse(category);

        if (error) throw error;

        setNameSelectedCategory(data.name);
      } catch (error) {
        setErrorAlert(error.message);
      }
    }
    return null;
  };

  const providerValues = {
    categories,
    categoryById,
    nameSelectedCategory,
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
