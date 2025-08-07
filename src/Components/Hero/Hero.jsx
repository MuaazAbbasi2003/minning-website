import HeroPic from "../../Assets/Images/PNGs/muaaz1.png";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div
      className={`text-center d-flex flex-column align-items-center justify-content-center min-vh-100 py-5 ${styles.mainDiv}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h1
              className={`display-3 display-md-2 display-lg-1 fw-bold mb-4 ${styles.heading}`}
            >
              Earn Money From Your{" "}
              <span className={styles.highlight}>Idle Hardware</span>
            </h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <p className={`fs-5 fs-md-4 mb-5 ${styles.description}`}>
              Crypto-Miner is a cryptocurrency miner packed with features that
              help you earn as much money as possible from your Pc or laptop.
              Cryptominer is easy to install, safe on your hardware and secure
              to use.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <img
              src={HeroPic}
              alt="HeroPic"
              className={`img-fluid rounded shadow-lg ${styles.heroImage}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
