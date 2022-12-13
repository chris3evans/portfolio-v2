import styles from "./TechIconList.module.css";

import TechIconItem from "../TechIconItem/TechIconItem";

const TechIconList = function (props) {
  return (
    <ul id={styles[`${props.id}`]} className={styles["tech-icon-list"]}>
      <TechIconItem
        tech="Angular"
        imageUrl="angular-transparent.png"
      ></TechIconItem>
      <TechIconItem
        tech="React"
        imageUrl="react-transparent.png"
      ></TechIconItem>
      <TechIconItem
        tech="JavaScript"
        imageUrl="javascript-transparent.png"
      ></TechIconItem>
      <TechIconItem tech="HTML" imageUrl="html-transparent.png"></TechIconItem>
      <TechIconItem tech="CSS" imageUrl="css-transparent.png"></TechIconItem>
      <TechIconItem tech="SASS" imageUrl="sass-transparent.png"></TechIconItem>
      <TechIconItem
        tech="Tailwind"
        imageUrl="tailwind-transparent.png"
      ></TechIconItem>
      <TechIconItem
        tech="TypeScript"
        imageUrl="typescript-transparent.png"
      ></TechIconItem>
      <TechIconItem tech="MUI" imageUrl="mui-transparent.png"></TechIconItem>
      <TechIconItem tech="Node" imageUrl="node-transparent.png"></TechIconItem>
      <TechIconItem
        tech="Express"
        imageUrl="express-transparent.png"
      ></TechIconItem>
      <TechIconItem tech="Koa" imageUrl="koa.png"></TechIconItem>
      <TechIconItem
        tech="Postgres"
        imageUrl="postgres-transparent.png"
      ></TechIconItem>
      <TechIconItem
        tech="Sequelize"
        imageUrl="sequelize-transparent.png"
      ></TechIconItem>
      <TechIconItem
        tech="Mongo"
        imageUrl="mongodb-transparent.png"
      ></TechIconItem>
      <TechIconItem
        tech="Mongoose"
        imageUrl="mongoose-transparent.png"
      ></TechIconItem>
      <TechIconItem tech="Jest" imageUrl="jest-transparent.png"></TechIconItem>
      <TechIconItem
        tech="Cypress"
        imageUrl="cypress-transparent.png"
      ></TechIconItem>
      <TechIconItem
        tech="Github"
        imageUrl="github-transparent.png"
      ></TechIconItem>

      <TechIconItem
        tech="Angular"
        imageUrl="angular-transparent.png"
      ></TechIconItem>
      <TechIconItem
        tech="React"
        imageUrl="react-transparent.png"
      ></TechIconItem>
      <TechIconItem
        tech="JavaScript"
        imageUrl="javascript-transparent.png"
      ></TechIconItem>
      <TechIconItem tech="HTML" imageUrl="html-transparent.png"></TechIconItem>
      <TechIconItem tech="CSS" imageUrl="css-transparent.png"></TechIconItem>
      <TechIconItem tech="SASS" imageUrl="sass-transparent.png"></TechIconItem>
      <TechIconItem
        tech="Tailwind"
        imageUrl="tailwind-transparent.png"
      ></TechIconItem>
      <TechIconItem
        tech="TypeScript"
        imageUrl="typescript-transparent.png"
      ></TechIconItem>
      <TechIconItem tech="MUI" imageUrl="mui-transparent.png"></TechIconItem>
      <TechIconItem tech="Node" imageUrl="node-transparent.png"></TechIconItem>
      <TechIconItem
        tech="Express"
        imageUrl="express-transparent.png"
      ></TechIconItem>
      <TechIconItem tech="Koa" imageUrl="koa.png"></TechIconItem>
      <TechIconItem
        tech="Postgres"
        imageUrl="postgres-transparent.png"
      ></TechIconItem>
      <TechIconItem
        tech="Sequelize"
        imageUrl="sequelize-transparent.png"
      ></TechIconItem>
      <TechIconItem
        tech="Mongo"
        imageUrl="mongodb-transparent.png"
      ></TechIconItem>
      <TechIconItem
        tech="Mongoose"
        imageUrl="mongoose-transparent.png"
      ></TechIconItem>
      <TechIconItem tech="Jest" imageUrl="jest-transparent.png"></TechIconItem>
      <TechIconItem
        tech="Cypress"
        imageUrl="cypress-transparent.png"
      ></TechIconItem>
      {/* <TechIconItem
        tech="Github"
        imageUrl="github-transparent.png"
      ></TechIconItem> */}
    </ul>
  );
};

export default TechIconList;
