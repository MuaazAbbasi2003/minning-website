import styles from "./Middle.module.css";
import pic4 from "../../Assets/Images/PNGs/pic4.png";
import pic5 from "../../Assets/Images/PNGs/rightPIC.png";
export default function Middle() {
  return (
    <div className={styles.mainDivMiddle}>
      <svg
        width="1728"
        height="600"
        viewBox="0 0 1728 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="3"
          d="M0 100H1728M0 200H1728M0 300H1728M0 400H1728M0 500H1728M0 600H1728M0 700H1728M100 700V0M200 700V0M300 700V0M400 700V0M500 700V0M600 700V0M700 700V0M800 700V0M900 700V0M1000 700V0M1100 700V0M1200 700V0M1300 700V0M1400 700V0M1500 700V0M1600 700V0"
          stroke="url(#paint0_radial_28_26)"
          stroke-width="1.5"
        />
        <defs>
          <radialGradient
            id="paint0_radial_28_26"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(864 350) rotate(90) scale(350 864)"
          >
            <stop stop-color="white" />
            <stop offset="0.836538" stop-color="#0A0806" />
          </radialGradient>
        </defs>
      </svg>
      <div className={styles.div2}>
        <div className={styles.div3}>
          <div className={styles.div4}>
            <div className={styles.div5}>
              <p id={styles.id1}>
                Here Is The Future Of <strong>Cryptocurrency Mining</strong>
              </p>
            </div>
            <div className={styles.div6}>
              <p id={styles.id2}>
                Over 100,000 User’s are Earning More Coins by Using
                CryptoMiner’s
                <strong>(Cryptocurrency Miner).</strong>
              </p>
            </div>
            <div className={styles.div7}>
              <img src={pic4} alt="hello" />
            </div>
            <div className={styles.divButton}>
              <button>Sign Up</button>
              <button id={styles.button1}>Login</button>
            </div>
          </div>
          <div className={styles.div8}>
            <img src={pic5} alt="hi" />
          </div>
        </div>
      </div>
    </div>
  );
}
