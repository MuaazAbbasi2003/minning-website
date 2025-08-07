import React from "react";
import styles from "./Box.module.css";

export default function Box() {
  return (
    <div className="row mt-4 g-0" id={styles.m1}>
      <div className="col-md-5">
        <div className={styles.box1}>
          <div className={styles.boxinside}>
            <p className={styles.label}>Current Balance</p>
            <h2 className={styles.value}>$4000.00</h2>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className={styles.box2}>
          <div className={styles.boxinside2}>
            <p className={styles.label}>Current Level</p>
            <h2 className={styles.value}>03</h2>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className={`${styles.box3} p-3 d-flex justify-content-between`}>
          <div className={styles.fisrstDiv}>
            <p className={styles.label}>Withdrawal Amount</p>
            <h2 className={styles.valueGray}>$400.00</h2>
          </div>
          <div className={styles.secondDiv}>
            <button className={styles.withdrawButton}>Withdraw Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
