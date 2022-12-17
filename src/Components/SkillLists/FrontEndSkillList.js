import "./SkillList.css";

import SkillItem from "../SkillItem/SkillItem";

const FrontEndSkillList = function () {
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
        <h3 className="skill-list-heading">Front End</h3>
        <ul className="skills-list">
          <SkillItem skill="JavaScript"></SkillItem>
          <SkillItem skill="HTML5"></SkillItem>
          <SkillItem skill="CSS3"></SkillItem>
          <SkillItem skill="SASS/SCSS"></SkillItem>
          <SkillItem skill="Tailwind CSS"></SkillItem>
          <SkillItem skill="React"></SkillItem>
          <SkillItem skill="Angular"></SkillItem>
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

export default FrontEndSkillList;
