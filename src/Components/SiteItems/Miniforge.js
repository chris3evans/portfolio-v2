import styles from "./Miniforge.module.css";
import "../../index.css";

const Miniforge = function () {
  return (
    <li key="miniforge" className="card-site">
      <div className="card-front">
        <img
          className="project-image"
          src={require("../../assets/miniforge.png")}
        ></img>
        <h3 className={styles["project-title"]}>Miniforge</h3>
      </div>
      <div className="card-back">
        <h3 className="tech-title">Tech Stack</h3>
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
            <li key="SASS">
              <p className="tech-text">SASS/SCSS</p>
            </li>
            <li key="Mailchimp">
              <p className="tech-text">MailchimpAPI</p>
            </li>
          </ul>
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

export default Miniforge;
