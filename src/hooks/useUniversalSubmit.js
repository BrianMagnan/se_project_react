import { useState } from "react";

export function useUniversalSubmit({ closeModal, setError }) {
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(request) {
    // Start loading
    setIsLoading(true);

    request()
      // Close modal only on success
      .then(() => {
        if (closeModal) {
          closeModal();
        }
      })
      // Handle errors
      .catch((error) => {
        console.error("Request failed:", error);
        if (setError) {
          setError("Something went wrong. Please try again.");
        }
      })
      // Stop loading regardless of success/failure
      .finally(() => {
        setIsLoading(false);
      });
  }

  return {
    isLoading,
    handleSubmit,
  };
}
