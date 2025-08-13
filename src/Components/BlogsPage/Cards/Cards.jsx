import React from "react";
import styles from "./Cards.module.css";
import Card from "./card/Card";

export default function Cards() {
  return (
    <div className={styles.firstDiv}>
      <div className={styles.h1Div}>
        <h3>Explore our latest insights, tips, and trends.</h3>
      </div>
      <div className={styles.mainCardDiv}>
        <div className={styles.firstCardDiv}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div className={styles.firstCardDiv}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div className={styles.firstCardDiv}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}
