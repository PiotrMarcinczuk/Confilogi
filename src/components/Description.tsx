interface DescriptionProps {
  image: string;
  title: string;
  description: string;
}

export default function Description({
  image,
  title,
  description,
}: DescriptionProps) {
  return (
    <section className="description-section">
      {" "}
      <div className="description-div--absolute">
        <img className="absolute-img" src={image} alt="bookmark image" />
        <div className="blue-div-left"></div>
      </div>
      <div>
        <div className="description-container mx-1">
          <div className="description-text">
            <h3 className="description-h">{title}</h3>
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
