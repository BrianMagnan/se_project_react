import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { register, login, updateUserProfile, checkToken } from "../utils/auth";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { useUniversalSubmit } from "./useUniversalSubmit.js";

export function useAuthHandlersConsolidated({ setError, closeActiveModal }) {
  const { handleLogin, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const { handleSubmit } = useUniversalSubmit({
    closeModal: closeActiveModal,
    setError,
  });

  const handleRegister = ({ name, avatar, email, password }) => {
    // Create a function that returns a promise
    const makeRequest = () => {
      return register({ name, avatar, email, password })
        .then(() => {
          return login({ email, password });
        })
        .then((res) => {
          localStorage.setItem("jwt", res.token);
          return checkToken(res.token);
        })
        .then((res) => {
          handleLogin(res);
          setError(null);
          // Navigate to profile page after successful registration
          navigate("/profile");
        });
    };

    // Use universal submit pattern
    handleSubmit(makeRequest);
  };

  const handleLoginSubmit = ({ email, password }) => {
    // Create a function that returns a promise
    const makeRequest = () => {
      return login({ email, password })
        .then((res) => {
          localStorage.setItem("jwt", res.token);
          return checkToken(res.token);
        })
        .then((res) => {
          handleLogin(res);
          setError(null);
          // Navigate to profile page after successful login
          navigate("/profile");
        });
    };

    // Use universal submit pattern
    handleSubmit(makeRequest);
  };

  const handleUpdateProfile = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");

    // Create a function that returns a promise
    const makeRequest = () => {
      return updateUserProfile({ name, avatar }, token).then((updatedUser) => {
        setCurrentUser(updatedUser);
        setError(null);
      });
    };

    // Use universal submit pattern
    handleSubmit(makeRequest);
  };

  return {
    handleRegister,
    handleLoginSubmit,
    handleUpdateProfile,
  };
}
