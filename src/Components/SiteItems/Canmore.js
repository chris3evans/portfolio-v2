import styles from "./Canmore.module.css";
import "../WorkSection/WorkProjects.css";

const Canmore = function () {
  return (
    <li key="canmore" className="card-site">
      <a
        href="https://canmore.netlify.app"
        target="_blank"
        className="card-link"
        rel="noreferrer"
      >
        <div className="card-front">
          <img
            className="project-image"
            src={require("../../assets/canmore.png")}
            alt="A view of the hero section for canmore"
          ></img>
          <h3 className="project-title">Canmore</h3>
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
              href="https://canmore.netlify.app"
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

export default Canmore;
