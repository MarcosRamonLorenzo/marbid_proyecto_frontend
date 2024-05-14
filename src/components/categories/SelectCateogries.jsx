import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import useDataFetch from "@/hooks/useDataFetch.js";
import configUrl from "@/config/apis.config.js";

const SelectCateogries = ({ onChange, variant = "flat" }) => {
  const { data: categories, isLoading } = useDataFetch(
    "categories",
    `${configUrl}/categories`
  );

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