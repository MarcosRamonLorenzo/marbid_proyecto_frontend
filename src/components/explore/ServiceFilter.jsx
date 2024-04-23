import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import useFetch from "../../hooks/useFetch";

const ServiceFilter = () => {
  const {
    response: { data: categories },
    error,
  } = useFetch("https://marbid-backed.onrender.com/api/categories");

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
