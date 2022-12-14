import styles from "./TheDragonClub.module.css";
import "../WorkSection/WorkProjects.css";

const TheDragonClub = function () {
  return (
    <li key="dragon-club" className="card-site">
      <a
        href="https://the-dragons-club.netlify.app"
        target="_blank"
        className="card-link"
        rel="noreferrer"
      >
        <div className="card-front">
          <img
            className="project-image"
            src={require("../../assets/dragon-club.png")}
            alt="A view of the hero section for the dragons club"
          ></img>
          <h3 className="project-title-top">The Dragons</h3>
          <h3 className="project-title-bottom">Club</h3>
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
            </ul>
          </div>
          <div className="button-container">
            <a
              type="button"
              href="https://the-dragons-club.netlify.app"
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

export default TheDragonClub;
