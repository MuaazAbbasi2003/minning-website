import React, { useState } from "react";
import styles from "./CreateAccountModal.module.css";

export default function CreateAccountModal({ onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Account created:", formData);
    // Sign-up logic here
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <span className={styles.closeBtn} onClick={onClose}>
          ×
        </span>
        <h2>Create Account</h2>
        <p>Join us today — it's quick and easy!</p>

        {/* Create Account Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.submitBtn}>
            Sign Up
          </button>
        </form>

        <div className={styles.divider}>
          <span>OR</span>
        </div>

        {/* Google Button */}
        <button className={styles.googleBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.545 6.558a9.4 9.4 0 0 1 .139 
              1.626c0 2.434-.87 4.492-2.384 
              5.885h.002C11.978 15.292 10.158 
              16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 
              1 5.352 2.082l-2.284 2.284A4.35 
              4.35 0 0 0 8 3.166c-2.087 
              0-3.86 1.408-4.492 3.304a4.8 
              4.8 0 0 0 0 3.063h.003c.635 
              1.893 2.405 3.301 4.492 
              3.301 1.078 0 2.004-.276 
              2.722-.764h-.003a3.7 3.7 0 0 
              0 1.599-2.431H8v-3.08z"
            />
          </svg>
          Continue With Google
        </button>

        {/* Microsoft Button */}
        <button className={styles.microsoftBtn}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
          />
          Sign up With Microsoft
        </button>

        {/* Switch to Login */}
        <p className={styles.switchText}>
          Already have an account?{" "}
          <span onClick={onSwitchToLogin}>Sign In</span>
        </p>
      </div>
    </div>
  );
}
