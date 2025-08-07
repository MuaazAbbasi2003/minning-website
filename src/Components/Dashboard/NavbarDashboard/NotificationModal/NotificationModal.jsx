import styles from "./NotificationModal.module.css";

export default function NotificationModal({ notifications, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalBackdrop}>
        <div className={styles.modalContainer}>
          <div className={styles.header}>
            <h4>Notifications</h4>
            <button className={styles.closeButton} onClick={onClose}>
              ×
            </button>
          </div>
          <div className={styles.content}>
            {notifications.map((note) => (
              <div
                key={note.id}
                className={`${styles.notificationItem} ${
                  note.isNew ? styles.new : ""
                }`}
              >
                <div className={styles.imagePlaceholder}></div>
                <div className={styles.messageContainer}>
                  <p>{note.message}</p>
                  <small>{note.time}</small>
                </div>
                {note.isNew && <div className={styles.dot}></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
