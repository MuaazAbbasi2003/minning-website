import HeroPic from "../../Assets/Images/PNGs/HeroPic.png";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div
      className={`text-center d-flex flex-column align-items-center ${styles.mainDiv}`}
    >
      <div className={`container-fluid ${styles.headingContainer}`}>
        <h1 className={`display-4 fw-bold ${styles.heading}`}>
          Earn Money From Your{" "}
          <span className={styles.highlight}>Idle Hardware</span>
        </h1>
      </div>

      <div className={`container-fluid ${styles.descriptionContainer}`}>
        <p className={styles.description}>
          Crypto-Miner is a cryptocurrency miner packed with features that help
          you earn as much money as possible from your Pc or laptop. Cryptominer
          is easy to install, safe on your hardware and secure to use.
        </p>
      </div>

      <div className={`container-fluid ${styles.imageContainer}`}>
        <img
          src={HeroPic}
          alt="HeroPic"
          className={`img-fluid ${styles.heroImage}`}
        />
      </div>
    </div>
  );
}
