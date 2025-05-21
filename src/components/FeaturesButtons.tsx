interface FeaturesButtonsProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export default function FeaturesButtons({
  activeTab,
  setActiveTab,
}: FeaturesButtonsProps) {
  return (
    <div className="buttons-container">
      <hr className="mobile-first-line" />
      <div className="btn-container">
        <div className="btn-fake-border--bottom">
          <button
            className={`feature-btn ${
              activeTab === 0 && "feature-btn--focused"
            }`}
            onClick={() => setActiveTab(0)}>
            {" "}
            Simple Bookmarking
          </button>
        </div>
      </div>
      <div className="btn-container">
        <div className="btn-fake-border--bottom">
          <button
            className={`feature-btn ${
              activeTab === 1 && "feature-btn--focused"
            }`}
            onClick={() => setActiveTab(1)}>
            {" "}
            Speedy Searching
          </button>
        </div>
      </div>
      <div className="btn-container">
        <div className="btn-fake-border--bottom">
          <button
            className={`feature-btn ${
              activeTab === 2 && "feature-btn--focused"
            }`}
            onClick={() => setActiveTab(2)}>
            {" "}
            Easy Sharing
          </button>
        </div>
      </div>
    </div>
  );
}
