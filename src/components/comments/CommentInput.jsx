import { Forward } from "lucide-react";
import React from "react";
import { Input } from "@nextui-org/react";
import useComment from "@/hooks/useComment";
import { handleFormChange } from "@/functions/formsFunc";
import { useModal } from "@/hooks/useModal";
import useAuth from "@/hooks/useAuth";
import ModalAcceptCancel from "../shared-componentes/modals/ModalAcceptCancel";
import { useNavigate } from "react-router-dom";

const CommentInput = ({ className }) => {
  const navigate = useNavigate();
  const { setComment, comment, handleCreateComment } = useComment();
  const { isOpen, openModal, closeModal } = useModal();
  const { currentUser } = useAuth();
  return (
    <div className={className}>
      <Input
        type="text"
        variant="underlined"
        label="Añade un cometario"
        value={comment.content}
        name="content"
        onChange={(e) => {
          handleFormChange(e, comment, setComment);
        }}
        endContent={
          <Forward
            className=" cursor-pointer text-black dark:text-white"
            onClick={() => {
              if (currentUser) {
                openModal();
              } else {
                navigate("/log-in");
              }
            }}
          />
        }
      />

      <ModalAcceptCancel
        isOpen={isOpen}
        title="Quieres publicar este comentario ?"
        onClose={closeModal}
        onConfirm={handleCreateComment}
      />
    </div>
  );
};

export default CommentInput;
