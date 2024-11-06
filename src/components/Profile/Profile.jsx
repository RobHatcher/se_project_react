import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ onCardClick, clothingItems, handleAddButtonClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
      <ClothesSection
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        handleAddButtonClick={handleAddButtonClick}
      />
      </section>
    </div>
  );
}

export default Profile;
