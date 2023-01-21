import { useEffect, useState } from "react";
import Contact from "../Contact/Contact";
import ControlArrows from "../ControlArrows/ControlArrows";
import ControlButtons from "../ControlButtons/ControlButtons";
import OpenButton from "../OpenButton/OpenButton";
import styles from "./MyProjects.module.scss";

import ProjectList from "../MyProjects/ProjectList";

const MyProjects = ({ setCurrentSection }) => {
  const projectListLength = ProjectList.length;
  const [project, setProject] = useState(1);
  const [projectLink, setProjectLink] = useState(ProjectList[project - 1].link);
  const [projectDescription, setProjectDescription] = useState(
    ProjectList[project - 1].description
  );
  const [projectName, setProjectName] = useState(ProjectList[project - 1].name);
  const [projectNameStyle, setProjectNameStyle] = useState({});

  useEffect(() => {
    setProjectDescription(ProjectList[project - 1].description);
    setProjectName(ProjectList[project - 1].name);
    setProjectLink(ProjectList[project - 1].link);
  }, [project]);

  return (
    <div className={styles.my_projects}>
      <Contact setCurrentSection={setCurrentSection} />
      <OpenButton
        section="my_projects"
        projectDescription={projectDescription}
        projectLink={projectLink}
        projectNameStyle={projectNameStyle}
      />
      <ControlButtons />
      <ControlArrows
        setProject={setProject}
        project={project}
        projectListLength={projectListLength}
        setProjectNameStyle={setProjectNameStyle}
      />
      <div className={styles.my_projects_content}>
        <div className={styles.my_projects_title}>
          <div className={styles.my_projects_title_rectangle}></div>
          <p className={styles.my_projects_title_text}>my projects</p>
          <div className={styles.my_projects_title_rectangle}></div>
        </div>
        <div
          className={styles.my_projects_name}
          style={projectNameStyle}
        >{`project${project} : ${projectName}`}</div>
      </div>
    </div>
  );
};

export default MyProjects;
