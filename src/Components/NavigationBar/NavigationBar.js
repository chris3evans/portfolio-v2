import styles from "./NavigationBar.module.css";
import PageSectionList from "../PageSectionList/PageSectionList";
import LinkList from "../LinksList/LinksList";
import "../../index.css";

const NavigationBar = function () {
  const navigation = document.querySelector(".navigation");

  const openMobileNavigationHandler = function () {
    navigation.classList.add("navigation-open");
  };
  const closeMobileNavigationHandler = function () {
    navigation.classList.remove("navigation-open");
  };

  return (
    <nav className="navigation">
      <LinkList></LinkList>
      <PageSectionList></PageSectionList>
      <button className={styles["mobile-navigation"]}>
        <img
          onClick={openMobileNavigationHandler}
          id="open-icon"
          className="mobile-navigation-icon"
          src={require("../../assets/menu-icon.png")}
        ></img>
        <img
          onClick={closeMobileNavigationHandler}
          id="close-icon"
          className="mobile-navigation-icon"
          src={require("../../assets/close-icon.png")}
        ></img>
      </button>
    </nav>
  );
};

export default NavigationBar;
