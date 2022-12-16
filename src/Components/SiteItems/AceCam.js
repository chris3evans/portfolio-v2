import styles from "./AceCam.module.css";
import "../../index.css";

const AceCam = function () {
  return (
    <li key="acecam" className="card-site">
      <a
        href="https://ace-cam.netlify.app"
        target="_blank"
        className="card-link"
      >
        <div className="card-front">
          <img
            className="project-image"
            src={require("../../assets/acecam.png")}
          ></img>
          <h3 className="project-title">AceCam</h3>
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
              href="https://ace-cam.netlify.app"
              target="_blank"
              className="visit-button"
            >
              Visit
            </a>
          </div>
        </div>
      </a>
    </li>
  );
};

export default AceCam;
