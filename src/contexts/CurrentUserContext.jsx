import React, { useState, useEffect } from "react";
import { checkToken } from "../utils/auth";
import { CurrentUserContext } from "./CurrentUserContext.js";

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
          setError(null);
        })
        .catch((err) => {
          console.error("Token validation error:", err);
          localStorage.removeItem("jwt");
          setCurrentUser(null);
          setIsLoggedIn(false);
          setError("Session expired. Please log in again.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
    setError(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setIsLoggedIn(false);
    setError(null);
  };

  const value = {
    currentUser,
    setCurrentUser,
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
    error,
    setError,
    handleLogin,
    handleLogout,
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
}
