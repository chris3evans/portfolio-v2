import styles from "./LinksList.module.css";
import LinkItem from "../LinkItem/LinkItem";

const LinkList = function () {
  return (
    <ul className={styles["link-list"]}>
      <LinkItem link="*GITHUB LINK*"></LinkItem>
      <LinkItem link="*LINKEDIN LINK*"></LinkItem>
      <LinkItem link="*RESUME LINK*"></LinkItem>
    </ul>
  );
};

export default LinkList;
