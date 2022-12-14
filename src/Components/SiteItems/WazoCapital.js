import styles from "./WazoCapital.module.css";
import "../../index.css";

const WazoCapital = function () {
  return (
    <li key="wazo-capital" className="card-site">
      <div className="card-front">
        <img
          className="project-image"
          src={require("../../assets/wazo-capital.png")}
        ></img>
        <h3 className={styles["project-title-top"]}>Wazo</h3>
        <h3 className={styles["project-title-bottom"]}>Capital</h3>
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
            href="https://wazo-capital.netlify.app"
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

export default WazoCapital;
