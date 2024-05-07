import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Image, Avatar,Select,SelectItem } from "@nextui-org/react";
import { Edit2, Tag, FileText } from "lucide-react";
import countries from '@/config/constries.config';
import useAuth from "@/hooks/useAuth";
import { useState } from "react";


const UserEditModal = ({ isOpen, onClose }) => {

  const {currentUser:{userDB}} = useAuth();
  const { name, label, description, country, avatar_img , backround_img  } = userDB;
  const userActualDataDefaultValue = { name, label, description, country, avatar_img , backround_img}
  
  const [userActualData,setUserActualData] = useState(userActualDataDefaultValue);

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
              <div className="flex justify-center items-start gap-20 ">
              <div className="flex flex-col items-center my-2 ">
                <h2 className="mb-2">Foto de Fondo</h2>
                <Image className="w-80 mx-auto" src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" />
                <Button variant="flat" className="mt-2 third-color-class text-white">Seleccionar Archivo</Button>
              </div>

              <div className="flex flex-col justify-between items-center my-2 ">
                <h2 className="my-2">Foto de Perfil</h2>
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-50 h-50 mx-auto text-large" />
                <Button variant="flat" className="mt-2 third-color-class text-white">Seleccionar Archivo</Button>
              </div>
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
                name="name"
                value={userActualData.name}
              />

              <Input
                endContent={
                  <Tag className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Etiqueta"
                placeholder="Introduce tu etiqueta"
                variant="underlined"
                color="third"
                name="label"
                value={userActualData.label}
              />

              <Input
                endContent={
                  <FileText className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Descripción"
                placeholder="Introduce tu descripción"
                variant="underlined"
                color="first"
                name="description"
                value={userActualData.description}
              />

              <Select variant="underlined" className="mt-3" placeholder="Selecciona tu país" label="País" radius="sm">
                {countries.map(country => (
                  <SelectItem key={country.key} startContent={<Avatar alt={country.alt} className="w-6 h-6" src={country.src} />}>
                    {country.name}
                  </SelectItem>
                ))}
              </Select>

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