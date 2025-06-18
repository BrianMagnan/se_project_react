import { useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function useModalOpen() {
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
  };
}

export default useModalOpen;
