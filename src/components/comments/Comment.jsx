import { formatDate } from "@/functions/timeFunc";
import { Avatar, Divider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { XCircleIcon } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import ModalAcceptCancel from "../shared-componentes/modals/ModalAcceptCancel";

const Comment = ({
  id = "",
  author = {},
  username = "",
  content = "",
  date,
  onDelete,
}) => {
  const navigate = useNavigate();

  const navigateUserPage = (idUser) => {
    navigate(`/user/${idUser}`);
  };

  const { currentUser } = useAuth();

  const isUsersMessage = () => {
    return currentUser?.uid === author?.id; // Check if the current user is the author of the message
  };

  const { isOpen, closeModal, openModal } = useModal();

  return (
    <>
      <div key={id} className="flex flex gap-2">
        <Avatar
          className="w-10 h-10 rounded-full cursor-pointer"
          src={author?.avatar_img}
          alt="avatar"
          onClick={() => {
            navigateUserPage(author?.id);
          }}
        />

        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <p
              className="text-md font-bold hover:underline cursor-pointer"
              onClick={() => {
                navigateUserPage(author?.id);
              }}
            >
              {username?.substring(0, 15) + "..."}
            </p>
            <Divider orientation="vertical" />
            <p className=" text-[0.8em] md:text-sm">{formatDate(date)}</p>
            {isUsersMessage() && (
              <XCircleIcon
                className="cursor-pointer"
                color="red"
                size={18}
                onClick={openModal}
              />
            )}
          </div>
          <p className="text-sm mt-3">{content}</p>
        </div>
      </div>

      {isUsersMessage() && (
        <ModalAcceptCancel
          onClose={closeModal}
          isOpen={isOpen}
          title="Quieres eliminar este comentario ?"
          text="El comentario no se puede volver a recuperar"
          onConfirm={onDelete}
        />
      )}
    </>
  );
};

export default Comment;
