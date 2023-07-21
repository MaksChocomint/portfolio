import styles from "./App.module.scss";
import planet from "../images/planet.svg";
import Welcome from "./Welcome/Welcome";
import Skills from "./Skills/Skills";
import MyProjects from "./MyProjects/MyProjects";
import ContactSection from "./ContactSection/ContactSection";
import { useState, useEffect, useRef } from "react";
import WorkExperience from "./WorkExperience/WorkExperience";

const App = () => {
  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        setPlanetRotation((prevPlanetRotation) => prevPlanetRotation - 90);
      } else {
        setPlanetRotation((prevPlanetRotation) => prevPlanetRotation + 90);
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
      } else {
        /* up swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }

  const [planetRotation, setPlanetRotation] = useState(0);
  const [wheelSensitivity, setWheelSensitivity] = useState(0);
  const [currentSection, setCurrentSection] = useState("welcome");

  const planetRotationStyle = useRef({
    rotate: `${planetRotation}deg`,
  });

  useEffect(() => {
    planetRotationStyle.current = {
      rotate: `${planetRotation}deg`,
    };

    if ((planetRotation % 360) / 90 === 0) setCurrentSection("welcome");
    else if (
      (planetRotation % 360) / 90 === 3 ||
      (planetRotation % 360) / 90 === -1
    )
      setCurrentSection("skills");
    else if (
      (planetRotation % 360) / 90 === 2 ||
      (planetRotation % 360) / 90 === -2
    )
      setCurrentSection("my_projects");
    else if (
      (planetRotation % 360) / 90 === 1 ||
      (planetRotation % 360) / 90 === -3
    )
      setCurrentSection("work_experience");
  }, [planetRotation]);

  const rotatePlanetOnWheel = (e) => {
    setWheelSensitivity(
      (prevWheelSensitivity) => prevWheelSensitivity + e.deltaY
    );
    if (wheelSensitivity / 375 >= 1) {
      setPlanetRotation((prevPlanetRotation) => prevPlanetRotation - 90);
      setWheelSensitivity(0);
    } else if (wheelSensitivity / 375 <= -1) {
      setPlanetRotation((prevPlanetRotation) => prevPlanetRotation + 90);
      setWheelSensitivity(0);
    }
  };

  const rotatePlanetOnKeyDown = (e) => {
    if (e.key === "Enter") {
      setPlanetRotation((prevPlanetRotation) => prevPlanetRotation - 90);
    } else if (e.key === "Backspace") {
      setPlanetRotation((prevPlanetRotation) => prevPlanetRotation + 90);
    }
  };

  return (
    <div
      className={styles.app}
      onKeyDown={
        currentSection !== "contact_section" ? rotatePlanetOnKeyDown : null
      }
      onWheel={
        currentSection !== "contact_section" ? rotatePlanetOnWheel : null
      }
    >
      <div className={styles.app_bg}>
        {currentSection !== "contact_section" && (
          <div tabIndex="-1" className={styles.planet}>
            <img
              src={planet}
              style={planetRotationStyle.current}
              alt="Planet"
              className={styles.planet_img}
            ></img>
          </div>
        )}
        {currentSection === "welcome" && (
          <Welcome setCurrentSection={setCurrentSection} />
        )}
        {currentSection === "skills" && (
          <Skills setCurrentSection={setCurrentSection} />
        )}
        {currentSection === "my_projects" && (
          <MyProjects setCurrentSection={setCurrentSection} />
        )}
        {currentSection === "work_experience" && (
          <WorkExperience setCurrentSection={setCurrentSection} />
        )}
        {currentSection === "contact_section" && (
          <ContactSection
            setCurrentSection={setCurrentSection}
            currentSection={currentSection}
          />
        )}
      </div>
    </div>
  );
};

export default App;
