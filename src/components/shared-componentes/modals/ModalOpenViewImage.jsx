import React from "react";
import ReactDOM from "react-dom";
import { Modal, ModalContent, Image } from "@nextui-org/react";

const ModalOpenViewImage = ({ onClose, image }) => {
  return (
    <Modal aria-label="image-preview" isOpen={image} onClose={onClose} backdrop="blur">
      <ModalContent >
        <Image src={image} aria-label="Modal Image" fit="cover" />
      </ModalContent>
    </Modal>
  );
};

export default ModalOpenViewImage;