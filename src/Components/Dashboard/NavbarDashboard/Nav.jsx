import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import NotificationModal from "./NotificationModal/NotificationModal";
import notificationData from "./notificationData";
import icon2 from "../../../Assets/Images/SVGs/icon1.svg";
import g4 from "../../../Assets/Images/PNGs/g4.png";
import tm1 from "../../../Assets/Images/SVGs/topmid.svg";
import tm2 from "../../../Assets/Images/SVGs/topmid2.svg";
import tm3 from "../../../Assets/Images/SVGs/topmid3.svg";
import ProfileModal from "./ProfileModal/ProfileModal";

export default function Navbar({ activeSection, setActiveSection }) {
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef();

  const toggleNotificationModal = () =>
    setShowNotificationModal((prev) => !prev);
  const toggleProfileModal = () => setShowProfileModal((prev) => !prev);
  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.classList.contains(styles.mobileMenuIcon)
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className={`d-flex bg-black ${styles.navbar}`}>
        <div className={`d-flex align-items-center ${styles.leftTopDiv}`}>
          <div className={styles.logoCircle}></div>
          <span className="ms-2">Crypto Mining</span>
        </div>

        <div
          className={`d-flex justify-content-center ${styles.leftMidDiv} ${
            showMobileMenu ? styles.hideOnMobileMenu : ""
          }`}
        >
          <button
            className={`${styles.navButton} ${
              activeSection === "dashboard" ? styles.activeNavButton : ""
            }`}
            onClick={() => setActiveSection("dashboard")}
          >
            <img src={tm1} alt="icon" className={styles.topm1} />
            Dashboard
          </button>
          <button
            className={`${styles.navButton} ${
              activeSection === "tap" ? styles.activeNavButton : ""
            }`}
            onClick={() => setActiveSection("tap")}
          >
            <img src={tm2} alt="icon" className={styles.topm1} />
            Tap & Earn
          </button>
          <button
            className={`${styles.navButton} ${
              activeSection === "analytics" ? styles.activeNavButton : ""
            }`}
            onClick={() => setActiveSection("analytics")}
          >
            <img src={tm3} alt="icon" className={styles.topm1} />
            Analytics
          </button>
        </div>

        <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
          <div className={styles.topIMgright}>
            <img
              src={icon2}
              alt="notification-icon"
              className={styles.notification}
              onClick={toggleNotificationModal}
              style={{ cursor: "pointer" }}
            />
            <img
              src={g4}
              alt="User Avatar"
              className={styles.avatar}
              onClick={toggleProfileModal}
              style={{ cursor: "pointer" }}
            />
            <span className="ms-2">Username</span>
          </div>

          <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
            &#9776;
          </div>
        </div>
      </nav>

      {showMobileMenu && (
        <div className={styles.mobileDropdown} ref={dropdownRef}>
          <button
            className={styles.navButton}
            onClick={() => {
              setActiveSection("dashboard");
              setShowMobileMenu(false);
            }}
          >
            Dashboard
          </button>
          <button
            className={styles.navButton}
            onClick={() => {
              setActiveSection("tap");
              setShowMobileMenu(false);
            }}
          >
            Tap & Earn
          </button>
          <button
            className={styles.navButton}
            onClick={() => {
              setActiveSection("analytics");
              setShowMobileMenu(false);
            }}
          >
            Analytics
          </button>

          <div className={styles.mobileTopRight}>
            <img
              src={icon2}
              alt="notification-icon"
              className={styles.notification}
              onClick={() => {
                toggleNotificationModal();
                setShowMobileMenu(false);
              }}
              style={{ cursor: "pointer" }}
            />
            <img
              src={g4}
              alt="User Avatar"
              className={styles.avatar}
              onClick={() => {
                toggleProfileModal();
                setShowMobileMenu(false);
              }}
              style={{ cursor: "pointer" }}
            />
            <span className="ms-2">Username</span>
          </div>
        </div>
      )}

      {showNotificationModal && (
        <NotificationModal
          notifications={notificationData}
          onClose={toggleNotificationModal}
        />
      )}

      {showProfileModal && (
        <ProfileModal
          onClose={toggleProfileModal}
          goToProfile={() => {
            setActiveSection("profile");
            toggleProfileModal();
          }}
        />
      )}
    </>
  );
}
