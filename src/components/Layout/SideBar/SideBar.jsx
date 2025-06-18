import { useContext } from "react";
import "./SideBar.css";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";

function SideBar({ onEditProfile }) {
  const { currentUser, handleLogout } = useContext(CurrentUserContext);

  const getUserInitial = () => {
    if (currentUser && currentUser.name) {
      return currentUser.name.charAt(0).toUpperCase();
    }
    return "?";
  };

  return (
    <section className="sidebar">
      <div className="sidebar__header">
        {currentUser?.avatar ? (
          <img
            className="sidebar__avatar"
            src={currentUser.avatar}
            alt={currentUser.name}
          />
        ) : (
          <div className="sidebar__avatar-placeholder">{getUserInitial()}</div>
        )}
        <h1 className="sidebar__profile-name">{currentUser?.name || "User"}</h1>
      </div>
      <button
        onClick={onEditProfile}
        type="button"
        className="sidebar__button"
        aria-label="Edit profile"
      >
        Change profile data
      </button>
      <button
        className="sidebar__button"
        onClick={handleLogout}
        type="button"
        aria-label="Logout"
      >
        Log out
      </button>
    </section>
  );
}

export default SideBar;
