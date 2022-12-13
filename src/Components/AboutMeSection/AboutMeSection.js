import styles from "./AboutMeSection.module.css";

const AboutMeSection = function () {
  return (
    <div className={styles["hero-section"]}>
      <h1 className={styles["hero-heading"]}>
        <span id={styles["hello"]}>Hello</span> there
      </h1>

      <div className={styles["hero-text-container"]}>
        <p className={styles["hero-text"]} id={styles["hero-text-1"]}>
          My name is
          <span className={styles["hero-special-text"]}>
            {" "}
            Chris Evans <br></br>
          </span>
        </p>
        <p className={styles["hero-text"]} id={styles["hero-text-2"]}>
          I am a
          <span className={styles["hero-special-text"]}>
            {" "}
            full-stack developer{" "}
          </span>
          based near London, UK.
        </p>
      </div>
    </div>
  );
};

export default AboutMeSection;
