import React from "react";
import styles from "./AfterSlider.module.css";
import myIMG from "../../../src/Assets/Images/PNGs/Picture1.png";

function AfterSlider() {
  return (
    <div className={styles.hell}>
      <div className="container col-xxl-3 px-4 py-3 px-0 bg-black">
        <div className="row flex-lg-row-reverse d-flex  justify-content-center align-items-center py-5 ">
          <div className="col-lg-6 ">
            <h3 className="display-6 lh-1 mb-3" id={styles.h1}>
              CudoFarm Increases Profits & Efficiency
            </h3>
            <p className={` ${styles.lead1}`}>
              An elite turnkey mining platform that allows mining farms to run
              every worker with maximum transparency, higher efficiency, less
              manual intervention and remotely.
            </p>
            <p className={` ${styles.lead1}`}>
              Full transparency and control over your mining farm no matter
              where you are. CudoFarm provides a console that turns complexity
              into simplicity for ease of use and full control.
            </p>
            <p className={` ${styles.lead1}`}>
              Overclocking and Auto-tune for ASICs and GPUs in a controlled way
              supports higher profitability as well as a prolonged lifespan on
              your hardware. Achieve higher hashrates and lower power usage with
              CudoMiner.
            </p>
          </div>
          <div
            className="col-10 col-sm-8 col-lg-6  rounded-4 d-flex justify-content-center align-items-center p-4"
            id={styles.imgDiv}
          >
            <div
              className={`${styles.div1} d-flex justify-content-center align-items-center`}
            >
              <img
                src={myIMG}
                className={`img-fluid object-fit-cover ${styles.responsiveImage}`}
                alt="Bootstrap Themes"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterSlider;
