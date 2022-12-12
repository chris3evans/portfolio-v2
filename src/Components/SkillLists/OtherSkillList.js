import styles from "./OtherSkillList.module.css";

import SkillItem from "../SkillItem/SkillItem";

const OtherSkillList = function () {
  return (
    <div className={styles["skills"]}>
      <div className={styles["skills-top-light-container"]}>
        <img
          className={styles["skills-top-light-image"]}
          src={require("../../assets/top-spot-light-transparent.png")}
        ></img>
      </div>
      <div className={styles["skills-container"]}>
        <h3 className={styles["skill-list-heading"]}>Other</h3>
        <ul className={styles["skills-list"]}>
          <SkillItem skill="TypeScript"></SkillItem>
          <SkillItem skill="GitHub"></SkillItem>
          <SkillItem skill="GitFlow"></SkillItem>
          <SkillItem skill="Responsive Design"></SkillItem>
          <SkillItem skill="Material UI"></SkillItem>
          <SkillItem skill="Cypress"></SkillItem>
          <SkillItem skill="Jest"></SkillItem>
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

export default OtherSkillList;
