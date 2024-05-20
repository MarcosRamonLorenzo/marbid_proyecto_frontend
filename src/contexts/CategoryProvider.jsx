import { useState, createContext } from "react";
import { getAllCategoriesResponse } from "@/functions/categoryFunc";
import useAlert from "@/hooks/useAlert";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const { setErrorAlert } = useAlert();

  const nullValue = null;

  const [categories, setCategories] = useState(nullValue);

  const getAllCategories = async () => {
    try {
      const { error, data } = await getAllCategoriesResponse();

      if (error) throw error;

      console.log(data);
      setCategories(data);
    } catch (error) {
      setErrorAlert(error.message);
    }
  };

  const providerValues = { categories, getAllCategories };

  return (
    <CategoryContext.Provider value={providerValues}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext };
export default CategoryProvider;
