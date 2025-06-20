import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useEffect } from "react";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";
import "./LoginModal.css";

function LoginModal({
  activeModal,
  onClose,
  onUserLoginSubmit,
  isLoading,
  handleSignUpClick,
}) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    getInputClassName,
  } = useFormAndValidation("login");

  useEffect(() => {
    if (!activeModal) {
      resetForm();
    }
  }, [activeModal, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onUserLoginSubmit({
        email: values.email,
        password: values.password,
      });
    }
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      linkText="or Sign Up"
      activeModal={activeModal === "login"}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading?.profile}
      disabled={!isValid || isLoading?.profile}
      onLinkClick={handleSignUpClick}
    >
      <div className="modal__form-content">
        {/* email */}
        <label htmlFor="login-email" className="modal__label">
          {errors.email ? (
            <span className="modal__error">{errors.email}</span>
          ) : (
            "Email"
          )}

          <input
            id="login-email"
            type="email"
            name="email"
            className={getInputClassName("email")}
            aria-label="Enter email"
            placeholder="Email"
            value={values.email || ""}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </label>
        {/* password */}
        <label htmlFor="login-password" className="modal__label">
          {errors.password ? (
            <span className="modal__error">{errors.password}</span>
          ) : (
            "Password"
          )}
          <input
            id="login-password"
            type="password"
            name="password"
            className={getInputClassName("password")}
            aria-label="Enter password"
            placeholder="Password"
            value={values.password || ""}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />
        </label>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
