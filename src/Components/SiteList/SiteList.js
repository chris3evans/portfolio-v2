import styles from "./SiteList.module.css";

import AceCam from "../SiteItems/AceCam";
import SpecterAndRoss from "../SiteItems/SpecterAndRoss";

const SiteList = function () {
  return (
    <ul className={styles["site-list"]}>
      <AceCam></AceCam>
      <SpecterAndRoss></SpecterAndRoss>
    </ul>
  );
};

export default SiteList;
