import styles from "./SpecterAndRoss.module.css";
import "../../index.css";

const SpecterAndRoss = function () {
  return (
    <li key="specter-ross" className="card-site">
      <div className="card-front">
        <img
          className="project-image"
          src={require("../../assets/specter-ross.png")}
        ></img>
        <h3 className={styles["project-title-top"]}>Specter &</h3>
        <h3 className={styles["project-title-bottom"]}>Ross</h3>
      </div>
      <div className="card-back">
        <h3 className="tech-title">Tech Stack</h3>
        <div className="tech-list">
          <h4 className="tech-type-title">Front End</h4>
          <ul className={styles["front-end-list"]}>
            <li key="HTML5">
              <p className="tech-text">HTML5</p>
            </li>
            <li key="CSS3">
              <p className="tech-text">CSS3</p>
            </li>
            <li key="SASS">
              <p className="tech-text">SASS/SCSS</p>
            </li>
          </ul>
        </div>
        <div className="button-container">
          <a
            type="button"
            href="https://specter-and-ross.netlify.app"
            target="_blank"
            className="visit-button"
          >
            Visit
          </a>
        </div>
      </div>
    </li>
  );
};

export default SpecterAndRoss;
