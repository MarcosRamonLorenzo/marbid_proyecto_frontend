import ServiceDataForm from "@/components/serviceForm/ServiceDataForm";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import { EditIcon, ImageIcon, EyeIcon } from "lucide-react";

const ServiceForm = ({ edit }) => {
  return (
    <>
      <div className="create-service mx-4 my-10 md:mx-24 md:my-20">
        <h2 className="text-3xl font-medium">Crear Servicio</h2>
        <Divider className="my-4" />
        <Accordion variant="light" defaultExpandedKeys={["1"]}>
          <AccordionItem key="1" aria-label="Datos del Servicio" title="Datos del Servicio" startContent={<EditIcon className="primary-stroke-class" />}>
            <div className="w-80 my-3 flex flex-col gap-8">
              <ServiceDataForm/>
            </div>
          </AccordionItem>

          <AccordionItem key="2" aria-label="Imagen del Servicio"  title="Imagen del Servicio" startContent={<ImageIcon className="secondary-stroke-class" />}>
          </AccordionItem>

          <AccordionItem key="3" aria-label="Previsualización" title="Previsualización" startContent={<EyeIcon className="third-stroke-class" />}>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default ServiceForm

