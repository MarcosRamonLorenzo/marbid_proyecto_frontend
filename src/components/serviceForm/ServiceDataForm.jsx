import { Input, Textarea } from "@nextui-org/react";
import { Captions,Euro,NotebookPen   } from "lucide-react";
import React from "react";
import SelectCateogries from "../categories/SelectCateogries";
import useService from "@/hooks/useService";
import { handleFormChange } from "@/functions/formsFunc";



const ServiceDataForm = () => {



  const {formService,setFormService} = useService();

  return (
    <>
      <Input
        isClearable
        label="Título"
        placeholder="Introduce el título del servicio"
        variant="underlined"
        name="title"
        onChange={(e) => {}}
        value={formService?.title}
      />
      <Textarea
      
        className=" resize-y "
        label="Contenido"
        placeholder="Introduce el contenido del servicio"
        variant="underlined"
        name="content"
        onChange={(e) => {} }
        value={formService?.content}
      />
      <Input
        endContent={
          <Euro  className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Precio"
        placeholder="Introduce el precio del servicio"
        variant="underlined"
        name="price"
        type="number"
        onChange={(e) => {}}
        value={formService?.price}
      />
      <SelectCateogries variant="underlined" onChange={(e) => {console.log(e);}}/>  
      
    </>
  );
};

export default ServiceDataForm;
