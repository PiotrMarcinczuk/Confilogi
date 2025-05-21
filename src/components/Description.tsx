import imageMap from "../utils/imageMap";

export default function Description({ image, title, description }: any) {
  console.log(image);
  return (
    <section className="description-section">
      {" "}
      <div className="description-div--absolute">
        <img className="absolute-img" src={image} alt="bookmark image" />
        <div className="blue-div-left"></div>
      </div>
      {/* <div className="description-div--absolute mx-1">
        <div className="description-image">
          <div>
            <img src={imageMap[image]} alt="bookmark image" />
          </div>
        </div>
        <div className="blue-div--left"></div>
      </div> */}
      <div>
        <div className="description-container mx-1">
          <div className="description-text">
            <h1 className="description-h">{title}</h1>
            <p className="description-p">{description}</p>
            <div className="description-buttons">
              <button className="description-btn--blue">More Info</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
