import React from "react";
import styles from "./RevenueSection.module.css";

export default function RevenueSection() {
  return (
    <div className={`${styles.revenue} mt-4 p-4`}>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h4 className="text-white fw-bold mb-2 mb-md-0">Revenue</h4>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <div className={styles.tabs}>
            <button className={`${styles.tabButton} ${styles.active}`}>
              Day
            </button>
            <button className={styles.tabButton}>Week</button>
            <button className={styles.tabButton}>Month</button>
            <button className={styles.tabButton}>Year</button>
          </div>
          <button className={styles.downloadPNG}>Download PNG</button>
          <button className={styles.downloadPDF}>Download PDF</button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-9">
          <div className={styles.chartArea}>
            <ul className={styles.chartLines}>
              <li>
                <span className={`${styles.dot} ${styles.red}`}></span>
              </li>
              <li>
                <span className={`${styles.dot} ${styles.yellow}`}></span>
              </li>
              <li>
                <span className={`${styles.dot} ${styles.green}`}></span>
              </li>
              <li>
                <span className={`${styles.dot} ${styles.blue}`}></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className={styles.legendBox}>
            <ul className={styles.legend}>
              <li>
                <span className={`${styles.dot} ${styles.red}`}></span>{" "}
                Commission
              </li>
              <li>
                <span className={`${styles.dot} ${styles.yellow}`}></span>{" "}
                Mining
              </li>
              <li>
                <span className={`${styles.dot} ${styles.green}`}></span> Bonus
              </li>
              <li>
                <span className={`${styles.dot} ${styles.blue}`}></span> Total
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
