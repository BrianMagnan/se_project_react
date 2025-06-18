import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import MessageModal from "../MessageModal/MessageModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

export function MasterModal({
  handleAddItemModalSubmit,
  handleDeleteClick,
  handleDeleteItem,
  handleRegister,
  handleUpdateProfile,
  handleSignUpClick,
  handleLoginSubmit,
  activeModal,
  closeActiveModal,
  selectedCard,
  handleLoginClick,
}) {
  return (
    <div>
      <AddItemModal
        activeModal={activeModal}
        onClose={closeActiveModal}
        onAddItemModalSubmit={handleAddItemModalSubmit}
      />
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
        handleDeleteClick={handleDeleteClick}
      />
      <MessageModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
        handleDeleteItem={handleDeleteItem}
      />
      <LoginModal
        activeModal={activeModal}
        onClose={closeActiveModal}
        onUserLoginSubmit={handleLoginSubmit}
        handleSignUpClick={handleSignUpClick}
      />
      <RegisterModal
        activeModal={activeModal}
        onClose={closeActiveModal}
        onUserRegisterSubmit={handleRegister}
        handleLoginClick={handleLoginClick}
      />
      <EditProfileModal
        activeModal={activeModal}
        onClose={closeActiveModal}
        onUpdateProfile={handleUpdateProfile}
      />
    </div>
  );
}

export default MasterModal;
