import styles from "./Miniforge.module.css";
import "../WorkSection/WorkProjects.css";

const Miniforge = function () {
  return (
    <li key="miniforge" className="card-site">
      <a
        href="https://miniforge-email-sign-up.netlify.app"
        target="_blank"
        className="card-link"
        rel="noreferrer"
      >
        <div className="card-front">
          <img
            className="project-image"
            src={require("../../assets/miniforge.png")}
            alt="A view of the hero section for miniforge"
          ></img>
          <h3 className="project-title">Miniforge</h3>
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
            <a
              type="button"
              href="https://miniforge-email-sign-up.netlify.app"
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

export default Miniforge;
