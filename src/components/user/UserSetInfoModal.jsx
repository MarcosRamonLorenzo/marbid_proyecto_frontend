import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Select} from "@nextui-org/react";
import {Edit2, Tag, FileText, MapPin, Image} from "lucide-react";

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
                    <Input in />
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