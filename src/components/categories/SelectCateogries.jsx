import { Select, SelectItem } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import useCategory from "@/hooks/useCategory.js";
import LoadingCards from "@/components/shared-componentes/Loadings/LoadingCards";

const SelectCateogries = ({
  onChange,
  variant = "flat",
  create = false,
  categorySelected = null,
}) => {
  const { categories, getAllCategories, isLoading } = useCategory();

  const [categoryCreated, setCategoryCreated] = useState(null);

  const handleCategoryCreated = (category) => {
    setCategoryCreated(category);
  };

  console.log(categorySelected);

  useEffect(() => {
    if (categorySelected) handleCategoryCreated(categorySelected);
    getAllCategories(null, create);
  }, []);

  return (
    <>
      {isLoading && <LoadingCards className={""} />}
      <Select
        variant={variant}
        label="Selecciona una categoría"
        className="max-w-xs"
        radius="sm"
        name="category"
        onChange={onChange}
      >
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <SelectItem key={category.id} value={category.name}>
              {category.name}
            </SelectItem>
          ))
        ) : (
          <SelectItem value="" disabled>
            No categories available
          </SelectItem>
        )}
      </Select>
    </>
  );
};

export default SelectCateogries;
