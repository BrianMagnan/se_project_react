import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useEffect } from "react";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";

import { useContext } from "react";

function EditProfileModal({
  onClose,
  onUpdateProfile,
  isLoading,
  activeModal,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    getInputClassName,
  } = useFormAndValidation("editProfile");

  useEffect(() => {
    if (currentUser) {
      resetForm({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [currentUser, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onUpdateProfile({
        name: values.name,
        avatar: values.avatar,
      });
    }
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      activeModal={activeModal === "edit-profile"}
      name="edit-profile"
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading?.profile}
      disabled={!isValid || isLoading?.profile}
    >
      <div className="modal__form-content">
        {/* name */}
        <label htmlFor="edit-name" className="modal__label">
          {errors.name ? (
            <span className="modal__error">{errors.name}</span>
          ) : (
            "Name*"
          )}
          <input
            id="edit-name"
            type="text"
            name="name"
            minLength="3"
            className={getInputClassName("name")}
            aria-label="Enter name"
            placeholder="Name"
            value={values.name || ""}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </label>
        {/* avatar */}
        <label htmlFor="edit-avatar" className="modal__label">
          {errors.avatar ? (
            <span className="modal__error">{errors.avatar}</span>
          ) : (
            "Avatar*"
          )}
          <input
            id="edit-avatar"
            type="url"
            name="avatar"
            className={getInputClassName("avatar")}
            aria-label="Enter avatar URL"
            placeholder="Avatar URL"
            value={values.avatar || ""}
            onChange={handleChange}
            autoComplete="on"
            required
          />
        </label>
      </div>
    </ModalWithForm>
  );
}

export default EditProfileModal;
