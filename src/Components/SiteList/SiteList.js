import styles from "./SiteList.module.css";

import AceCam from "../SiteItems/AceCam";
import SpecterAndRoss from "../SiteItems/SpecterAndRoss";
import SkyDiveDubai from "../SiteItems/SkyDiveDubai";

const SiteList = function () {
  return (
    <ul className={styles["site-list"]}>
      <AceCam></AceCam>
      <SpecterAndRoss></SpecterAndRoss>
      <SkyDiveDubai></SkyDiveDubai>
    </ul>
  );
};

export default SiteList;
