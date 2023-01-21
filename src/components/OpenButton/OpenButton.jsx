import styles from "./OpenButton.module.scss";
import welcomeRectangle from "../../images/welcome/welcome_rectangle.svg";
import { useState, useEffect } from "react";
import github from "../../images/socials/github.svg";

const OpenButton = ({
  section,
  projectDescription,
  projectLink,
  projectNameStyle,
  workDescription,
  workNameStyle,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [openBtnStyle, setOpenBtnStyle] = useState({});

  useEffect(() => {
    setIsClicked(false);
  }, [projectDescription]);

  useEffect(() => {
    setOpenBtnStyle({ opacity: 0 });
    setTimeout(() => {
      setOpenBtnStyle({ transition: "1s", opacity: 1 });
    }, 300);
  }, [projectNameStyle]);

  useEffect(() => {
    setIsClicked(false);
  }, [workDescription]);

  useEffect(() => {
    setOpenBtnStyle({ opacity: 0 });
    setTimeout(() => {
      setOpenBtnStyle({ transition: "1s", opacity: 1 });
    }, 300);
  }, [workNameStyle]);

  return (
    <div
      className={styles.welcome_btn}
      onClick={() => setIsClicked((prevIsClicked) => !prevIsClicked)}
      style={openBtnStyle}
    >
      <div className={styles.welcome_btn_rectangle}>
        <img src={welcomeRectangle} alt="welcome-rectangle" />
      </div>
      {!isClicked ? (
        <p className={styles.welcome_btn_text}>click to open</p>
      ) : (
        <div className={styles.welcome_introduction}>
          {section === "welcome" && (
            <p className={styles.welcome_introduction_text}>
              I am a junior web developer. My skills include a confident
              knowledge of HTML, CSS (Sass, Tailwind, Material UI) and
              Javascript of course. I am studying the React framework and this
              application, like the others that I will show, is made using
              React. If you are interested, use the{" "}
              <span style={{ color: "#ceb7ff" }}>Mouse Wheel</span> or the{" "}
              <span style={{ color: "#ceb7ff" }}>Enter</span> and{" "}
              <span style={{ color: "#ceb7ff" }}>Backspace</span> to navigate
              through sections.
            </p>
          )}
          {section === "my_projects" && (
            <div className={styles.my_projects_introduction}>
              <img
                src={github}
                alt="github"
                onClick={() => {
                  window.open(projectLink);
                }}
              />
              <p className={styles.welcome_introduction_text}>
                {projectDescription}
              </p>
            </div>
          )}
          {section === "work_experience" && (
            <div className={styles.my_projects_introduction}>
              <p className={styles.welcome_introduction_text}>
                {workDescription}
              </p>
            </div>
          )}
        </div>
      )}
      <div className={styles.welcome_btn_rectangle_flipped}>
        <img src={welcomeRectangle} alt="welcome-rectangle" />
      </div>
    </div>
  );
};

export default OpenButton;
