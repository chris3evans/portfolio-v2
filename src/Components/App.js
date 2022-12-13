import styles from "./App.module.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import WorkSection from "./WorkSection/WorkSection";

function App() {
  return (
    <div className={styles["app"]}>
      <NavigationBar></NavigationBar>
      <AboutMeSection></AboutMeSection>
      <SkillsSection></SkillsSection>
      <WorkSection></WorkSection>
    </div>
  );
}

export default App;
