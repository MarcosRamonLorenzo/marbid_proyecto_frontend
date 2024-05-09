import { useState, useRef, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Image,
  Avatar,
  Select,
  SelectItem,
  Checkbox,
  user,
} from "@nextui-org/react";
import { Edit2, Tag, FileText, CameraIcon } from "lucide-react";
import countries from "@/config/constries.config";
import useAuth from "@/hooks/useAuth";
import { updateUser } from "@/functions/authFunc";
import { handleFormChange } from "@/functions/formsFunc";

const UserEditModal = ({ isOpen, onClose }) => {
  const { currentUser } = useAuth();
  const userDB = currentUser.userDB;

  const [loading, setLoading] = useState(false);

  /*Hay que hace un useEffect porque es un portal y n ose cargan losd atos al inicio */
  useEffect(() => {
    setEditedUser(userDB);
  }, [userDB]);



  const avatarFileInputRef = useRef(null);
  const backgroundImageFileInputRef = useRef(null);

  const handleAvatarCameraClick = () => {
    avatarFileInputRef.current.click();
  };

  const handleBackgroundImageCameraClick = () => {
    backgroundImageFileInputRef.current.click();
  };

  const handleBackgroundImageFileChange = async (event) => {
    const file = event.target.files[0];
    setLoading(true);
    setEditedUser(prevState => ({ ...prevState, backround_img: URL.createObjectURL(file) }));
    setLoading(false);
  };

  const handleAvatarFileChange = async (event) => {
    const file = event.target.files[0];
    setLoading(true);
    setEditedUser(prevState => ({ ...prevState, avatar_img: URL.createObjectURL(file) }));
    setLoading(false);
  };

  const editedUserDefaultObject = {
    id: userDB?.id,
    name: userDB?.name,
    label: userDB?.label,
    description: userDB?.description,
    country: userDB?.country,
    avatar_img: userDB?.avatar_img,
    backround_img: userDB?.backround_img,
  };

  const [editedUser, setEditedUser] = useState(editedUserDefaultObject);

  const handleClickEditButton = async () => {
    const updatedUser= await updateUser(editedUser, userDB);
    

  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} placement="auto" size="2xl">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Editar Perfil
            </ModalHeader>
            <ModalBody>
              <div className="flex justify-center items-start gap-10 ">
                <div className="flex flex-col items-center my-2 ">
                  <div className="relative group">
                    <Image
                      className="mx-auto w-[25em] h-[10em] object-cover cursor-pointer hover:filter hover:brightness-75"
                      src={editedUser?.backround_img || "https://static.vecteezy.com/system/resources/thumbnails/006/899/230/large/mystery-random-loot-box-from-game-icon-vector.jpg"}
                    />
                    <Checkbox
                      className="absolute top-5 right-5 z-50 bg-[#eee] rounded"
                      size="sm"
                      color="secondary"
                    >
                      Aleatorio
                    </Checkbox>
                    <CameraIcon
                      className="absolute m-auto inset-0 z-50 text-2xl text-default-400 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      onClick={handleBackgroundImageCameraClick}
                    />
                    <input type="file" ref={backgroundImageFileInputRef} style={{ display: 'none' }} onChange={handleBackgroundImageFileChange} />
                  </div>
                  <div className="relative group">
                    <Avatar
                      className="mx-auto -mt-5 z-10 scale-[1.5] cursor-pointer hover:filter hover:brightness-75"
                      size="lg"
                      src={editedUser?.avatar_img}
                    />
                    <CameraIcon
                      className="absolute m-auto inset-0 top-0 z-50 text-2xl text-default-400 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      onClick={handleAvatarCameraClick}
                    />
                    <input type="file" ref={avatarFileInputRef} style={{ display: 'none' }} onChange={handleAvatarFileChange} />
                  </div>
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
                value={editedUser?.name}
                onChange={(e) => handleFormChange(e, editedUser, setEditedUser)}
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
                value={editedUser?.label}
                onChange={(e) => handleFormChange(e, editedUser, setEditedUser)}
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
                value={editedUser?.description}
                onChange={(e) => handleFormChange(e, editedUser, setEditedUser)}
              />

              <Select
                variant="underlined"
                className="mt-3"
                placeholder="Selecciona tu país"
                label="País"
                radius="sm"
                name="country"
                onChange={(e) => handleFormChange(e, editedUser, setEditedUser)}
              >
                {countries.map((country) => (
                  <SelectItem
                    key={country.key}
                    startContent={
                      <Avatar
                        alt={country.alt}
                        className="w-6 h-6"
                        src={country.src}
                      />
                    }
                  >
                    {country.name}
                  </SelectItem>
                ))}
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" onClick={()=>{handleClickEditButton()}}>
                Editar
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserEditModal;
