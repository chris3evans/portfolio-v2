import styles from "./AppList.module.css";

import MyFitnessTracker from "../AppItems/MyFitnessTracker";
import Topfolio from "../AppItems/Topfolio";

const AppList = function () {
  return (
    <ul className={styles["app-list"]}>
      <MyFitnessTracker></MyFitnessTracker>
      <Topfolio></Topfolio>
    </ul>
  );
};

export default AppList;
