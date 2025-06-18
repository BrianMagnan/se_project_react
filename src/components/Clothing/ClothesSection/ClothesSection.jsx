import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  handleCardClick,
  userItems,
  handleAddClick,
  onCardLike,
  weatherData,
}) {
  return (
    <section className="ClothesSection">
      <div className="ClothesSection__header">
        <h2 className="ClothesSection__title">Your items</h2>
        <button
          onClick={handleAddClick}
          type="button"
          className="ClothesSection__add"
        >
          + Add new
        </button>
      </div>
      <div className="ClothesSection__cards">
        <ul className="cards__list">
          {userItems
            .filter((card) => card.weather === weatherData.type)
            .map((filteredCard) => (
              <ItemCard
                key={filteredCard._id}
                item={filteredCard}
                onCardClick={handleCardClick}
                onCardLike={onCardLike}
              />
            ))}
        </ul>
      </div>
    </section>
  );
}

export default ClothesSection;
