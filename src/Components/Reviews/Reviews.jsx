import React from "react";
import styles from "./Reviews.module.css";
import pic1 from "../../../src/Assets/Images/PNGs/one.png";
import pic2 from "../../../src/Assets/Images/PNGs/two.png";
import pic3 from "../../../src/Assets/Images/PNGs/three.png";
import CustomSvg from "./CustomSvg";

export default function Reviews() {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h1}>Reviews</h1>
      <p className={styles.p1}>
        Trusted by thousands of users across the globe who rely on our platform
        every day. Join a growing community that values performance, security,
        and results.
      </p>
      <div className={styles.contentWrapper}>
        <div className={styles.svgContainer}>
          <CustomSvg />
        </div>
        <div className={styles.div2}>
          <div className={styles.div3}>
            <div className={styles.img1}>
              <img src={pic1} alt="img1" />
            </div>
            <div className={styles.img2}>
              <img src={pic2} alt="img2" />
            </div>
            <div className={styles.img3}>
              <img src={pic3} alt="img3" />
            </div>
          </div>
          <div className={styles.div4}>
            <div className={styles.img1}>
              <img src={pic1} alt="img1" />
            </div>
            <div className={styles.img2}>
              <img src={pic2} alt="img2" />
            </div>
          </div>
          <div className={styles.div5}>
            <div className={styles.img1}>
              <img src={pic1} alt="img1" />
            </div>
            <div className={styles.img2}>
              <img src={pic2} alt="img2" />
            </div>
            <div className={styles.img3}>
              <img src={pic3} alt="img3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
