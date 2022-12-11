import styles from "./PageSectionItem.module.css";

const PageSectionItem = function (props) {
  return (
    <li className={styles["page-section-item"]} key={props.sectionName}>
      <h3 className={styles["page-section-item-text"]}>{props.sectionName}</h3>
    </li>
  );
};

export default PageSectionItem;
