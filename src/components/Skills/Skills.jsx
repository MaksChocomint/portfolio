import styles from "./Skills.module.scss";
import Contact from "../Contact/Contact";
import Socials from "../Socials/Socials";
import ControlButtons from "../ControlButtons/ControlButtons";

import SkillList from "./SkillList";

const Skills = ({ setCurrentSection }) => {
  const skills = SkillList.map((skill) => (
    <div className={styles.skill} key={skill.id}>
      {skill.name}
    </div>
  ));
  return (
    <div className={styles.skills}>
      <Contact setCurrentSection={setCurrentSection} />
      <Socials />
      <ControlButtons />
      <div className={styles.skills_content}>
        <div className={styles.skills_title}>
          <div className={styles.skills_title_rectangle}></div>
          <p className={styles.skills_title_text}>my sk!lls</p>
          <div className={styles.skills_title_rectangle}></div>
        </div>
        <div className={styles.skills_list_intro}>
          here is a list of some of my skills
        </div>
        <div className={styles.skills_list}>{skills}</div>
      </div>
    </div>
  );
};

export default Skills;
