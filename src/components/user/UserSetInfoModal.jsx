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
import { handleFormChange, handleFileChange } from "@/functions/formsFunc";
import Loading from "../shared-componentes/Loadings/Loading";
import useAlert from "@/hooks/useAlert";
import { validateEditedUser } from "@/functions/authFunc";

const UserEditModal = ({ isOpen, onClose }) => {
  const { setSuccessAlert, setErrorAlert } = useAlert();

  // Get current user and reloadUserDB function from the authentication context
  const { currentUser, reloadUserDB } = useAuth();
  const userDB = currentUser.userDB;

  // Default object for the edited user, based on the current user's data
  const editedUserDefaultObject = {
    id: userDB?.id,
    name: userDB?.name,
    label: userDB?.label,
    description: userDB?.description,
    country: userDB?.country,
    avatar_img: userDB?.avatar_img,
    backround_img: userDB?.backround_img,
  };

  // State for loading status and edited user
  const [loading, setLoading] = useState(false);
  const [editedUser, setEditedUser] = useState(editedUserDefaultObject);

  // References for the avatar and background image file inputs
  const avatarFileInputRef = useRef(null);
  const backgroundImageFileInputRef = useRef(null);

  // State for the avatar and background image URLs
  const [avatarImageUrl, setAvatarImageUrl] = useState(null);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(null);

  // Handler for avatar camera click
  const handleAvatarCameraClick = () => {
    avatarFileInputRef.current.click();
  };

  // Handler for background image camera click
  const handleBackgroundImageCameraClick = () => {
    backgroundImageFileInputRef.current.click();
  };

  // Handler for background image file change
  const handleBackgroundImageFileChange = async (event) => {
    handleFileChange(event, setEditedUser, "backround_img");
  };

  // Handler for avatar file change
  const handleAvatarFileChange = async (event) => {
    handleFileChange(event, setEditedUser, "avatar_img");
  };

  // Handler for click on the edit button
  const handleClickEditButton = async () => {

    const validate = validateEditedUser(editedUser);
    if (validate) {
      setErrorAlert(validate);
    } else {
      try {
        setLoading(true);
        const updatedUser = await updateUser(editedUser, userDB);
        if (updatedUser.error) throw updatedUser.error;

        setSuccessAlert("Usuario editado correctamente");
        reloadUserDB(updatedUser.data);
        setLoading(false);
        onClose();
      } catch (error) {
        setLoading(false);
        setErrorAlert(error.message);
      }
    }
  };

  // useEffect to set the edited user and image URLs when the userDB changes
  useEffect(() => {
    setEditedUser(userDB);
    setAvatarImageUrl(userDB?.avatar_img);
    setBackgroundImageUrl(userDB?.backround_img);
  }, [userDB]);

  // useEffect to update the avatar image URL when the avatar image in the edited user changes
  useEffect(() => {
    if (editedUser.avatar_img instanceof File) {
      setAvatarImageUrl(URL.createObjectURL(editedUser.avatar_img));
    }
  }, [editedUser?.avatar_img]);

  // useEffect to update the background image URL when the background image in the edited user changes
  useEffect(() => {
    if (editedUser.backround_img instanceof File) {
      setBackgroundImageUrl(URL.createObjectURL(editedUser.backround_img));
    }
  }, [editedUser?.backround_img]);

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
                      src={
                        backgroundImageUrl ||
                        "https://static.vecteezy.com/system/resources/thumbnails/006/899/230/large/mystery-random-loot-box-from-game-icon-vector.jpg"
                      }
                    />
                    <CameraIcon
                      className="absolute m-auto inset-0 z-50 text-2xl text-default-400 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      onClick={handleBackgroundImageCameraClick}
                    />
                    <input
                      type="file"
                      ref={backgroundImageFileInputRef}
                      style={{ display: "none" }}
                      onChange={handleBackgroundImageFileChange}
                    />
                  </div>
                  <div className="relative group">
                    <Avatar
                      className="mx-auto -mt-5 z-10 scale-[1.5] cursor-pointer hover:filter hover:brightness-75"
                      size="lg"
                      src={avatarImageUrl}
                    />
                    <CameraIcon
                      className="absolute m-auto inset-0 top-0 z-50 text-2xl text-default-400 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      onClick={handleAvatarCameraClick}
                    />
                    <input
                      type="file"
                      ref={avatarFileInputRef}
                      style={{ display: "none" }}
                      onChange={handleAvatarFileChange}
                    />
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
                defaultSelectedKeys={[editedUser?.country]}
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
              <Button
                color="primary"
                onClick={() => {
                  handleClickEditButton();
                }}
              >
                Editar
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
      {loading && <Loading />}
    </>
  );
};

export default UserEditModal;
