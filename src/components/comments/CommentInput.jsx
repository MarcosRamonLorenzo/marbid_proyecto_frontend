import { Forward } from "lucide-react";
import React from "react";
import { Input } from "@nextui-org/react";
import useComment from "@/hooks/useComment";
import { handleFormChange } from "@/functions/formsFunc";
import { useModal } from "@/hooks/useModal";
import ModalAcceptCancel from "../shared-componentes/modals/ModalAcceptCancel";

const CommentInput = ({ className }) => {
  const { setComment, comment , handleCreateComment } = useComment();
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div className={className}>
      <Input
        type="text"
        variant="underlined"
        label="Añade un cometario"
        value={comment.content}
        name="content"
        onChange={(e)=>{handleFormChange(e,comment,setComment);}}
        endContent={
          <Forward className=" cursor-pointer text-black dark:text-white" onClick={openModal} />
        }
      />

      <ModalAcceptCancel isOpen={isOpen} title="Quieres publicar este comentario ?" onClose={closeModal} onConfirm={handleCreateComment} />
    </div>


  );
};

export default CommentInput;
