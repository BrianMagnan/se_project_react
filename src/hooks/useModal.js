import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function useModal() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const { currentUser } = useContext(CurrentUserContext);
  const isLoggedIn = !!currentUser;

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleAddClick = () => {
    if (!isLoggedIn) {
      setActiveModal("login");
      return;
    }
    setActiveModal("add-garment");
  };

  const handleEditProfile = () => {
    setActiveModal("edit-profile");
  };

  const handleDeleteClick = () => {
    setActiveModal("message");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  // Modal close functionality
  const useModalClose = (isOpen, onClose) => {
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
  };

  return {
    activeModal,
    selectedCard,
    handleLoginClick,
    handleSignUpClick,
    handleAddClick,
    handleEditProfile,
    handleDeleteClick,
    handleCardClick,
    closeActiveModal,
    useModalClose,
  };
}

export default useModal;
