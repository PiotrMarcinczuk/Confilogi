import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/base/index.scss";
import "./sass/components/header.scss";
import "./sass/components/footer.scss";
import "./sass/components/faq.scss";
import "./sass/components/extension.scss";
import "./sass/components/description.scss";
import "./sass/components/popup.scss";
import "./sass/components/main.scss";
import "./sass/components/features.scss";
import "./sass/components/featuresButtons.scss";
import "./sass/components/mobileMenu.scss";
import "./sass/base/utility.scss";
import "./sass/components/getBookmark.scss";
import "./sass/components/newsletter.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
