import dotsImg from "../assets/images/bg-dots.svg";

export default function Extension({ img, browser, version }: any) {
  return (
    <div className="extension-container">
      <img src={img} alt="ikona rozszerzenia" />
      <h4 className="extension-browser">Add tp {browser}</h4>
      <p className="extension-version">Minimum version {version}</p>
      <img src={dotsImg} alt="dots image" className="extension-line" />
      <button className="extension-btn">Add & Install Extension</button>
    </div>
  );
}
