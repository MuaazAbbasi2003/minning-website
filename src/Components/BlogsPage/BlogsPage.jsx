import React from "react";
import styles from "./BlogsPage.module.css";
import img1 from "../../Assets/Images/PNGs/heroimage.png";
import Cards from "./Cards/Cards";
import End from "../End/End";

export default function BlogsPage() {
  return (
    <div className={styles.allDiv}>
      <div className={styles.mainDiv}>
        <div className={styles.div2}>
          <img src={img1} alt="mainImage" className={styles.img1} />
          <div className={styles.overlay}>
            <h1 className={styles.heading}> Blogs</h1>
            <p className={styles.subheading}>
              Insights, tips, and stories to inspire your journey.
            </p>
          </div>
        </div>
      </div>
      <Cards></Cards>
      <div>
        <End></End>
      </div>
    </div>
  );
}
