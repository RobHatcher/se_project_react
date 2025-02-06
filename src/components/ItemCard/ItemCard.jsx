import "./ItemCard.css";
import { useState, useContext, useEffect } from "react";
import liked from "../../assets/liked.svg";
import unliked from "../../assets/unliked.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const user = useContext(CurrentUserContext);
  const handleCardClick = () => {
    onCardClick(item);
  };

  const isLiked = item.likes.some((id) => id === user._id);

  const handleLike = () => {
    onCardLike({ _id: item._id, isLiked, user });
  };

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {isLoggedIn && (
          <button
            className={`card__like-btn ${
              user.name ? "card__like-btn_active" : ""
            }`}
            onClick={handleLike}
          >
            <img src={isLiked ? liked : unliked} className="card__like-img" />
          </button>
        )}
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
