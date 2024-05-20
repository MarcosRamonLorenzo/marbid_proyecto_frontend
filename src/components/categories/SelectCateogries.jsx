import React, { useEffect } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import useCategory from "@/hooks/useCategory.js";

const SelectCateogries = ({ onChange, variant = "flat" }) => {
  const { categories, getAllCategories } = useCategory();

  useEffect(() => {
    getAllCategories();
  }, [categories]);

  return (
    <Autocomplete
      variant={variant}
      label="Selecciona una categoría"
      className="max-w-xs"
      radius="sm"
      onChange={onChange}
    >
      {categories &&
        categories.length &&
        categories.map((category) => (
          <AutocompleteItem key={category.id} value={category.name}>
            {category.name}
          </AutocompleteItem>
        ))}
    </Autocomplete>
  );
};

export default SelectCateogries;
