import React from "react";
import ReactDOM from "react-dom";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const ModalAcceptCancel = ({
  isOpen = false,
  onClose,
  onConfirm,
  title = "Modal Accept Cancel",
  text = "",
}) => {
  return ReactDOM.createPortal(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 dark:text-white">{title}</ModalHeader>
        <ModalBody>
          <p>{text}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={onClose}>
            Cerrar
          </Button>
          <Button
            color="primary"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            Continuar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>,
    document.getElementById('modal-accept-cancel')
  );
};

export default ModalAcceptCancel;
