import { useContext } from "react";
import { register, login, updateUserProfile, checkToken } from "../utils/auth";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export function useAuthHandlers({ setIsLoading, setError, closeActiveModal }) {
  const { handleLogin, setCurrentUser } = useContext(CurrentUserContext);

  const handleRegister = ({ name, avatar, email, password }) => {
    setIsLoading((prev) => ({ ...prev, profile: true }));
    register({ name, avatar, email, password })
      .then(() => {
        return login({ email, password });
      })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        return checkToken(res.token);
      })
      .then((res) => {
        handleLogin(res);
        closeActiveModal();
        setError(null);
      })
      .catch((err) => {
        setError("Registration failed. Please try again.");
        console.error("Registration error:", err);
      })
      .finally(() => {
        setIsLoading((prev) => ({ ...prev, profile: false }));
      });
  };

  const handleLoginSubmit = ({ email, password }) => {
    setIsLoading((prev) => ({ ...prev, profile: true }));
    login({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        return checkToken(res.token);
      })
      .then((res) => {
        handleLogin(res);
        closeActiveModal();
        setError(null);
      })
      .catch((err) => {
        setError("Login failed. Please check your credentials.");
        console.error("Login error:", err);
      })
      .finally(() => {
        setIsLoading((prev) => ({ ...prev, profile: false }));
      });
  };

  const handleUpdateProfile = ({ name, avatar }) => {
    setIsLoading((prev) => ({ ...prev, profile: true }));
    const token = localStorage.getItem("jwt");
    updateUserProfile({ name, avatar }, token)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeActiveModal();
        setError(null);
      })
      .catch((err) => {
        setError("Failed to update profile. Please try again.");
        console.error("Profile update error:", err);
      })
      .finally(() => {
        setIsLoading((prev) => ({ ...prev, profile: false }));
      });
  };

  return {
    handleRegister,
    handleLoginSubmit,
    handleUpdateProfile,
  };
}
