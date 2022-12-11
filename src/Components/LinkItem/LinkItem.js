import styles from "./LinkItem.module.css";

const LinkItem = function (props) {
  return (
    <li key={props.asset} className={styles["link-item"]}>
      <a className={styles["link-link"]} href={props.link}>
        <img
          className={styles["link-image"]}
          src={require(`../../assets/${props.imageUrl}`)}
          alt={`An icon for ${props.asset}, the link will take you to ${props.asset} if clicked`}
        />
      </a>
    </li>
  );
};

export default LinkItem;
