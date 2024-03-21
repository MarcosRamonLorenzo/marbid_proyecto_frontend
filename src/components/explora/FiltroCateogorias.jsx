import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
const FiltroCateogorias = () => {
  let animals = ["leon ", "tigre", "elefante", "jirafa", "mono"];
  return (
    <Autocomplete label="Select an animal" className="max-w-xs " radius="sm">
      {animals.map((animal, i) => (
        <AutocompleteItem key={i} value={animal}>
          {animal}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};

export default FiltroCateogorias;
