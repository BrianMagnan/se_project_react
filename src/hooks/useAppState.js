export function useAppState({ setError, setCurrentTemperatureUnit }) {
  // Error handling functionality
  const handleErrorClose = () => {
    setError(null);
  };

  // UI handlers functionality
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prev) => {
      return prev === "F" ? "C" : "F";
    });
  };

  return {
    handleErrorClose,
    handleToggleSwitchChange,
  };
}
