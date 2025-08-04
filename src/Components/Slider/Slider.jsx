import React, { useState } from "react";
import styles from "./Slider.module.css";

export const Slider = () => {
  const [hashRate, setHashRate] = useState(25.5);
  const baseHashRate = 25.5;
  const baseBTCPerDay = 0.02;
  const btcToEurRate = 63643;

  const btcPerDay = ((hashRate / baseHashRate) * baseBTCPerDay).toFixed(8);
  const eurPerDay = (btcPerDay * btcToEurRate).toFixed(2);
  const fillPercent = ((hashRate - 1) / 99) * 100;

  return (
    <div className={styles.firstDiv}>
      <div className={styles.mainDiv}>
        <div
          className="card text-white"
          style={{ backgroundColor: "#fcb025", borderRadius: "20px" }}
          id={styles.id1}
        >
          <div className="card-body text-center" id={styles.id2}>
            <h5 className={`card-title fw-bold text-dark p-2 ${styles.h5}`}>
              You Can Earn
            </h5>
            <div className={styles.middelDiv}>
              <h2 className={`fw-bold text-dark ${styles.h2}`}>
                {btcPerDay} <span style={{ fontSize: "0.4em" }}>BTC/Day</span>
              </h2>
              <p className="text-dark fw-normal">{eurPerDay} EUR / Day</p>
            </div>

            {/* Set CSS variable here */}
            <div style={{ "--fill-percent": `${fillPercent}%` }}>
              <input
                type="range"
                className={` ${styles.customSlider}`}
                min="1"
                max="100"
                step="0.1"
                value={hashRate}
                onChange={(e) => setHashRate(parseFloat(e.target.value))}
                style={{ "--fill-percent": `${fillPercent}%` }}
              />
            </div>

            <p className="mt-2 text-dark text-start">
              With <strong>{hashRate}</strong> Ph / s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
