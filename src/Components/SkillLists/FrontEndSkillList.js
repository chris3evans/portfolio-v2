import styles from "./FrontEndSkillList.module.css";

import SkillItem from "../SkillItem/SkillItem";

const FrontEndSkillList = function () {
  return (
    <div className={styles["skills"]}>
      <div className={styles["skills-top-light-container"]}>
        <img
          className={styles["skills-top-light-image"]}
          src={require("../../assets/top-spot-light-transparent.png")}
        ></img>
      </div>
      <div className={styles["skills-container"]}>
        <h3 className={styles["skill-list-heading"]}>Front End</h3>
        <ul className={styles["skills-list"]}>
          <SkillItem skill="JavaScript"></SkillItem>
          <SkillItem skill="HTML5"></SkillItem>
          <SkillItem skill="CSS3"></SkillItem>
          <SkillItem skill="SASS/SCSS"></SkillItem>
          <SkillItem skill="Tailwind CSS"></SkillItem>
          <SkillItem skill="React"></SkillItem>
          <SkillItem skill="Angular"></SkillItem>
        </ul>
      </div>
      <div className={styles["skills-bottom-light-container"]}>
        <img
          className={styles["skills-bottom-light-image"]}
          src={require("../../assets/bottom-spot-light-transparent.png")}
        ></img>
      </div>
    </div>
  );
};

export default FrontEndSkillList;
