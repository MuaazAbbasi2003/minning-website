import styles from "./navbar.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "../../Assets/Images/PNGs/Logo.png";

export default function Navbar({ onSwitchToLogin }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbarContainer}>
        <NavLink className={styles.navbarLogoLink} to="/">
          <img
            src={LogoImg}
            alt="SeaShell Logo"
            className={styles.navbarLogo}
          />
        </NavLink>

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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.active : ""}`
                }
              >
                <strong>Home</strong>
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/FAQs"
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.active : ""}`
                }
              >
                FAQs
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.active : ""}`
                }
              >
                Blogs
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.active : ""}`
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className={`${styles.menuItem} ${styles.mobileLoginItem}`}>
              <button
                className={`${styles.loginButton} ${styles.mobileLoginButton}`}
                onClick={onSwitchToLogin}
              >
                Login
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.loginButtonWrapper}>
          <button className={styles.loginButton} onClick={onSwitchToLogin}>
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}
