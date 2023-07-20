import { useEffect, useState } from "react";
import Contact from "../Contact/Contact";
import ControlArrows from "../ControlArrows/ControlArrows";
import ControlButtons from "../ControlButtons/ControlButtons";
import OpenButton from "../OpenButton/OpenButton";
import styles from "./WorkExperience.module.scss";

import WorkList from "../WorkExperience/WorkList";

const WorkExperience = ({ setCurrentSection }) => {
  const workListLength = WorkList.length;
  const [work, setWork] = useState(1);
  const [workDescription, setWorkDescription] = useState(
    WorkList[work - 1].description
  );
  const [workName, setWorkName] = useState(WorkList[work - 1].name);
  const [workNameStyle, setWorkNameStyle] = useState({});

  useEffect(() => {
    setWorkDescription(WorkList[work - 1].description);
    setWorkName(WorkList[work - 1].name);
  }, [work]);

  return (
    <div className={styles.work_experience}>
      <Contact
        setCurrentSection={setCurrentSection}
        style={styles.contact_work}
      />
      <OpenButton
        section="work_experience"
        workDescription={workDescription}
        workNameStyle={workNameStyle}
      />
      <ControlButtons />
      <ControlArrows
        setWork={setWork}
        work={work}
        workListLength={workListLength}
        setWorkNameStyle={setWorkNameStyle}
      />
      <div className={styles.work_experience_content}>
        <div className={styles.work_experience_title}>
          <div className={styles.work_experience_title_rectangle}></div>
          <p className={styles.work_experience_title_text}>
            my work experience
          </p>
          <div className={styles.work_experience_title_rectangle}></div>
        </div>
        <div
          className={styles.work_experience_name}
          style={workNameStyle}
        >{`work${work} : ${workName}`}</div>
      </div>
    </div>
  );
};

export default WorkExperience;
