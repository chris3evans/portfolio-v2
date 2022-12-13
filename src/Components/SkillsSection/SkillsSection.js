import styles from "./SkillsSection.module.css";
import FrontEndSkillList from "../SkillLists/FrontEndSkillList";
import BackEndSkillList from "../SkillLists/BackEndSkillList";
import OtherSkillList from "../SkillLists/OtherSkillList";
import TechIconList from "../TechIconList/TechIconList";

const SkillsSection = function () {
  return (
    <div className={styles["skills-section"]}>
      <h2 className={styles["skills-section-heading"]}>My Skills</h2>
      <div className={styles["skill-list-container"]}>
        <FrontEndSkillList></FrontEndSkillList>
        <BackEndSkillList></BackEndSkillList>
        <OtherSkillList></OtherSkillList>
      </div>
      <div className={styles["tech-icons-container"]}>
        <TechIconList></TechIconList>
      </div>
    </div>
  );
};

export default SkillsSection;
