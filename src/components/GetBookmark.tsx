import ilustration from "../assets/images/illustration-hero.svg";
import { memo } from "react";
const GetBookmark = memo(function GetBookmark() {
  return (
    <>
      <section className="getBookmark-section">
        <div className="mx-1 getBookmark-container">
          <div className="getBookmark-text">
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free
            </p>
            <div className="getBookmark-buttons">
              <button className="getBookmark-btn--blue">
                Get it on Chrome
              </button>
              <button className="getBookmark-btn--white">
                Get it on Firefox
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="getBookmark-div-absolute">
        <img className="absolute-img" src={ilustration} alt="bookmark image" />
        <div className="blue-div-right"></div>
      </div>
    </>
  );
});

export default GetBookmark;
