import styles from "./AppList.module.css";

import MyFitnessTracker from "../AppItems/MyFitnessTracker";

const AppList = function () {
  return (
    <ul className={styles["app-list"]}>
      <MyFitnessTracker></MyFitnessTracker>
    </ul>
  );
};

export default AppList;
