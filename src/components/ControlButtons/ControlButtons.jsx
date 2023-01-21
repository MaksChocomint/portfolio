import styles from "./ControlButtons.module.scss";
import enter from "../../images/control/enter.svg";
import wheel from "../../images/control/wheel.svg";

const ControlButtons = () => {
  return (
    <div className={styles.control_buttons}>
      <div className={styles.control_enter}>
        <p>Enter</p>
        <img src={enter} alt="Enter" />
      </div>
      <div className={styles.control_wheel}>
        <p>Scroll</p>
        <img src={wheel} alt="Wheel" />
      </div>
    </div>
  );
};

export default ControlButtons;
