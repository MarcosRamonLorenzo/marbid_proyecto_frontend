import { useState } from "react";

export function useModal(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return { isOpen, openModal, closeModal };
}
