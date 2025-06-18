import { addItem, deleteItem } from "../utils/clothingApi";

export function useItemHandlers({ setClothingItems, closeActiveModal }) {
  const handleAddItemModalSubmit = (name, imageUrl, weather) => {
    const item = { name, imageUrl, weather };
    const token = localStorage.getItem("jwt");
    addItem(item, token)
      .then((newItem) => {
        setClothingItems((prevItems) => [newItem, ...prevItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (item) => {
    const token = localStorage.getItem("jwt");
    deleteItem(item, token)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((prevItem) => prevItem._id !== item._id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  return {
    handleAddItemModalSubmit,
    handleDeleteItem,
  };
}
