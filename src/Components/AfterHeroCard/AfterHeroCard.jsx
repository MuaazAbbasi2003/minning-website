import styles from "./AfterHeroCard.module.css";
import CustomIcon from "../AfterHeroCard/CustomIcon";
import Icon from "../AfterHeroCard/CustomIcon";
export default function AfterHeroCard() {
  return (
    <div className={`container-fluid bg-black ${styles.the1}`}>
      <div
        className="container d-flex justify-content-center"
        id="hanging-icons"
      >
        <div
          className={`row g-3 d-flex align-items-start justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 mt-4 mb-4 ${styles.divMainOne}`}
        >
          {/* First Card */}
          <div
            className={`col d-flex align-items-start bg-black p-1 p-md-3 mx-2 mx-md-4 ${styles.card1}`}
          >
            <div className="icon-square text-body-emphasis  d-inline-flex align-items-center justify-content-center fs-5 flex-shrink-0 me-3 mt-2">
              {/* <svg className="bi" width="2em" height="2em" aria-hidden="true">
                <use xlinkHref="#toggles2"></use>
              </svg> */}
              <CustomIcon width="2em" height="2em" />
            </div>
            <div>
              <h3 className="fs-4" id={styles.h3}>
                Download our Ultimate Guide to Mining
              </h3>
              <p>
                "We've created a detailed, comprehensive guide to help you
                begin, start your mining journey, adventure with confidence and
                clarity!"
              </p>
              <a href="2" className="btn" id={styles.button1}>
                Primary button
              </a>
            </div>
          </div>

          {/* second Card */}
          <div
            className={`col d-flex align-items-start bg-black p-1 p-md-4 mx-2 mx-md-4 ${styles.card1}`}
          >
            <div className="icon-square text-body-emphasis  d-inline-flex align-items-center justify-content-center fs-5 flex-shrink-0 me-3 mt-2">
              {/* <svg className="bi" width="2em" height="2em" aria-hidden="true">
                <use xlinkHref="#toggles2"></use>
              </svg> */}
              <Icon></Icon>
            </div>

            <div>
              <h3 className="fs-4" id={styles.h3}>
                About Crypto Miner
              </h3>
              <p>
                Powerful, all-in-one crypto mining and cloud computing platforms
                designed for everyone from casual miners to large-scale
                operations.
              </p>
              <a href="2" className="btn" id={styles.button2}>
                Primary button
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
