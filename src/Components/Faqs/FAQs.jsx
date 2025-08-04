import React, { useState } from "react";
import styles from "./FAQs.module.css";
import lp1 from "../../Assets/Images/PNGs/lp1.png";
import lp2 from "../../Assets/Images/PNGs/lp2.png";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What is your name?",
      answer: "My name is Muaaz.",
    },
    {
      question: "What do you do?",
      answer: "I’m a Computer Science student and a web developer.",
    },
    {
      question: "What technologies do you use?",
      answer: "I use React, Node.js, Python, and more.",
    },
    {
      question: "Are your projects responsive?",
      answer: "Yes, all my projects are mobile-friendly and responsive.",
    },
    {
      question: "Where are you located?",
      answer: "I'm based in Pakistan.",
    },
  ];

  function handleToggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className={styles.mainDiv} id="FAQs">
      <h1 className={styles.h1}>FAQs</h1>
      <p className={styles.p1}>
        We’ve answered the most common questions so you don’t have to search
        far. From getting started to advanced features everything is covered
        here.
      </p>
      <div className={styles.contentWrapper}>
        <div className={styles.inside}>
          {faqs.map((item, index) => (
            <React.Fragment key={index}>
              <div className={styles.div2}>
                <div className={styles.div3}>
                  <p>{item.question}</p>
                  <button onClick={() => handleToggle(index)}>
                    {openIndex === index ? (
                      "-"
                    ) : (
                      <img src={lp1} className={styles.img1} alt="toggle" />
                    )}
                  </button>
                </div>
              </div>
              {openIndex === index && (
                <div className={styles.answerContent}>
                  <p>{item.answer}</p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className={styles.inside2}>
          <div className={styles.picInside}>
            <img src={lp2} alt="hello" className={styles.img2} />
          </div>
        </div>
      </div>
    </div>
  );
}
