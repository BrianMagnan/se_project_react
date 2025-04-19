import "./ClothesSection.css";
function ClothesSection() {
  return (
    <section className="ClothesSection">
      <div className="ClothesSection__header">
        <h2 className="ClothesSection__title">Your items</h2>
        <button className="ClothesSection__add">+ Add new</button>
      </div>
      <div className="ClothesSection-cards">(Cards Go Here)</div>
    </section>
  );
}
export default ClothesSection;
