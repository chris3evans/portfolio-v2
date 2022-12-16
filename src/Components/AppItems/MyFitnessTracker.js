import styles from "./MyFitnessTracker.module.css";
import "../../index.css";

const MyFitnessTracker = function () {
  return (
    <li key="my-fitness-tracker" className="card-app">
      <a href="#" target="_blank" className="card-link">
        <div className="card-front">
          <img
            className="project-image"
            src={require("../../assets/my-fitness-tracker.png")}
          ></img>
          <h3 className="project-title-top">My Fitness</h3>
          <h3 className="project-title-bottom">Tracker</h3>
        </div>
        <div className="card-back">
          <h3 className="tech-title">Tech Stack</h3>
          <div className={styles["tech-lists-container"]}>
            <div className="tech-list">
              <h4 className="tech-type-title">Front End</h4>
              <ul className={styles["front-end-list"]}>
                <li key="JavaScript">
                  <p className="tech-text">JavaScript</p>
                </li>
                <li key="HTML5">
                  <p className="tech-text">HTML5</p>
                </li>
                <li key="CSS3">
                  <p className="tech-text">CSS3</p>
                </li>
                <li key="React">
                  <p className="tech-text">React</p>
                </li>
                <li key="Tailwind CSS">
                  <p className="tech-text">TailwindCSS</p>
                </li>
              </ul>
            </div>

            <div className="tech-list">
              <h4 className="tech-type-title">Back End</h4>
              <ul className={styles["back-end-list"]}>
                <li key="Node">
                  <p className="tech-text">Node</p>
                </li>
                <li key="Express">
                  <p className="tech-text">Express</p>
                </li>
                <li key="PostgreSQL">
                  <p className="tech-text">PostgreSQL</p>
                </li>
                <li key="Sequelize">
                  <p className="tech-text">Sequelize</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="button-container">
            <a type="button" href="#" target="_blank" className="visit-button">
              Visit
            </a>
          </div>
        </div>
      </a>
    </li>
  );
};

export default MyFitnessTracker;
