import styles from "./ContactMeForm.module.css";

const ContactMeForm = function () {
  return (
    <div className={styles["contact-me-form"]}>
      <p className={styles["contact-me-message"]}>
        If you would like to have a chat with me or talk about a project idea,
        feel free to contact me via email and I will be happy to respond
      </p>
      <div className={styles["contact-me-container"]}>
        <div className={styles["contact-me-link-container"]}>
          <a href="mailto:chris3evans.ce@gmail.com">
            <img
              className={styles["contact-me-icon"]}
              src={require("../../assets/email-transparent.png")}
            ></img>
          </a>
        </div>
        <div className={styles["icon-hover-container"]}>
          <img
            className={styles["icon-hover-image"]}
            src={require("../../assets/top-spot-light-transparent.png")}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ContactMeForm;
