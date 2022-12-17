import "../index.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import WorkSection from "./WorkSection/WorkSection";
import ContactMeSection from "./ContactMeSection/ContactMeSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import FooterSection from "./FooterSection/FooterSection";

import { useEffect, useState } from "react";

function App() {
  const [allHeadings, setAllHeadings] = useState([]);

  useEffect(() => {
    setAllHeadings(document.querySelectorAll("h2"));
  }, []);

  const revealSubHeading = function (entries, _) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("heading-hidden");
  };

  const headingObserver = new IntersectionObserver(revealSubHeading, {
    root: null,
    threshold: 0.15,
  });

  allHeadings.forEach(function (heading) {
    headingObserver.observe(heading);
    heading.classList.add("heading-hidden");
  });

  return (
    <div>
      <NavigationBar></NavigationBar>
      <AboutMeSection></AboutMeSection>
      <SkillsSection></SkillsSection>
      <WorkSection></WorkSection>
      <TestimonialSection></TestimonialSection>
      <ContactMeSection></ContactMeSection>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
