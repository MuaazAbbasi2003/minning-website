import React, { useRef, useState } from "react";
import styles from "./ProfileComponent.module.css";
import mz1 from "../../../Assets/Images/PNGs/mz1.png";

export default function ProfileComponent() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className={styles.profile}>
      <div className={styles.profileText}>
        <div className={styles.profileTitle}>
          <h1>Update Your Profile</h1>
        </div>
      </div>

      {/* PROFILE FORM (UPLOAD IMAGE) */}
      <div className={styles.profileForm}>
        <img src={mz1} alt="Profile" className={styles.profileImage} />
        <input
          type="text"
          placeholder="Choose your file"
          value={fileName}
          readOnly
          onClick={handleInputClick}
          className={styles.profileInput}
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <button className={styles.profileButton} onClick={handleInputClick}>
          Choose File
        </button>
      </div>

      {/* PROFILE DETAILS (NAME + LANGUAGE) */}
      <div className={styles.profileDetails}>
        <div className={styles.profileName}>
          <h1>Name</h1>
          <input
            type="text"
            className={styles.nameInput}
            placeholder="Enter Your Name"
          />
        </div>
        <div className={styles.profileEmail}>
          <h1>Language</h1>
          <input
            type="text"
            className={styles.emailInput}
            placeholder="Select Language"
          />
        </div>
      </div>

      {/* ACCOUNT SECTION (ID, DATES) */}
      <div className={styles.profileAccount}>
        <div className={styles.accountField}>
          <input
            type="text"
            className={styles.accountLabelInput}
            placeholder="Account Id"
          />
          <input
            type="number"
            className={styles.accountInput}
            placeholder="0"
          />
        </div>
        <div className={styles.accountField}>
          <input
            type="text"
            className={styles.accountLabelInput}
            placeholder="Registration Date"
          />
          <input type="date" className={styles.accountInput} />
        </div>
        <div className={styles.accountField}>
          <input
            type="text"
            className={styles.accountLabelInput}
            placeholder="Last Login Date"
          />
          <input type="date" className={styles.accountInput} />
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className={styles.accountButtons}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.saveButton}>Save Changes</button>
      </div>
    </div>
  );
}
