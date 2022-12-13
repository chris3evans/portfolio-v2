import styles from "./MyFitnessTracker.module.css";

const MyFitnessTracker = function () {
  return (
    <li key="my-fitness-tracker" className={styles["card"]}>
      <div className={styles["card-front"]}>
        <img
          className={styles["project-image"]}
          src={require("../../assets/my-fitness-tracker.png")}
        ></img>
        <h3 className={styles["project-title-top"]}>My Fitness</h3>
        <h3 className={styles["project-title-bottom"]}>Tracker</h3>
      </div>
      <div className={styles["card-back"]}>
        <h3 className={styles["tech-title"]}>Tech Stack</h3>
        <div className={styles["tech-lists-container"]}>
          <div className={styles["tech-list"]}>
            <h4 className={styles["tech-type-title"]}>Front End</h4>
            <ul className={styles["front-end-list"]}>
              <li className={styles["tech-item"]} key="JavaScript">
                <p className={styles["tech-text"]}>JavaScript</p>
              </li>
              <li className={styles["tech-item"]} key="HTML5">
                <p className={styles["tech-text"]}>HTML5</p>
              </li>
              <li className={styles["tech-item"]} key="CSS3">
                <p className={styles["tech-text"]}>CSS3</p>
              </li>
              <li className={styles["tech-item"]} key="React">
                <p className={styles["tech-text"]}>React</p>
              </li>
              <li className={styles["tech-item"]} key="Tailwind CSS">
                <p className={styles["tech-text"]}>Tailwind CSS</p>
              </li>
            </ul>
          </div>

          <div className={styles["tech-list"]}>
            <h4 className={styles["tech-type-title"]}>Back End</h4>
            <ul className={styles["back-end-list"]}>
              <li className={styles["tech-item"]} key="Node">
                <p className={styles["tech-text"]}>Node</p>
              </li>
              <li className={styles["tech-item"]} key="Express">
                <p className={styles["tech-text"]}>Express</p>
              </li>
              <li className={styles["tech-item"]} key="PostgreSQL">
                <p className={styles["tech-text"]}>PostgreSQL</p>
              </li>
              <li className={styles["tech-item"]} key="Sequelize">
                <p className={styles["tech-text"]}>Sequelize</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["button-container"]}>
          <a
            type="button"
            href="#"
            target="_blank"
            className={styles["visit-button"]}
          >
            Visit
          </a>
        </div>
      </div>
    </li>
  );
};

export default MyFitnessTracker;
