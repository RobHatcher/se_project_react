import "./SideBar.css";
import avatar from "../../assets/avatar.png";

function SideBar({}) {
    return (
        <div className="sidebar">
            <img className="sidebar__avatar" src={avatar} alt="default avatar" />
            <p className="sidebar__username">Terrance Tegegne</p>
        </div>
    )
}

export default SideBar;