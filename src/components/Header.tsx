import logoBookmark from "../assets/images/logo-bookmark.svg";

export default function Header() {
  return (
    <header>
      <div className="mx-2 flex">
        <div className="logoContainer">
          <img src={logoBookmark} alt="" />
        </div>
        <nav>
          <ul>
            <li>FEATURES</li>
            <li>PRICING</li>
            <li>CONTACT</li>
            <li className="loginButton">LOGIN</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
