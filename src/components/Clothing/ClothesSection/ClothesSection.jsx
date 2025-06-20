import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  handleCardClick,
  userItems,
  handleAddClick,
  onCardLike,
}) {
  return (
    <section className="ClothesSection">
      <div className="ClothesSection__header">
        <h2 className="ClothesSection__title">Your items</h2>
        <button
          id="add-new-item-button"
          onClick={handleAddClick}
          type="button"
          className="ClothesSection__add"
          aria-label="Add new clothing item"
        >
          + Add new
        </button>
      </div>
      <div className="ClothesSection__cards">
        <ul className="cards__list">
          {userItems.map((filteredCard) => (
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
