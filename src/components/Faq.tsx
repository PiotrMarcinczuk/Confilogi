import { useState, memo } from "react";
import faqQuestions from "../utils/faqQuestions";
const Faq = memo(function Faq() {
  const [questionIndexTab, setQuestionIndexTab] = useState<Array<number>>([]);

  return (
    <section className="faq-section">
      <div className="mx-1">
        <div className="mx-1 faq-container">
          <h5 className="faq-h">Frequently Asked Questions</h5>
          <p className="faq-p">
            Here are some of our FAQs. If you have any questions you'd like
            answered please feel free to email us.
          </p>
          <ul>
            <hr />
            {faqQuestions.map((item, key) => {
              return (
                <div key={key}>
                  <li
                    key={key}
                    className="faq-list-item"
                    onClick={() => {
                      setQuestionIndexTab((prev) => {
                        if (prev.includes(key)) {
                          return prev.filter((item) => item !== key);
                        }
                        return [...prev, key];
                      });
                    }}>
                    <div className="faq-list-item-title">
                      <h6 className="faq-list-h">{item.question}</h6>
                      <div
                        className={`mr-4 faq-list-item-arrow${
                          questionIndexTab.includes(key) ? "--active" : ""
                        }`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="12">
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            d="M1 1l8 8 8-8"
                          />
                        </svg>
                      </div>
                    </div>
                    {questionIndexTab.includes(key) && (
                      <p className="faq-list-p">{item.answer}</p>
                    )}
                  </li>
                  <hr />
                </div>
              );
            })}
          </ul>
          <button className="faq-info-btn">More Info</button>
        </div>
      </div>
    </section>
  );
});

export default Faq;
