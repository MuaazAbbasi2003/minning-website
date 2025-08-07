import React, { useState } from "react";
import styles from "./TapandEarn.module.css";

export default function TapAndEarn() {
  const [showPlus, setShowPlus] = useState(false);

  const handleClick = () => {
    setShowPlus(true);
    setTimeout(() => setShowPlus(false), 800); // hide after animation
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.leftDiv}>
        <h1>00.00/abc</h1>
        <h1>00.00/abc</h1>
      </div>
      <div className={styles.midDiv}>
        <div className={styles.buttonDiv}>
          <div className={styles.buttonDivLabel}>Tap To Earn</div>
          <button className={styles.buttonDivButton} onClick={handleClick}>
            TAP
          </button>
          {showPlus && <span className={styles.floatingPlus}>+4</span>}
        </div>
      </div>
      <div className={styles.rightDiv}>
        <button>Convert to currency</button>
      </div>
    </div>
  );
}
