import logoBookmark from "../assets/images/logo-bookmark.svg";
import mobileMenu from "../assets/images/icon-hamburger.svg";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
export default function Header() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <header>
      <div className="mx-1 flex">
        <div className="logo-container">
          <img src={logoBookmark} alt="logo BOOKMARK" />
        </div>
        {!isOpenMobileMenu && (
          <div className="mobile-menu">
            <img
              src={mobileMenu}
              onClick={() => setIsOpenMobileMenu(true)}
              alt="open menu"
            />
          </div>
        )}
        {!isOpenMobileMenu && (
          <nav className="header-nav">
            <ul>
              <li>FEATURES</li>
              <li>PRICING</li>
              <li>CONTACT</li>
              <li className="login-btn">LOGIN</li>
            </ul>
          </nav>
        )}
        {isOpenMobileMenu && (
          <MobileMenu setIsOpenMobileMenu={setIsOpenMobileMenu} />
        )}
      </div>
    </header>
  );
}
