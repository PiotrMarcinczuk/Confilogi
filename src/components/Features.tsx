import { useState, memo } from "react";
import Description from "./Description";
import FeaturesButtons from "./FeaturesButtons";
import featuresTab from "../utils/featuresTab";
import useActiveTab from "../hooks/useActiveTab";
const Features = memo(function Features() {
  const { activeTab, setActiveTab } = useActiveTab();
  return (
    <>
      <section className="features-section">
        <div className="features-container">
          <h2 className="features-h">Features</h2>
          <p className="features-p">
            Our aim is to make it quick and easy for you to access your
            fovourite websites. Your bookmarks sync between your devices so you
            can accesss them on the go.
          </p>
          <FeaturesButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </section>
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
    </>
  );
});

export default Features;
