import ToggleSwitch from "../ToogleSwitch/ToggleSwitch";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__wrapper-left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="header-logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__wrapper-right">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + ADD CLOTHES
        </button>
        <Link to="/profile" className="header__link">
          <div className="header__user-container">
            <p className="header__username">Terrance Tegegne</p>
            <img
              src={avatar}
              alt="Terrence Tegegne"
              className="header__avatar"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
