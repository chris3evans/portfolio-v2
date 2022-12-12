import styles from "./SkillItem.module.css";

const SkillItem = function (props) {
  return (
    <li className={styles["skill"]} key={props.skill}>
      <p className={styles["skill-text"]}>{props.skill}</p>
    </li>
  );
};

export default SkillItem;
