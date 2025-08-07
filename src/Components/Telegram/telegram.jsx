import React from "react";
import styles from "./Telegram.module.css";
import muaaz2 from "../../Assets/Images/PNGs/muaaz2.png";

export default function Telegram() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.secondDiv}>
        <div className={styles.thirdDiv}>
          <img src={muaaz2} alt="image2" />
        </div>
        <p>Join Our Crypto Mining Channel on telegram</p>
        <button>Join Now</button>
      </div>
    </div>
  );
}
