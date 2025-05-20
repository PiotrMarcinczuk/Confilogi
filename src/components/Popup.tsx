import Description from "./Description";
import closeIcon from "../assets/images/icon-close.svg";
import { useState } from "react";
import imageMap from "../utils/imageMap";
import FeaturesButtons from "./FeaturesButtons";
import featuresTab from "../assets/featuresTab.json";
import useActiveTab from "../hooks/useActiveTab";
export default function Popup({ setIsPopupOpen }: any) {
  const { activeTab, setActiveTab } = useActiveTab();
  return (
    <section className="popup-section">
      <div className="popup-container">
        <FeaturesButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        {featuresTab.map((item, key) => {
          if (key === activeTab) {
            return (
              <Description
                key={key}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          }
        })}
      </div>
      <img
        src={closeIcon}
        alt="close icon"
        className="close-icon"
        onClick={() => setIsPopupOpen(false)}
      />
    </section>
  );
}
