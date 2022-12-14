import styles from "./SiteList.module.css";

import AceCam from "../SiteItems/AceCam";

const SiteList = function () {
  return (
    <ul className={styles["site-list"]}>
      <AceCam></AceCam>
    </ul>
  );
};

export default SiteList;
