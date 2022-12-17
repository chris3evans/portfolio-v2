import styles from "./TechIconItem.module.css";

const TechIconItem = function (props) {
  return (
    <li className={styles["tech-icon-item"]} key={props.tech}>
      <img
        className={styles["tech-icon"]}
        src={require(`../../assets/${props.imageUrl}`)}
        alt={`The icon for ${props.tech}`}
      ></img>
    </li>
  );
};

export default TechIconItem;
