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
  isLoading,
}) {
  return (
    <div>
      <AddItemModal
        activeModal={activeModal}
        onClose={closeActiveModal}
        onAddItemModalSubmit={handleAddItemModalSubmit}
        isLoading={isLoading}
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
        isLoading={isLoading}
      />
      <LoginModal
        activeModal={activeModal}
        onClose={closeActiveModal}
        onUserLoginSubmit={handleLoginSubmit}
        handleSignUpClick={handleSignUpClick}
        isLoading={isLoading}
      />
      <RegisterModal
        activeModal={activeModal}
        onClose={closeActiveModal}
        onUserRegisterSubmit={handleRegister}
        handleLoginClick={handleLoginClick}
        isLoading={isLoading}
      />
      <EditProfileModal
        activeModal={activeModal}
        onClose={closeActiveModal}
        onUpdateProfile={handleUpdateProfile}
        isLoading={isLoading}
      />
    </div>
  );
}

export default MasterModal;
