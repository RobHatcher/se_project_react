import "./ItemCard.css";
import { useState, useContext, useEffect } from "react";
import liked from "../../assets/liked.svg";
import unliked from "../../assets/unliked.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLikedBy, setIsLikedBy] = useState([]);
  const user = useContext(CurrentUserContext);
  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike({ _id: item._id, isLiked: item.likes });
    setIsLiked(!isLiked);
    setIsLikedBy([]);
  };

  useEffect(() => {
    if (item.likes.includes(user._id) || isLikedBy.includes(user._id)) {
      setIsLiked(true);
    }
  }, [user]);

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        <button
          className={`card__like-btn ${
            user.name ? "card__like-btn_active" : ""
          }`}
          onClick={handleLike}
        >
          <img src={isLiked ? liked : unliked} className="card__like-img" />
        </button>
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
