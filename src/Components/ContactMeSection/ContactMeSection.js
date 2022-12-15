import styles from "./ContactMeSection.module.css";

import ContactMeForm from "../ContactMeForm/ContactMeForm";

const ContactMeSection = function () {
  return (
    <div className={styles["contact-me-section"]} id="section-work-with-me">
      <h2 className={styles["contact-me-section-heading"]}>
        Lets Work Together!
      </h2>
      <ContactMeForm></ContactMeForm>
    </div>
  );
};

export default ContactMeSection;
