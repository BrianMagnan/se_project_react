import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useEffect } from "react";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";

function RegisterModal({
  onClose,
  onUserRegisterSubmit,
  isLoading,
  activeModal,
  handleLoginClick,
}) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    getInputClassName,
  } = useFormAndValidation("register");

  useEffect(() => {
    if (!activeModal) {
      resetForm();
    }
  }, [activeModal, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onUserRegisterSubmit({
        name: values.name,
        avatar: values.avatar,
        email: values.email,
        password: values.password,
      });
    }
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText={isLoading ? "Signing up..." : "Sign up"}
      linkText={"or Log in"}
      activeModal={activeModal === "register"}
      name="register"
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      disabled={!isValid || isLoading}
      onLinkClick={handleLoginClick}
    >
      <div className="modal__form-content">
        {/* email */}
        <label htmlFor="register-email" className="modal__label">
          {errors.email ? (
            <span className="modal__error">{errors.email}</span>
          ) : (
            "Email*"
          )}

          <input
            id="register-email"
            type="email"
            name="email"
            className={getInputClassName("email")}
            aria-label="Enter email"
            placeholder="Email"
            value={values.email || ""}
            onChange={handleChange}
            required
          />
        </label>
        {/* password */}
        <label htmlFor="register-password" className="modal__label">
          {errors.password ? (
            <span className="modal__error">{errors.password}</span>
          ) : (
            "Password*"
          )}
          <input
            id="register-password"
            type="password"
            name="password"
            className={getInputClassName("password")}
            aria-label="Enter password"
            placeholder="Password"
            value={values.password || ""}
            onChange={handleChange}
            required
          />
        </label>
        {/* name */}
        <label htmlFor="register-name" className="modal__label">
          {errors.name ? (
            <span className="modal__error">{errors.name}</span>
          ) : (
            "Name*"
          )}
          <input
            id="register-name"
            type="text"
            name="name"
            minLength="3"
            className={getInputClassName("name")}
            aria-label="Enter name"
            placeholder="Name"
            value={values.name || ""}
            onChange={handleChange}
            required
          />
        </label>
        {/* avatar */}
        <label htmlFor="register-avatar" className="modal__label">
          {errors.avatar ? (
            <span className="modal__error">{errors.avatar}</span>
          ) : (
            "Avatar URL*"
          )}
          <input
            id="register-avatar"
            type="url"
            name="avatar"
            className={getInputClassName("avatar")}
            aria-label="Enter avatar URL"
            placeholder="Avatar URL"
            value={values.avatar || ""}
            onChange={handleChange}
            required
          />
        </label>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
