import { useEffect } from "react";

function useModalClose(isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) return;

    //CLOSE WITH ESCAPE BUTTON
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    //CLOSE BY CLICKING OUTSIDE MODAL
    const handleOverlay = (e) => {
      if (e.target.classList.contains("modal")) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleOverlay);

    // REMOVE LISTENERS
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOverlay);
    };
  }, [isOpen, onClose]);
}

export default useModalClose;
