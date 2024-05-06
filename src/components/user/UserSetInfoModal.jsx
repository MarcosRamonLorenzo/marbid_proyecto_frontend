import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Select,Image,Avatar} from "@nextui-org/react";
import {Edit2, Tag, FileText, MapPin} from "lucide-react";

const countries = ["Country 1", "Country 2", "Country 3"]; // Replace with your countries

const UserEditModal = ({isOpen, onClose}) => {
    return (
        <>
          <Modal 
            isOpen={isOpen} 
            onClose={onClose}
            placement="auto"
            size="2xl"
          >
            <ModalContent>
                <>
                  <ModalHeader className="flex flex-col gap-1">Editar Perfil</ModalHeader>
                  <ModalBody>
                <div className="flex flex-col items-center my-2">
                  <h2 className="mb-2">Foto de Fondo</h2>
                  <Image className="w-80 mx-auto" src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" />
                  <Button variant="flat" className="mt-2 third-color-class text-white">Seleccionar Archivo</Button>
                </div>

                <div className="flex flex-col items-center my-2">
                  <h2 className="my-2">Foto de Perfil</h2>
                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
                  <Button variant="flat" className="mt-2 third-color-class text-white">Seleccionar Archivo</Button>
                </div>

                <Input
                  autoFocus
                  endContent={
                        <Edit2 className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Nombre"
                      placeholder="Introduce tu nombre"
                      variant="underlined"
                      color="second"
                    />
                    
                    <Input
                      endContent={
                        <Tag className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Etiqueta"
                      placeholder="Introduce tu etiqueta"
                      variant="underlined"
                      color="third"
                    />

                    <Input
                      endContent={
                        <FileText className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Descripción"
                      placeholder="Introduce tu descripción"
                      variant="underlined"
                      color="first"
                    />
                    
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Cerrar
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Editar
                    </Button>
                  </ModalFooter>
                </>
            </ModalContent>
          </Modal>
        </>
      );
}

export default UserEditModal;