import "./App.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import SkillsSection from "./SkillsSection/SkillsSection";

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <AboutMeSection></AboutMeSection>
      <SkillsSection></SkillsSection>
    </div>
  );
}

export default App;
