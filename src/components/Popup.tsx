import Description from "./Description";
import closeIcon from "../assets/images/icon-close.svg";
import FeaturesButtons from "./FeaturesButtons";
import featuresTab from "../utils/featuresTab";
import useActiveTab from "../hooks/useActiveTab";
import { useEffect } from "react";
export default function Popup({ setIsPopupOpen }: any) {
  const { activeTab, setActiveTab } = useActiveTab();
  useEffect(() => {
    setActiveTab(1);
  }, []);
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="close-icon"
          width="16"
          height="15"
          onClick={() => setIsPopupOpen(false)}>
          <path
            fill="black"
            fillRule="evenodd"
            d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
          />
        </svg>
      </div>
    </section>
  );
}
