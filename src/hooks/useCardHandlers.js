import { useContext } from "react";
import { addItemLike, removeItemLike } from "../utils/clothingApi";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import useModalOpen from "./useModalOpen";

export function useCardHandlers({ setClothingItems }) {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  const { handleLoginClick } = useModalOpen();

  const handleCardLike = (item) => {
    const token = localStorage.getItem("jwt");
    const isLiked = item.likes?.some((id) => id === currentUser?._id) || false;

    if (!isLoggedIn) {
      handleLoginClick();
      return;
    }

    !isLiked
      ? addItemLike(item._id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === item._id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err))
      : removeItemLike(item._id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === item._id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err));
  };

  return {
    handleCardLike,
  };
}
