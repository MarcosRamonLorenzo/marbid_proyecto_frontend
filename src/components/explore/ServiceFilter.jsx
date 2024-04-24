import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import useFetch from "../../hooks/useFetch";
import configUrl from "@/config/apis.config.js";

const ServiceFilter = () => {
  const {
    response: { data: categories },
    error,
  } = useFetch(`${configUrl}/api/categories`);

  return (
    <Autocomplete label="Select a category" className="max-w-xs" radius="sm">
      {categories &&
        categories.map((category) => (
          <AutocompleteItem key={category.id} value={category.name}>
            {category.name}
          </AutocompleteItem>
        ))}
    </Autocomplete>
  );
};

export default ServiceFilter;
