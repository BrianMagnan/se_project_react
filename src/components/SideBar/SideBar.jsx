import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

function SideBar() {
  return (
    <section className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Terrence Tegegne" />

      <h1 className="sidebar__profile-name">Terrence Tegegne</h1>
    </section>
  );
}
export default SideBar;
