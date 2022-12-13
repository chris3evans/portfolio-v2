import styles from "./LinksList.module.css";
import LinkItem from "../LinkItem/LinkItem";

const LinkList = function () {
  return (
    <ul className={styles["link-list"]}>
      <LinkItem
        link="https://github.com/chris3evans"
        asset="GitHub"
        imageUrl="github-transparent.png"
      ></LinkItem>
      <LinkItem
        link="https://www.linkedin.com/in/christopher-3-evans/"
        asset="LinkedIn"
        imageUrl="linkedin-image-icon.png"
      ></LinkItem>
      {/* <LinkItem
        link="#"
        asset="Resume"
        imageUrl="resume-image-icon.png"
      ></LinkItem> */}
    </ul>
  );
};

export default LinkList;
