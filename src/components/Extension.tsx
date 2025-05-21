import dotsImg from "../assets/images/bg-dots.svg";
import { memo } from "react";
interface ExtensionProps {
  img: string;
  browser: string;
  version: number;
}
const Extension = memo(function Extension({
  img,
  browser,
  version,
}: ExtensionProps) {
  return (
    <div className="extension-container">
      <img src={img} alt="extension icon" />
      <h4 className="extension-browser">Add to {browser}</h4>
      <p className="extension-version">Minimum version {version}</p>
      <img src={dotsImg} alt="dots image" className="extension-line" />
      <button className="extension-btn">Add & Install Extension</button>
    </div>
  );
});

export default Extension;
