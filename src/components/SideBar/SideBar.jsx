import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ handleProfileClick, handleSignoutClick }) {
    const user = useContext(CurrentUserContext);
    return (
        <div className="sidebar">
            <div className="sidebar__user-info">
                <img src={user.avatar} alt="avatar" className="sidebar__avatar" />
                <p className="sidebar__username">{user.name}</p>
            </div>
            <div className="sidebar__links">
                <button className="sidebar__btn" onClick={handleProfileClick}>
                    Edit Profile
                </button>
                <button className="sidebar__btn" onClick={handleSignoutClick}>Sign Out</button>
            </div>
        </div>
    )
}

export default SideBar;