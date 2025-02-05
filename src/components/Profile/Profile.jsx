import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ onCardClick, clothingItems, handleAddClick, handleProfileClick, onCardLike, handleSignoutClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar handleProfileClick={handleProfileClick} handleSignoutClick={handleSignoutClick}/>
      </section>
      <section className="profile__clothing-items">
      <ClothesSection
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
        onCardLike={onCardLike}
      />
      </section>
    </div>
  );
}

export default Profile;
