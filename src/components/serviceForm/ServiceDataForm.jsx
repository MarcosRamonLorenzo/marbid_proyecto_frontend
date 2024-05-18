import { Input, Textarea } from "@nextui-org/react";
import { Euro   } from "lucide-react";
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
        onChange={(e) => {handleFormChange(e,formService,setFormService)}}
        value={formService?.title}
      />
      <Textarea
      
        className=" resize-y "
        label="Contenido"
        placeholder="Introduce el contenido del servicio"
        variant="underlined"
        name="content"
        onChange={(e) => {handleFormChange(e,formService,setFormService)}}
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
        onChange={(e) => {handleFormChange(e,formService,setFormService)}}
        value={formService?.price}
      />
      <SelectCateogries variant="underlined"
        onChange={(e) => {handleFormChange(e,formService,setFormService)}}
       />  
      
    </>
  );
};

export default ServiceDataForm;
