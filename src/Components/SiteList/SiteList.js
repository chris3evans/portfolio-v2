import styles from "./SiteList.module.css";

import AceCam from "../SiteItems/AceCam";
import SpecterAndRoss from "../SiteItems/SpecterAndRoss";
import SkyDiveDubai from "../SiteItems/SkyDiveDubai";
import Miniforge from "../SiteItems/Miniforge";
import TheDragonClub from "../SiteItems/TheDragonClub";
import WazoCapital from "../SiteItems/WazoCapital";

const SiteList = function () {
  return (
    <ul className={styles["site-list"]}>
      <AceCam></AceCam>
      <SpecterAndRoss></SpecterAndRoss>
      <SkyDiveDubai></SkyDiveDubai>
      <Miniforge></Miniforge>
      <TheDragonClub></TheDragonClub>
      <WazoCapital></WazoCapital>
    </ul>
  );
};

export default SiteList;
