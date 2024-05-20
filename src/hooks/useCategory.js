import { useContext } from "react";
import { CategoryContext } from "@/contexts/CategoryProvider";

const useCategory = () => {
  const categoryContext = useContext(CategoryContext);

  return categoryContext;
};

export default useCategory;
