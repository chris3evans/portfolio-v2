import styles from "./PageSectionList.module.css";
import PageSectionItem from "../PageSectionItem/PageSectionItem";

const PageSectionList = function () {
  return (
    <ul className={styles["page-section-list"]}>
      <PageSectionItem sectionName="About Me"></PageSectionItem>
      <PageSectionItem sectionName="My Skills"></PageSectionItem>
      <PageSectionItem sectionName="My Experience"></PageSectionItem>
      <PageSectionItem sectionName="Work With Me"></PageSectionItem>
    </ul>
  );
};

export default PageSectionList;
