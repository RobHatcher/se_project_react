import { useContext } from "react";
import "./Header.css";
import ToggleSwitch from "../ToogleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  handleSignupClick,
  handleSigninClick,
  isLoggedIn,
  weatherData,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const currentUser = useContext(CurrentUserContext);

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
        {isLoggedIn ? (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + ADD CLOTHES
            </button>
            <Link to="/profile" className="header__link">
              <div className="header__user-container">
                <p className="header__username">{currentUser.name}</p>
                {currentUser.avatar ? (
                  <img
                    src={currentUser.avatar}
                    alt="avatar"
                    className="header__avatar"
                  />
                ) : (
                  <div classname="header__avatar header__avatar-fallback">
                    {firstLetter.toUpperCase()}
                  </div>
                )}
              </div>
            </Link>
          </>
        ) : (
          <>
            <button
              type="button"
              className="header__signup-btn"
              onClick={handleSignupClick}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="header__signin-btn"
              onClick={handleSigninClick}
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
