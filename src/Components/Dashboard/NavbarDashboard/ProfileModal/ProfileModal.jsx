import React from "react";
import styles from "./ProfileModal.module.css";
import profilePic from "../../../../Assets/Images/PNGs/g4.png";
import logout from "../../../../Assets/Images/SVGs/logout.svg";

export default function ProfileModal({ onClose, goToProfile }) {
  const handleLogout = () => {
    alert("Logging out...");
    onClose();
  };

  return (
    <div className={styles.modalContainer} onMouseLeave={onClose}>
      <div className={styles.option}>
        <img
          src={profilePic}
          alt="Profile"
          className={styles.optionIcon}
          onClick={goToProfile}
        />
        <span>Profile</span>
      </div>
      <div className={styles.option} onClick={handleLogout}>
        <span className={styles.logoutIcon}>
          <img src={logout} alt="logout" />
        </span>
        <span className={styles.logoutText}>Logout</span>
      </div>
    </div>
  );
}
