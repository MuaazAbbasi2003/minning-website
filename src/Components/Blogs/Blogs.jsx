import React, { Component } from "react";
import styles from "./Blogs.module.css";
import p1 from "../../Assets/Images/PNGs/tp.png";

export default class Blogs extends Component {
  render() {
    return (
      <div className={styles.mainDiv} id="Blogs">
        <h1 className={styles.h1}>Blogs</h1>
        <p className={styles.p1}>
          Explore our latest insights, tips, and trends.
        </p>
        <div className={styles.div2}>
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className={`card ${styles.cardDiv}`}
              style={{ width: "18rem", borderRadius: "13px" }}
            >
              <img
                src={p1}
                className={`card-img-top ${styles.cardImage}`}
                alt="blog visual"
              />
              <div className={`card-body ${styles.cardbodyDiv}`}>
                <h6 className={styles.cardtitle}>
                  Design That Connects Meaningful User Experience
                </h6>
                <p className={`card-text ${styles.cardtext}`}>
                  Explore how thoughtful UI/UX design can turn digital products
                  into powerful, user-centric experiences;
                </p>
                <a href="#" className={styles.anchor}>
                  Learn More
                  <strong>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </strong>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
