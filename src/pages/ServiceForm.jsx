import ServiceDataForm from "@/components/serviceForm/ServiceDataForm";
import ServiceCard from "@/components/services/ServiceCard";
import useAuth from "@/hooks/useAuth";
import useService from "@/hooks/useService";
import { Accordion, AccordionItem, Button, Divider, Image, user } from "@nextui-org/react";
import { EditIcon, ImageIcon, EyeIcon } from "lucide-react";
import { useState } from "react";
import ModalPayment from "./ModalPayment";

const ServiceForm = ({ edit }) => {

  const { currentUser:{userDB}} = useAuth();
  const { formService } = useService();

  const [openPayment,setOpenPayment] = useState(false);

  return (
    <>
      <div className="create-service mx-4 my-10 md:mx-24 md:my-20">
        <h2 className="text-3xl font-medium">Crear Servicio</h2>
        <Divider className="my-4" />
        <Accordion variant="light" defaultExpandedKeys={["1"]}>

          <AccordionItem key="1" aria-label="Imagen del Servicio" title="Imagen del Servicio" startContent={<ImageIcon className="secondary-stroke-class" />}>
            <div className="flex flex-col gap-3 items-start my-3">
              <p className="text-sm text-gray-500">Sube una imagen que represente tu servicio</p>
              <Image radius="sm" className="h-60 w-100" src={formService?.image || "https://firebasestorage.googleapis.com/v0/b/marbid-69744.appspot.com/o/Bliss-Fondo-de-Pantalla-Windows-XP.jpg?alt=media&token=8af5ecf8-5aee-4797-b4ad-ac3a5cd5b392"} />
              <Button className="primary-color-class text-white" radius="sm"  >Seleccionar Imagen</Button>
            </div>
          </AccordionItem>

          <AccordionItem key="2" aria-label="Datos del Servicio" title="Datos del Servicio" startContent={<EditIcon className="primary-stroke-class" />}>
            <div className="w-80 my-3 flex flex-col gap-8">
              <ServiceDataForm />
            </div>
          </AccordionItem>

          <AccordionItem key="3" aria-label="Previsualización" title="Previsualización" startContent={<EyeIcon className="third-stroke-class" />}>
            <div className=" w-full md:w-[30em]">           
               <ServiceCard item={{user:userDB}}/>
               <Button radius="sm" className="mt-4 third-color-class text-white" onClick={()=>{setOpenPayment(true)}}>Pagar y Crear Servicio</Button>
            </div>

          </AccordionItem>
        </Accordion>
      </div>

      <ModalPayment open={openPayment} close={()=>{setOpenPayment(false)}} />
    </>
  );
}

export default ServiceForm

