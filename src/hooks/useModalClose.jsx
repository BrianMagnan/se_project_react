import { useEffect } from "react";

export const useModalClose = (isOpen, onClose) => {
  // Handle ESC key
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscClose);
    }

    return () => document.removeEventListener("keydown", handleEscClose);
  }, [isOpen, onClose]);

  // Return modal handlers
  return {
    modalProps: {
      onClick: onClose,
    },
    contentProps: {
      onClick: (e) => e.stopPropagation(),
    },
  };
};
