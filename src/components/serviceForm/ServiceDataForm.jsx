import { Input, Textarea } from "@nextui-org/react";
import { Captions,Euro,NotebookPen   } from "lucide-react";
import React from "react";
import SelectCateogries from "../categories/SelectCateogries";

const ServiceDataForm = () => {
  return (
    <>
      <Input
        isClearable
        label="Título"
        placeholder="Introduce el título del servicio"
        variant="underlined"
        name="label"
        onChange={(e) => {}}
      />
      <Textarea
      
        className=" resize-y "
        label="Contenido"
        placeholder="Introduce el contenido del servicio"
        variant="underlined"
        name="label"
        onChange={(e) => {} }
      />
      <Input
        endContent={
          <Euro  className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Precio"
        placeholder="Introduce el precio del servicio"
        variant="underlined"
        name="label"
        type="number"
        onChange={(e) => {}}
      />
      <SelectCateogries variant="underlined"/>
    </>
  );
};

export default ServiceDataForm;
