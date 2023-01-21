import styles from "./Welcome.module.scss";

import Contact from "../Contact/Contact";
import Socials from "../Socials/Socials";
import OpenButton from "../OpenButton/OpenButton";
import ControlButtons from "../ControlButtons/ControlButtons";

const Welcome = ({ setCurrentSection }) => {
  return (
    <div className={styles.welcome}>
      <Contact setCurrentSection={setCurrentSection} />
      <Socials />
      <OpenButton section="welcome" />
      <ControlButtons />
      <div className={styles.welcome_greeting}>
        <div className={styles.welcome_message}>
          <div className={styles.welcome_message_from_earth}>
            <div className={styles.welcome_message_rectangle}></div>
            <p className={styles.welcome_message_text}>a message from earth</p>
          </div>
          <p className={styles.welcome_message_hello}>
            hello fellow galaxy member
          </p>
          <div className={styles.welcome_message_from_earth}>
            <p className={styles.welcome_message_text}>a message from earth</p>
            <div className={styles.welcome_message_rectangle}></div>
          </div>
        </div>

        <p className={styles.welcome_name}>i am maksim</p>
      </div>
    </div>
  );
};

export default Welcome;
