import { addItem, deleteItem } from "../utils/clothingApi";
import { useUniversalSubmit } from "./useUniversalSubmit.js";

export function useItemHandlersConsolidated({
  setClothingItems,
  closeActiveModal,
  setError,
}) {
  const { handleSubmit } = useUniversalSubmit({
    closeModal: closeActiveModal,
    setError,
  });

  const handleAddItemModalSubmit = (name, imageUrl, weather) => {
    const item = { name, imageUrl, weather };
    const token = localStorage.getItem("jwt");

    // Create a function that returns a promise
    const makeRequest = () => {
      return addItem(item, token).then((newItem) => {
        setClothingItems((prevItems) => [newItem, ...prevItems]);
      });
    };

    // Use universal submit pattern
    handleSubmit(makeRequest);
  };

  const handleDeleteItem = (item) => {
    const token = localStorage.getItem("jwt");

    // Create a function that returns a promise
    const makeRequest = () => {
      return deleteItem(item, token).then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((prevItem) => prevItem._id !== item._id)
        );
      });
    };

    // Use universal submit pattern
    handleSubmit(makeRequest);
  };

  return {
    handleAddItemModalSubmit,
    handleDeleteItem,
  };
}
