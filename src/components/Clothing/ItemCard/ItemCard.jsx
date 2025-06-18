import { useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";

function ItemCard({ item, onCardClick, onCardLike }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike(item);
  };

  const isLiked =
    isLoggedIn && currentUser && item.likes
      ? item.likes.some((id) => id === currentUser._id)
      : false;

  let itemLikeButtonClassName = "card__like-button_hidden";
  if (isLoggedIn) {
    itemLikeButtonClassName = "card__like-button";
  }
  if (isLiked) {
    itemLikeButtonClassName += " card__like-button_active";
  }

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name} </h2>
        <button
          className={itemLikeButtonClassName}
          onClick={handleLike}
        ></button>
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
