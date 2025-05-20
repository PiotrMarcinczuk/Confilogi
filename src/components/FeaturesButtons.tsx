export default function FeaturesButtons({ activeTab, setActiveTab }: any) {
  return (
    <div className="buttons-container">
      <div className="btn-container">
        <button
          className={`feature-btn ${activeTab === 0 && "feature-btn--focused"}`}
          onClick={() => setActiveTab(0)}>
          {" "}
          Simple Bookmarking
        </button>
      </div>
      <div className="btn-container">
        <button
          className={`feature-btn ${activeTab === 1 && "feature-btn--focused"}`}
          onClick={() => setActiveTab(1)}>
          {" "}
          Simple Bookmarking
        </button>
      </div>
      <div className="btn-container">
        <button
          className={`feature-btn ${activeTab === 2 && "feature-btn--focused"}`}
          onClick={() => setActiveTab(2)}>
          {" "}
          Simple Bookmarking
        </button>
      </div>
    </div>
  );
}
