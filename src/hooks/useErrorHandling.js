export function useErrorHandling({ setError }) {
  const handleErrorClose = () => {
    setError(null);
  };

  return {
    handleErrorClose,
  };
}
