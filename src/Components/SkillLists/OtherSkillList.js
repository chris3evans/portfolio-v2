import styles from "./OtherSkillList.module.css";

import SkillItem from "../SkillItem/SkillItem";

const OtherSkillList = function () {
  return (
    <div className={styles["skill-list"]}>
      <h3 className={styles["skill-list-heading"]}>Other</h3>
      <ul className={styles["skills"]}>
        <SkillItem skill="TypeScript"></SkillItem>
        <SkillItem skill="GitHub"></SkillItem>
        <SkillItem skill="GitFlow"></SkillItem>
        <SkillItem skill="Responsive Design"></SkillItem>
        <SkillItem skill="Material UI"></SkillItem>
        <SkillItem skill="Cypress"></SkillItem>
        <SkillItem skill="Jest"></SkillItem>
      </ul>
    </div>
  );
};

export default OtherSkillList;
