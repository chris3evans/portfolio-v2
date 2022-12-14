import styles from "./Topfolio.module.css";
import "../../index.css";

const Topfolio = function () {
  return (
    <li key="topfolio" className="card-app">
      <div className="card-front">
        <img
          className="project-image"
          src={require("../../assets/topfolio.png")}
        ></img>
        <h3 className={styles["project-title"]}>Topfolio</h3>
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
              <li key="Material UI">
                <p className="tech-text">Material UI</p>
              </li>
              <li key="TypeScript">
                <p className="tech-text">TypeScript</p>
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
              <li key="MongoDB">
                <p className="tech-text">MongoDB</p>
              </li>
              <li key="Mongoose">
                <p className="tech-text">Mongoose</p>
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
    </li>
  );
};

export default Topfolio;
