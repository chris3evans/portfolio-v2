import styles from "./WorkSection.module.css";

import AppList from "../AppList/AppList";
import SiteList from "../SiteList/SiteList";

const WorkSection = function () {
  return (
    <div className={styles["work-section"]} id="section-my-experience">
      <h2>My Experience</h2>
      <div className={styles["work-section-lists"]}>
        <AppList></AppList>
        <SiteList></SiteList>
      </div>
    </div>
  );
};

export default WorkSection;
