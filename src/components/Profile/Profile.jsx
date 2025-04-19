import "./Profile.css";
import { useContext } from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
export default function Profile() {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection />
    </div>
  );
}
