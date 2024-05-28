import React, { useEffect } from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Select,
  SelectItem,
} from "@nextui-org/react";
import useCategory from "@/hooks/useCategory.js";

const SelectCateogries = ({ onChange, variant = "flat" }) => {
  const { categories, getAllCategories } = useCategory();

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <Select
      variant={variant}
      label="Selecciona una categoría"
      className="max-w-xs"
      radius="sm"
      onChange={onChange}
      
    >
      {categories &&
        categories.length &&
        categories.map((category) => (
          <SelectItem key={category.id} value={category.name}>
            {category.name}
          </SelectItem>
        ))}
    </Select>
  );
};

export default SelectCateogries;
