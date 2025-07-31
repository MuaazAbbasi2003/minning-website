import styles from "./navbar.module.css";
import { useState } from "react";
import LogoImg from "../../Assets/Images/PNGs/Logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbarContainer}>
        <a className={styles.navbarLogoLink} href="none">
          <img
            src={LogoImg}
            alt="SeaShell Logo"
            className={styles.navbarLogo}
          />
        </a>

        <button
          className={`${styles.menuToggleBtn} ${
            isMenuOpen ? styles.menuToggleBtnActive : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}></span>
        </button>

        <div
          className={`${styles.menuLinksContainer} ${
            isMenuOpen ? styles.menuLinksContainerVisible : ""
          }`}
        >
          <ul className={styles.menuLinks}>
            <li className={styles.menuItem}>
              <a className={`${styles.menuLink} ${styles.active}`} href="none">
                <strong id={styles.id}>Home</strong>
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.menuLink} href="none">
                FAQs
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.menuLink} href="none">
                Blogs
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.menuLink} href="none">
                Contact Us
              </a>
            </li>
            <li className={`${styles.menuItem} ${styles.mobileLoginItem}`}>
              <button
                className={`${styles.loginButton} ${styles.mobileLoginButton}`}
              >
                Login
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.loginButtonWrapper}>
          <button className={styles.loginButton}>Login</button>
        </div>
      </nav>
    </div>
  );
}
