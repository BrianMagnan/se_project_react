export function useUIHandlers({ setCurrentTemperatureUnit }) {
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prev) => {
      return prev === "F" ? "C" : "F";
    });
  };

  return {
    handleToggleSwitchChange,
  };
}
