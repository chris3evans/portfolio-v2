import styles from "./BackEndSkillList.module.css";

import SkillItem from "../SkillItem/SkillItem";

const BackEndSkillList = function () {
  return (
    <div className={styles["skill-list"]}>
      <h3 className={styles["skill-list-heading"]}>Back End</h3>
      <ul className={styles["skills"]}>
        <SkillItem skill="Node"></SkillItem>
        <SkillItem skill="Express"></SkillItem>
        <SkillItem skill="Koa"></SkillItem>
        <SkillItem skill="PostgreSQL"></SkillItem>
        <SkillItem skill="Sequelize"></SkillItem>
        <SkillItem skill="MongoDB"></SkillItem>
        <SkillItem skill="Mongoose"></SkillItem>
      </ul>
    </div>
  );
};

export default BackEndSkillList;
