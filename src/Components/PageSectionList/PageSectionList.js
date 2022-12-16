import PageSectionItem from "../PageSectionItem/PageSectionItem";
import "../../index.css";

import { useState, useEffect } from "react";

const PageSectionList = function () {
  const [sectionViewDataId, setSectionViewDataId] =
    useState("#section-about-me");

  useEffect(() => {
    getCurCoords(sectionViewDataId);
  }, [sectionViewDataId]);

  const setSectionHandler = function (event) {
    setSectionViewDataId(event.target.closest("li").dataset.id);
  };

  const getCurCoords = function (sectionId) {
    const section = document.querySelector(`${sectionId}`);
    const coords = section.getBoundingClientRect();

    window.scrollTo({
      left: coords.left + window.pageXOffset,
      top: coords.top + window.pageYOffset,
      behavior: "smooth",
    });
  };

  return (
    <ul className="page-section-list">
      <PageSectionItem
        id="#section-about-me"
        handler={setSectionHandler}
        sectionName="About Me"
      ></PageSectionItem>
      <PageSectionItem
        id="#section-my-skills"
        handler={setSectionHandler}
        sectionName="My Skills"
      ></PageSectionItem>
      <PageSectionItem
        id="#section-my-experience"
        handler={setSectionHandler}
        sectionName="My Experience"
      ></PageSectionItem>
      <PageSectionItem
        id="#section-testimonials"
        handler={setSectionHandler}
        sectionName="Testimonials"
      ></PageSectionItem>
      <PageSectionItem
        id="#section-work-with-me"
        handler={setSectionHandler}
        sectionName="Work With Me"
      ></PageSectionItem>
    </ul>
  );
};

export default PageSectionList;
