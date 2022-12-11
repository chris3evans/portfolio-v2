import styles from "./AboutMeSection.module.css";

const AboutMeSection = function () {
  return (
    <div className={styles["hero-section"]}>
      <h1 className={styles["hero-heading"]}>Hello there</h1>

      <p className={styles["hero-text"]}>
        My name is
        <span className={styles["hero-special-text"]}>
          {" "}
          Chris Evans <br></br>
        </span>
        I am a
        <span className={styles["hero-special-text"]}>
          {" "}
          full-stack developer{" "}
        </span>
        based near London, UK.
      </p>
    </div>
  );
};

export default AboutMeSection;
