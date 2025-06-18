// React and Contexts
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";
import CurrentTemperatureUnitContext from "../../../contexts/CurrentTemperatureUnitContext.jsx";

// Components
import Header from "../../Layout/Header/Header";
import SideBar from "../../Layout/SideBar/SideBar";
import ClothesSection from "../../Clothing/ClothesSection/ClothesSection";
import ItemCard from "../../Clothing/ItemCard/ItemCard";

// Styles
import "./Profile.css";

export default function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  onEditProfile,
  onCardLike,
  weatherData = { weatherData },
  onDeleteItem,
  onAddItemModalSubmit,
  onUpdateProfile,
  onClose,
  onLinkClick,
  onUserLoginSubmit,
  onUserRegisterSubmit,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <div className="profile">
      <SideBar onEditProfile={onEditProfile} />
      <ClothesSection
        userItems={userItems}
        handleCardClick={handleCardClick}
        handleAddClick={handleAddClick}
        onCardLike={onCardLike}
        weatherData={weatherData}
        onDeleteItem={onDeleteItem}
        onAddItemModalSubmit={onAddItemModalSubmit}
        onUpdateProfile={onUpdateProfile}
        onClose={onClose}
        onLinkClick={onLinkClick}
        onUserLoginSubmit={onUserLoginSubmit}
        onUserRegisterSubmit={onUserRegisterSubmit}
      />
    </div>
  );
}
