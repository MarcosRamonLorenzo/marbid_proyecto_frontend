import React from "react";
import ReactDOM from "react-dom";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
} from "@nextui-org/react";

const ModalErrorAccept = ({
  isOpen = true,
  onClose,
  title = "Error",
  text = "",
}) => {
  return ReactDOM.createPortal(
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
        <Divider />
        <ModalBody>
          <p>{text}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger"  onClick={onClose}>
            Aceptar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>,
    document.body
  );
};

export default ModalErrorAccept;
