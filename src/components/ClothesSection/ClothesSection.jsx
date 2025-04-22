import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ handleCardClick, clothingItems, handleAddClick }) {
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
          {clothingItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ClothesSection;
