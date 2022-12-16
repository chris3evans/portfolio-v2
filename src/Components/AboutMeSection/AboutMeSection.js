import styles from "./AboutMeSection.module.css";

const AboutMeSection = function () {
  return (
    <>
      <div className={styles["hero-section"]} id="section-about-me">

        <div className={styles["hero-content-container"]}>
          <div className={styles["hero-text-container"]}>
            <h1 className={styles["hero-heading"]}>
              <span id={styles["hello"]}>Hello</span> there
            </h1>
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
              based near London, UK. Over my years of experience I have worked
              on a mixture of websites, front-end apps and full-stack apps. My
              specialty is building responsive, aesthetic UI's using
              technologies such as React and CSS.
            </p>
          </div>
          <div className={styles["hero-visual-container"]}></div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
