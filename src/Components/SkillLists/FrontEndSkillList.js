import styles from "./FrontEndSkillList.module.css";

import SkillItem from "../SkillItem/SkillItem";

const FrontEndSkillList = function () {
  return (
    <div className={styles["skill-list"]}>
      <h3 className={styles["skill-list-heading"]}>Front End</h3>
      <ul className={styles["skills"]}>
        <SkillItem skill="JavaScript"></SkillItem>
        <SkillItem skill="HTML5"></SkillItem>
        <SkillItem skill="CSS3"></SkillItem>
        <SkillItem skill="SASS/SCSS"></SkillItem>
        <SkillItem skill="Tailwind CSS"></SkillItem>
        <SkillItem skill="React"></SkillItem>
        <SkillItem skill="Angular"></SkillItem>
      </ul>
    </div>
  );
};

export default FrontEndSkillList;
