import styles from "./AfterHero.module.css";
export default function AfterHero() {
  return (
    <div className={styles.mainDiv}>
      <div
        className={`bg-black text-secondary px-4 py-3 text-center ${styles.firstDiv}`}
      >
        <div className={` ${styles.div1}`}>
          <h3 className={`my-3 display-6 fw-bold text-white ${styles.h2}`}>
            Increase Your Profit
          </h3>
          <h5 className={styles.h5}>
            ‘Over 100,000+ users trust CudoMiner’s Cryptocurrency Miner for the
            highest profits’
          </h5>
          <div className={`mx-auto d-flex ${styles.div2}`}>
            <p className={`col-lg-6mb-4 ${styles.p1} `}>
              Our Cryptocurrency miner, mining and cloud computing platforms
              have features unparalleled by other leading crypto mining
              software. From automated mining with CudoMiner, to an end-to-end
              solution that combines stats, monitoring, automation, auto
              adjusting overclocking settings, reporting and pool integrations
              with CudoFarm. We have a solution for all miners from PC / laptop
              owners to large scale mining farms. Our platforms create
              efficiency and reduce manual intervention by up to 95%, while
              increasing profitabilit
            </p>
          </div>
          <div className={`mx-auto d-flex ${styles.div2}`}>
            <p className={` col-lg-12 mb-4 ${styles.p1} `}>
              Supporting GPU, CPU and ASICs with a dedicated web console for
              monitoring and remote management of all your devices. CudoMiner’s
              platforms are fully automated and optimised for both profit and
              the highest performance on Windows, Ubuntu (Linux), CudoOS and
              ASICs. CudoMiner is suitable for miners with all levels of
              experience from single machines up to full scale GPU and ASIC
              mining farms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
