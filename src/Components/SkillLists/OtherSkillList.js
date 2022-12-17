import "./SkillList.css";

import SkillItem from "../SkillItem/SkillItem";

const OtherSkillList = function () {
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
        <h3 className="skill-list-heading">Other</h3>
        <ul className="skills-list">
          <SkillItem skill="TypeScript"></SkillItem>
          <SkillItem skill="GitHub"></SkillItem>
          <SkillItem skill="GitFlow"></SkillItem>
          <SkillItem skill="Responsive Design"></SkillItem>
          <SkillItem skill="Material UI"></SkillItem>
          <SkillItem skill="Cypress"></SkillItem>
          <SkillItem skill="Jest"></SkillItem>
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

export default OtherSkillList;
