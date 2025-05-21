import { useRef, useState, useEffect, FormEvent, ChangeEvent } from "react";
import iconError from "../assets/images/icon-error.svg";
import JoinedCount from "./JoinedCount";
export default function Newsletter() {
  const userEmail = useRef<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!userEmail.current || !userEmail.current.includes("@")) {
      setIsError(true);
      return;
    }
    setIsError(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    userEmail.current = e.target.value;
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <JoinedCount />
        <p className="newsletter-paragraph">
          Stay up-to-date with what we'are doing
        </p>
        <form className="newsletter-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="input-container">
            <input
              className={`newsletter-input ${
                isError && "newsletter-iunput-error"
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
          <button className="newsletter-form-btn" type="submit">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}
