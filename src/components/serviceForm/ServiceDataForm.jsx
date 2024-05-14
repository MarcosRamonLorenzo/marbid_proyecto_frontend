import { Input, Textarea } from "@nextui-org/react";
import { Captions,NotebookPen   } from "lucide-react";
import React from "react";
import SelectCateogries from "../categories/SelectCateogries";

const ServiceDataForm = () => {
  return (
    <>
      <Input
        endContent={
          <Captions  className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Título"
        placeholder="Introduce el título del servicio"
        variant="underlined"
        color="third"
        name="label"
        onChange={(e) => {}}
      />
      <Textarea
        className=" resize-y "
        endContent={
          <NotebookPen  className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Contenido"
        placeholder="Introduce el contenido del servicio"
        variant="underlined"
        color="third"
        name="label"
        onChange={(e) => {} }
      />
      <SelectCateogries variant="underlined"/>
    </>
  );
};

export default ServiceDataForm;
