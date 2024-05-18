import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import useDataFetch from "@/hooks/useDataFetch.js";
import configUrl from "@/config/apis.config.js";

const SelectCateogries = ({ onChange, variant = "flat" }) => {
  const { data: categories, isLoading } = useDataFetch(
    "categories",
    `${configUrl}/categories`
  );

  return (
    <Select
      variant={variant}
      label="Selecciona una categoría"
      className="max-w-xs"
      radius="sm"
      name="category"
      onChange={onChange}
    >
      {categories &&
        categories.length &&
        categories.map((category) => (
          <SelectItem  key={category.id} value={category.id}>
            {category.name}
          </SelectItem>
        ))}
    </Select>
  );
};

export default SelectCateogries;