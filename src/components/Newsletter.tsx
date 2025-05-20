import { useRef, useState, useEffect } from "react";
import iconError from "../assets/images/icon-error.svg";
export default function Newsletter() {
  const userEmail = useRef(null);
  const [isError, setIsError] = useState(false);
  const [usersCount, setUsersCount] = useState("35.000");

  useEffect(() => {
    setTimeout(() => {
      setUsersCount("0");
    }, 2000);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail.current || !userEmail.current.includes("@")) {
      setIsError(true);
      return;
    }
    setIsError(false);
  };

  const handleChange = (e: any) => {
    userEmail.current = e.target.value;
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container px-1">
        <p className="users-count">
          {usersCount} {usersCount !== "0" ? "+" : ""} ALREADY JOINED
        </p>
        <p className="newsletter-paragraph">
          Stay up-to-date with what we'are doing
        </p>
        <form className="newsletter-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="input-container">
            <input
              className={`newsletter-input ${
                isError && "newsletter-iunput--error"
              }`}
              type="text"
              placeholder="Enter your email address"
              onChange={(e) => handleChange(e)}
            />
            {isError && (
              <img
                src={iconError}
                alt="error"
                className="newsletter-error-icon"
              />
            )}
            {isError && (
              <div className="validation-error">
                <p className="validation-error-message">
                  Whoops make sure it's an email
                </p>
              </div>
            )}
          </div>
          <button className="newsletter-form--btn" type="submit">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}
