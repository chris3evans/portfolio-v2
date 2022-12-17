import "./SkillList.css";

import SkillItem from "../SkillItem/SkillItem";

const BackEndSkillList = function () {
  return (
    <div className="skills">
      <div className="skills-top-light-container">
        <img
          className="skills-top-light-image"
          src={require("../../assets/top-spot-light-transparent.png")}
          alt="visual effect of light shining on the floor"
        ></img>
      </div>
      <div className="skills-container">
        <h3 className="skill-list-heading">Back End</h3>
        <ul className="skills-list">
          <SkillItem skill="Node"></SkillItem>
          <SkillItem skill="Express"></SkillItem>
          <SkillItem skill="Koa"></SkillItem>
          <SkillItem skill="PostgreSQL"></SkillItem>
          <SkillItem skill="Sequelize"></SkillItem>
          <SkillItem skill="MongoDB"></SkillItem>
          <SkillItem skill="Mongoose"></SkillItem>
        </ul>
      </div>
      <div className="skills-bottom-light-container">
        <img
          className="skills-bottom-light-image"
          src={require("../../assets/bottom-spot-light-transparent.png")}
          alt="visual effect of a spotlight shining upwards"
        ></img>
      </div>
    </div>
  );
};

export default BackEndSkillList;
