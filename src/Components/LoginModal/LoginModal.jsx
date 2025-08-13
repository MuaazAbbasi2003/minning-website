import React, { useState } from "react";
import styles from "./LoginModal.module.css";
import API from "../../api/axios.js"; // named export

export default function LoginModal({ onCl, onSwitchToSignup }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await API.post("/login", {
        email: formData.email,
        password: formData.password,
      });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      console.log("Login successful:", res.data);

      onCl();
      window.location.reload();
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.loginModal}>
      <div className={styles.loginBox}>
        <span className={styles.closeBtn} onClick={onCl}>
          ×
        </span>
        <h2>Welcome</h2>
        <p>Sign In To Your Account</p>

        {/* Show Error */}
        {error && <p className={styles.errorMsg}>{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className={styles.loginForm}>
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
          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
          <button
            type="button"
            className={styles.signupBtn}
            onClick={onSwitchToSignup}
          >
            Create Account
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
          Sign in With Microsoft
        </button>
      </div>
    </div>
  );
}
