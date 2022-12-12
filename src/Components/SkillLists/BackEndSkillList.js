import styles from "./BackEndSkillList.module.css";

import SkillItem from "../SkillItem/SkillItem";

const BackEndSkillList = function () {
  return (
    <div className={styles["skills"]}>
      <div className={styles["skills-top-light-container"]}>
        <img
          className={styles["skills-top-light-image"]}
          src={require("../../assets/top-spot-light-transparent.png")}
        ></img>
      </div>
      <div className={styles["skills-container"]}>
        <h3 className={styles["skill-list-heading"]}>Back End</h3>
        <ul className={styles["skills-list"]}>
          <SkillItem skill="Node"></SkillItem>
          <SkillItem skill="Express"></SkillItem>
          <SkillItem skill="Koa"></SkillItem>
          <SkillItem skill="PostgreSQL"></SkillItem>
          <SkillItem skill="Sequelize"></SkillItem>
          <SkillItem skill="MongoDB"></SkillItem>
          <SkillItem skill="Mongoose"></SkillItem>
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

export default BackEndSkillList;
