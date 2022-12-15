import styles from "./FooterSection.module.css";

const FooterSection = function () {
  return (
    <div className={styles["footer-section"]}>
      <p className={styles["footer-copyright"]}>
        &#169; by Christopher Evans 2022. All work displayed, including this
        portfolio, is my original work. You may not copy or use my work without
        my permission.
      </p>
    </div>
  );
};

export default FooterSection;
