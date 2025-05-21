import Faq from "./Faq";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Extension from "./Extension";
import chromeImg from "../assets/images/logo-chrome.svg";
import GetBookmark from "./GetBookmark";
import Features from "./Features";
import Popup from "./Popup";
import { useEffect, useState } from "react";
import useCusorDetection from "../hooks/useCursorDetection";
export default function Main() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isCursorOnTop = useCusorDetection();

  useEffect(() => {
    // setTimeout(() => {
    //   setIsPopupOpen(true);
    // }, 2000);
    if (isCursorOnTop) {
      setIsPopupOpen(true);
    }
  }, [isCursorOnTop]);

  return (
    <>
      {isPopupOpen && <Popup setIsPopupOpen={setIsPopupOpen} />}
      <Header />
      <main>
        <GetBookmark />
        <Features />
        <section className="extensions-section">
          <div className="mx-1">
            <div className="extensions-container">
              <h4 className="extensions-h4">Download the extension</h4>
              <p className="extensions-p">
                We've got more browsers in the pipeline. Please do let us know
                if you've got a favourite you'h like us to prioritize
              </p>
              <div className="extensions-list">
                <Extension img={chromeImg} browser={"Chrome"} version={62} />
                <Extension img={chromeImg} browser={"Chrome"} version={62} />
                <Extension img={chromeImg} browser={"Chrome"} version={62} />
              </div>
            </div>
          </div>
        </section>
        <Faq />
      </main>
      <Footer />
    </>
  );
}
