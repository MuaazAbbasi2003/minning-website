import React from "react";
import styles from "./Contact.module.css";
import image from "../../Assets/Images/PNGs/left.png";
import imj1 from "../../Assets/Images/SVGs/person.svg";
import End from "../End/End";

export default function Contact() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.contactDiv}>
        <div className={styles.imageDiv}>
          <img src={image} alt="anImage" className={styles.image} />
        </div>
        <div className={styles.form}>
          <h2 className={styles.heading}>Let’s Get In Touch</h2>
          <p className={styles.subText}>
            We’re just a message away. Let’s start the conversation.
          </p>

          <form className={styles.contactForm}>
            <div className={styles.row}>
              <input
                type="text"
                placeholder="Full Name"
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className={styles.inputFull}
            />
            <textarea
              placeholder="Write message"
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className={styles.endDiv}>
        <End></End>
      </div>
    </div>
  );
}
