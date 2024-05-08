import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Image, Avatar,Select,SelectItem } from "@nextui-org/react";
import { Edit2, Tag, FileText } from "lucide-react";
import countries from '@/config/constries.config';
import useAuth from "@/hooks/useAuth";



const UserEditModal = ({ isOpen, onClose }) => {
  const { currentUser } = useAuth();
  const userDB = currentUser ? currentUser.userDB : null;
  const { name, label, description, country, avatar_img , backround_img  } = userDB || {};
 
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
              <div className="flex justify-center items-start gap-10 ">
                <div className="flex flex-col items-center my-2 ">
                  <div className="relative">
                    <Image className="mx-auto w-[25em] h-[10em] object-cover cursor-pointer hover:filter hover:brightness-75" src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" />                
                    <Button className="absolute top-2 right-2 z-50 " size="sm" color="secondary" onClick={()=>{}}>Aleatorio</Button>
                  </div>
                  <Avatar className=" mx-auto -mt-5 z-10 scale-[1.5] cursor-pointer hover:filter hover:brightness-75" size="lg"  src={`https://app.requestly.io/delay/1000/${userDB?.avatar_img}`} />
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
                value={userDB?.name}
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
                value={userDB?.label}
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
                value={userDB?.description}
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
              <Button color="danger" onPress={onClose}>
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