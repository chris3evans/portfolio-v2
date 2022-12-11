import styles from "./NavigationBar.module.css";
import PageSectionList from "../PageSectionList/PageSectionList";
import LinkList from "../LinksList/LinksList";

const NavigationBar = function () {
  return (
    <nav className={styles["navigation"]}>
      <LinkList></LinkList>
      <PageSectionList></PageSectionList>
    </nav>
  );
};

export default NavigationBar;
