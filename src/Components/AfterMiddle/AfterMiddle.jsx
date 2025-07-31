import styles from "./AfterMiddle.module.css";
import image1 from "../../Assets/Images/PNGs/image1.png";
import image2 from "../../Assets/Images/PNGs/image2.png";
import image3 from "../../Assets/Images/PNGs/image3.png";
import image4 from "../../Assets/Images/PNGs/image4.png";
export default function AfterMiddle() {
  return (
    <div className={styles.marquee}>
      <marquee behavior="scroll" direction="left" scrollamount="10">
        <div className={styles.div2}>
          <div className={styles.img1}>
            <img src={image1} alt="image1" />
          </div>
          <div className={styles.img3}>
            <img src={image3} alt="image1" />
          </div>
          <div className={styles.img2}>
            <img src={image2} alt="image1" />
          </div>
          <div className={styles.img4}>
            <img src={image4} alt="image1" />
          </div>
        </div>
      </marquee>
    </div>
  );
}
