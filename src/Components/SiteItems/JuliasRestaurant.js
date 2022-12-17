import styles from "./JuliasRestaurant.module.css";
import "../WorkSection/WorkProjects.css";

const JuliasRestaurant = function () {
  return (
    <li key="julias-restaurant" className="card-site">
      <a
        href="https://julias-restaurant.netlify.app"
        target="_blank"
        className="card-link"
        rel="noreferrer"
      >
        <div className="card-front">
          <img
            className="project-image"
            src={require("../../assets/julias-restaurant.png")}
            alt="A view of the hero section for julia's restaurant"
          ></img>
          <h3 className="project-title-top">Julia's</h3>
          <h3 className="project-title-bottom">Restaurant</h3>
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
              href="https://julias-restaurant.netlify.app"
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

export default JuliasRestaurant;
